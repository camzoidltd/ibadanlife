import { createClient, SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const supabaseConfigured = Boolean(url && anon && !url.includes('YOUR_') && !anon.includes('YOUR_'))

export const supabase: SupabaseClient | null = supabaseConfigured
  ? createClient(url!, anon!)
  : null

export const SUPABASE_URL = url || 'https://vyhslxuecuaqkmfsawos.supabase.co'
