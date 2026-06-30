const { createClient } = require('@supabase/supabase-js');

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured. Set SUPABASE_URL and SUPABASE_SECRET_KEY.');
  }
  return createClient(url, key);
}

module.exports = { getSupabaseClient };
