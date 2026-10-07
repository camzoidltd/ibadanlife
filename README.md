# ibadanLife

Browser life simulation for **Ibadan and all of Oyo State**.

## Live

- **App:** https://ibadan-life.netlify.app
- **GitHub:** https://github.com/camzoidltd/ibadanlife
- **Supabase:** project `vyhslxuecuaqkmfsawos` (gigs, news, hubs, auth, profiles)

## Features

- Illustrated interactive map (drag, zoom, roads, airport)
- Close street-level view (walk, swipe, interact with buildings)
- Homes, transport, jobs, freelance, hubs, faith, news
- Supabase Auth + shared multiplayer data

## Stack

Vite + React 19 + TypeScript + Supabase + Netlify

## Local

```bash
cp .env.example .env
# set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
npm install
npm run dev
```

## Deploy

```bash
npm run build
# Netlify: publish dist, env VITE_SUPABASE_*
```

Env vars on Netlify must include `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
