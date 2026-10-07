import { supabase, supabaseConfigured } from './supabase'
import type { User, Session } from '@supabase/supabase-js'

export interface Profile {
  id: string
  username: string | null
  display_name: string | null
  avatar_emoji: string
  avatar_url: string | null
  bio: string
  home_location_id: string | null
  money: number
  visibility_points: number
}

export async function signUp(email: string, password: string, displayName: string, avatarEmoji: string) {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName, avatar_emoji: avatarEmoji } },
  })
  if (error) throw error
  return data
}

export async function signIn(email: string, password: string) {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signOut() {
  if (!supabase) return
  await supabase.auth.signOut()
}

export async function getSession(): Promise<Session | null> {
  if (!supabase) return null
  const { data } = await supabase.auth.getSession()
  return data.session
}

export function onAuthChange(cb: (user: User | null) => void) {
  if (!supabase) return () => {}
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    cb(session?.user ?? null)
  })
  return () => data.subscription.unsubscribe()
}

export async function getProfile(userId: string): Promise<Profile | null> {
  if (!supabase) return null
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
  if (error || !data) return null
  return data as Profile
}

export async function updateProfile(userId: string, patch: Partial<Profile>) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single()
  if (error) throw error
  return data as Profile
}

export const AVATARS = ['🧑', '👨', '👩', '🧔', '👩‍🦱', '👨‍🦰', '🧕', '👴', '👵', '🧑‍💼', '👷', '👨‍🌾', '👩‍🎓', '🧑‍🎤']
