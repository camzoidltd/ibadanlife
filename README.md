# ibadanLife

Browser life simulation for **Ibadan and all of Oyo State** — inspired by Lagos Life, expanded with freelance, hubs, faith, news, auth, homes, transport and street scenes.

## Features

- Full Oyo map (Ibadan, Oyo, Ogbomoso, Oke-Ogun, Ibarapa) with real neighbourhoods
- Needs system, jobs with workplace pay, building & businesses
- **Freelancer corner**, hubs (founders, gamers…), After Dark 18+, faith paths, news feed
- **Supabase**: shared gigs/news/hubs + Auth (sign up / sign in / profiles)
- **Homes** with weekly rent & move-in costs
- **Transport**: trek, okada, keke, danfo, cab, car
- Street scene + drive mode on Live / Drive tabs

## Stack

- Vite + React 19 + TypeScript
- Supabase (Postgres, Auth, REST)
- Netlify static hosting

## Setup

```bash
cp .env.example .env
# set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
npm install
npm run dev
```

## Deploy (Netlify)

- Build: `npm run build`
- Publish directory: `dist`
- Env: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

## Supabase

Run SQL in `supabase/schema.sql` and `supabase/schema_v2.sql` (profiles) if tables are missing.

Project ref: `vyhslxuecuaqkmfsawos`
