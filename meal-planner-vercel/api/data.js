const { getSupabaseClient } = require('./_supabase');

// Map between our JS camelCase field names and Postgres snake_case columns
function rowToDb(row) {
  if (!row) return null;
  return {
    meals: row.meals || [],
    foods: row.foods || [],
    plan: row.plan || {},
    dayOrder: row.day_order || ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    grocery: row.grocery || [],
    checkedItems: row.checked_items || {},
    lastUpdated: row.updated_at || null
  };
}

function dbToRow(data) {
  const row = {};
  if (data.meals !== undefined) row.meals = data.meals;
  if (data.foods !== undefined) row.foods = data.foods;
  if (data.plan !== undefined) row.plan = data.plan;
  if (data.dayOrder !== undefined) row.day_order = data.dayOrder;
  if (data.grocery !== undefined) row.grocery = data.grocery;
  if (data.checkedItems !== undefined) row.checked_items = data.checkedItems;
  row.updated_at = new Date().toISOString();
  return row;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  let supabase;
  try {
    supabase = getSupabaseClient();
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('meal_planner_data')
      .select('*')
      .eq('id', 'main')
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(rowToDb(data));
  }

  if (req.method === 'POST' || req.method === 'PATCH') {
    const updates = dbToRow(req.body || {});
    const { data, error } = await supabase
      .from('meal_planner_data')
      .update(updates)
      .eq('id', 'main')
      .select()
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true, lastUpdated: data.updated_at });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
