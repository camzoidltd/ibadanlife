import { AVATARS } from '../lib/auth'
import type { Profile } from '../lib/auth'
import type { User } from '@supabase/supabase-js'
import type { Player } from '../types/game'

type Props = {
  authUser: User | null
  profile: Profile | null
  authMode: 'signin' | 'signup'
  setAuthMode: (m: 'signin' | 'signup') => void
  authEmail: string
  setAuthEmail: (s: string) => void
  authPass: string
  setAuthPass: (s: string) => void
  authName: string
  setAuthName: (s: string) => void
  authAvatar: string
  setAuthAvatar: (s: string) => void
  authError: string
  authBusy: boolean
  doAuth: () => void
  doSignOut: () => void
  player: Player | null
  onBack: () => void
  onContinue: () => void
}

export function AuthScreen(p: Props) {
  return (
    <div className="app-shell">
      <div className="topbar">
        <button className="btn-ghost" onClick={p.onBack}>← Back</button>
        <div className="brand">ibadan<span>Life</span></div>
        <div />
      </div>
      <div className="auth-card">
        {p.authUser ? (
          <>
            <h2>Your account</h2>
            <div className="profile-bar">
              <div className="big-avatar">{p.profile?.avatar_emoji || '🧑'}</div>
              <div className="meta">
                <strong>{p.profile?.display_name || p.authUser.email}</strong>
                <span>{p.authUser.email}</span>
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginBottom: 8 }} onClick={p.onContinue}>Continue playing →</button>
            <button className="btn-ghost" style={{ width: '100%' }} onClick={p.doSignOut}>Sign out</button>
          </>
        ) : (
          <>
            <h2>{p.authMode === 'signup' ? 'Create account' : 'Sign in'}</h2>
            {p.authMode === 'signup' && (
              <>
                <label>Display name</label>
                <input value={p.authName} onChange={e => p.setAuthName(e.target.value)} placeholder="Your name in Oyo" />
                <label>Avatar</label>
                <div className="avatar-pick">
                  {AVATARS.map(a => (
                    <button key={a} type="button" className={p.authAvatar === a ? 'selected' : ''} onClick={() => p.setAuthAvatar(a)}>{a}</button>
                  ))}
                </div>
              </>
            )}
            <label>Email</label>
            <input type="email" value={p.authEmail} onChange={e => p.setAuthEmail(e.target.value)} placeholder="you@email.com" />
            <label>Password</label>
            <input type="password" value={p.authPass} onChange={e => p.setAuthPass(e.target.value)} placeholder="••••••••" />
            {p.authError && <p style={{ color: '#f87171', fontSize: '0.85rem' }}>{p.authError}</p>}
            <button className="btn-primary" style={{ width: '100%', marginTop: 8 }} disabled={p.authBusy || !p.authEmail || !p.authPass} onClick={p.doAuth}>
              {p.authBusy ? '…' : p.authMode === 'signup' ? 'Sign up' : 'Sign in'}
            </button>
            <button className="btn-ghost" style={{ width: '100%', marginTop: 8 }} onClick={() => p.setAuthMode(p.authMode === 'signup' ? 'signin' : 'signup')}>
              {p.authMode === 'signup' ? 'Already have an account? Sign in' : 'New here? Create account'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
