import type { FreelancePost, NewsPost, HubMessage } from '../types/game'
import { supabase, supabaseConfigured } from './supabase'

const GIGS_KEY = 'ibadanlife_gigs_v1'
const NEWS_KEY = 'ibadanlife_news_v1'
const HUB_MSG_KEY = 'ibadanlife_hub_msgs_v1'

function uid() {
  return crypto.randomUUID()
}

export const FREELANCE_CATEGORIES = [
  'Design', 'Development', 'Writing', 'Teaching', 'Domestic', 'Logistics',
  'Legal', 'Health', 'Media', 'Events', 'Construction', 'Other',
]

export async function loadGigs(): Promise<FreelancePost[]> {
  if (supabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('gigs')
      .select('*')
      .eq('status', 'open')
      .order('created_at', { ascending: false })
      .limit(100)
    if (!error && data) {
      return data.map((r: any) => ({
        id: r.id,
        authorId: r.author_id,
        authorName: r.author_name,
        kind: r.kind,
        category: r.category,
        title: r.title,
        description: r.description || '',
        priceNGN: r.price_ngn,
        locationId: r.location_id,
        createdAt: new Date(r.created_at).getTime(),
        status: r.status,
        contactNote: r.contact_note || '',
      }))
    }
  }
  try {
    const raw = localStorage.getItem(GIGS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

export async function addGig(
  gig: Omit<FreelancePost, 'id' | 'createdAt' | 'status'>
): Promise<FreelancePost> {
  if (supabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('gigs')
      .insert({
        author_id: gig.authorId,
        author_name: gig.authorName,
        kind: gig.kind,
        category: gig.category,
        title: gig.title,
        description: gig.description,
        price_ngn: gig.priceNGN,
        location_id: gig.locationId,
        contact_note: gig.contactNote,
        status: 'open',
      })
      .select()
      .single()
    if (!error && data) {
      return {
        id: data.id,
        authorId: data.author_id,
        authorName: data.author_name,
        kind: data.kind,
        category: data.category,
        title: data.title,
        description: data.description || '',
        priceNGN: data.price_ngn,
        locationId: data.location_id,
        createdAt: new Date(data.created_at).getTime(),
        status: data.status,
        contactNote: data.contact_note || '',
      }
    }
  }
  const full: FreelancePost = { ...gig, id: uid(), createdAt: Date.now(), status: 'open' }
  const gigs = await loadGigs()
  gigs.unshift(full)
  localStorage.setItem(GIGS_KEY, JSON.stringify(gigs))
  return full
}

export async function loadNews(): Promise<NewsPost[]> {
  if (supabaseConfigured && supabase) {
    const { data: posts, error } = await supabase
      .from('news_posts')
      .select('*')
      .order('visibility_points', { ascending: false })
      .limit(50)
    if (!error && posts) {
      return posts.map((p: any) => ({
        id: p.id,
        authorId: p.author_id,
        authorName: p.author_name,
        title: p.title,
        body: p.body || '',
        createdAt: new Date(p.created_at).getTime(),
        likes: p.likes,
        shares: p.shares,
        comments: [],
        visibilityPoints: p.visibility_points,
        tags: p.tags || [],
      }))
    }
  }
  try {
    const raw = localStorage.getItem(NEWS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

export async function addNewsPost(
  post: Omit<NewsPost, 'id' | 'createdAt' | 'likes' | 'shares' | 'comments' | 'visibilityPoints'>
): Promise<NewsPost> {
  if (supabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('news_posts')
      .insert({
        author_id: post.authorId,
        author_name: post.authorName,
        title: post.title,
        body: post.body,
        tags: post.tags,
        likes: 0,
        shares: 0,
        visibility_points: 0,
      })
      .select()
      .single()
    if (!error && data) {
      return {
        id: data.id,
        authorId: data.author_id,
        authorName: data.author_name,
        title: data.title,
        body: data.body || '',
        createdAt: new Date(data.created_at).getTime(),
        likes: 0,
        shares: 0,
        comments: [],
        visibilityPoints: 0,
        tags: data.tags || [],
      }
    }
  }
  const full: NewsPost = {
    ...post,
    id: uid(),
    createdAt: Date.now(),
    likes: 0,
    shares: 0,
    comments: [],
    visibilityPoints: 0,
  }
  const posts = await loadNews()
  posts.unshift(full)
  localStorage.setItem(NEWS_KEY, JSON.stringify(posts))
  return full
}

export async function likeNews(postId: string, _userId: string): Promise<NewsPost[]> {
  if (supabaseConfigured && supabase) {
    const { data: row } = await supabase.from('news_posts').select('likes, shares').eq('id', postId).single()
    if (row) {
      const likes = (row.likes || 0) + 1
      const shares = row.shares || 0
      await supabase.from('news_posts').update({ likes, visibility_points: likes + shares * 3 }).eq('id', postId)
    }
    return loadNews()
  }
  return loadNews()
}

export async function shareNews(postId: string): Promise<NewsPost[]> {
  if (supabaseConfigured && supabase) {
    const { data: row } = await supabase.from('news_posts').select('likes, shares').eq('id', postId).single()
    if (row) {
      const shares = (row.shares || 0) + 1
      const likes = row.likes || 0
      await supabase.from('news_posts').update({ shares, visibility_points: likes + shares * 3 }).eq('id', postId)
    }
    return loadNews()
  }
  return loadNews()
}

export async function commentNews(
  postId: string,
  authorId: string,
  authorName: string,
  text: string
): Promise<NewsPost[]> {
  if (supabaseConfigured && supabase) {
    await supabase.from('news_comments').insert({
      post_id: postId,
      author_id: authorId,
      author_name: authorName,
      text,
    })
    return loadNews()
  }
  return loadNews()
}

export async function loadHubMessages(hubId?: string): Promise<HubMessage[]> {
  if (supabaseConfigured && supabase) {
    let q = supabase.from('hub_messages').select('*').order('created_at', { ascending: false }).limit(80)
    if (hubId) q = q.eq('hub_id', hubId)
    const { data, error } = await q
    if (!error && data) {
      return data.map((m: any) => ({
        id: m.id,
        hubId: m.hub_id,
        authorId: m.author_id,
        authorName: m.author_name,
        text: m.text,
        createdAt: new Date(m.created_at).getTime(),
        likes: m.likes || 0,
      }))
    }
  }
  return []
}

export async function postHubMessage(
  hubId: string,
  authorId: string,
  authorName: string,
  text: string
): Promise<HubMessage> {
  if (supabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('hub_messages')
      .insert({ hub_id: hubId, author_id: authorId, author_name: authorName, text, likes: 0 })
      .select()
      .single()
    if (!error && data) {
      return {
        id: data.id,
        hubId: data.hub_id,
        authorId: data.author_id,
        authorName: data.author_name,
        text: data.text,
        createdAt: new Date(data.created_at).getTime(),
        likes: 0,
      }
    }
  }
  const msg: HubMessage = { id: uid(), hubId, authorId, authorName, text, createdAt: Date.now(), likes: 0 }
  return msg
}
