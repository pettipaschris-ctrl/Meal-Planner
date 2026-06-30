# 🥗 Family Meal Planner — Vercel + Supabase Edition

Accessible from anywhere (home, work, your phone on data) — not just your home Wi-Fi.
Data is stored in Supabase, shared between you and your wife in real time.

---

## What you already have done
- ✅ Supabase project created
- ✅ `meal_planner_data` table created with RLS policy
- ✅ Anthropic API key from console.anthropic.com
- ✅ Supabase Project URL + Secret API key

---

## Deploy steps

### 1. Push this code to GitHub
- Create a new repository on GitHub (e.g. `meal-planner`)
- Push this entire folder to it (drag-and-drop upload works fine on github.com,
  or use `git` commands if you're comfortable with them)

**Do NOT commit `.env.local`** — it's already in `.gitignore` so it won't be
included, but double check it's not in your repo before pushing.

### 2. Import into Vercel
- Go to vercel.com → **Add New → Project**
- Select your GitHub repo
- Vercel will detect it automatically — no special build settings needed

### 3. Add environment variables
Before clicking Deploy, expand **Environment Variables** and add these three:

| Name | Value |
|---|---|
| `ANTHROPIC_API_KEY` | your key from console.anthropic.com |
| `SUPABASE_URL` | your Supabase project URL |
| `SUPABASE_SECRET_KEY` | your Supabase secret API key |

### 4. Deploy
Click **Deploy**. Vercel builds and gives you a URL like:
```
https://meal-planner-yourname.vercel.app
```

That's it — open that URL on your phone, your wife's phone, anywhere. No Wi-Fi
restrictions, no local server to keep running.

---

## Using it day to day

Just bookmark the Vercel URL on your phone's home screen (Add to Home Screen
in Safari/Chrome) so it opens like an app.

## Updating it later

Any time you want changes, push new code to the same GitHub repo —
Vercel automatically redeploys within a minute or two.

## Costs

- **Vercel**: free tier covers this easily (personal projects, low traffic)
- **Supabase**: free tier covers this easily (small dataset, low traffic)
- **Anthropic API**: pay-as-you-go, pennies per AI action — same as before

## Your data

Lives in Supabase now, not a local file. You can view/edit it directly anytime
in the Supabase dashboard → Table Editor → `meal_planner_data`.
