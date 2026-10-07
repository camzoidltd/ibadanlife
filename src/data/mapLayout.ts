/** Approximate layout positions for the interactive Oyo/Ibadan city map (0–100%). */
export interface MapNode {
  id: string
  x: number // 0–100
  y: number // 0–100
  roadTo?: string[] // connected node ids for road drawing
}

/** Ibadan metro focus — denser core + airport + outer towns */
export const IBADAN_MAP: MapNode[] = [
  { id: 'beere', x: 42, y: 48, roadTo: ['opo-yeosa', 'mapo', 'oje', 'oja-oba'] },
  { id: 'opo-yeosa', x: 45, y: 45, roadTo: ['beere', 'muslim-academy'] },
  { id: 'muslim-academy', x: 48, y: 42, roadTo: ['opo-yeosa', 'bodija'] },
  { id: 'oje', x: 38, y: 50, roadTo: ['beere', 'foko'] },
  { id: 'oja-oba', x: 40, y: 52, roadTo: ['beere', 'mapo'] },
  { id: 'foko', x: 36, y: 54, roadTo: ['oje', 'gege'] },
  { id: 'gege', x: 34, y: 56, roadTo: ['foko', 'molete'] },
  { id: 'molete', x: 38, y: 60, roadTo: ['gege', 'challenge'] },
  { id: 'mapo', x: 44, y: 50, roadTo: ['beere', 'dugbe', 'bowers-tower'] },
  { id: 'dugbe', x: 48, y: 52, roadTo: ['mapo', 'cocoa-house', 'ring-road'] },
  { id: 'cocoa-house', x: 50, y: 50, roadTo: ['dugbe'] },
  { id: 'bodija', x: 52, y: 38, roadTo: ['muslim-academy', 'ui', 'agodi'] },
  { id: 'ui', x: 58, y: 32, roadTo: ['bodija', 'agbowo'] },
  { id: 'agbowo', x: 55, y: 35, roadTo: ['ui', 'bodija'] },
  { id: 'agodi', x: 50, y: 42, roadTo: ['bodija', 'dugbe'] },
  { id: 'ring-road', x: 55, y: 55, roadTo: ['dugbe', 'challenge', 'ibadan-airport'] },
  { id: 'challenge', x: 48, y: 62, roadTo: ['ring-road', 'molete'] },
  { id: 'bowers-tower', x: 46, y: 46, roadTo: ['mapo'] },
  { id: 'ibadan-airport', x: 72, y: 48, roadTo: ['ring-road'] },
  { id: 'amala-spot', x: 43, y: 55, roadTo: ['dugbe', 'challenge'] },
]

/** Full Oyo state overview nodes */
export const OYO_STATE_MAP: MapNode[] = [
  { id: 'dugbe', x: 48, y: 55, roadTo: ['oyo-town', 'ogbomoso', 'ibadan-airport'] },
  { id: 'ibadan-airport', x: 55, y: 52, roadTo: ['dugbe'] },
  { id: 'oyo-town', x: 42, y: 35, roadTo: ['dugbe', 'ogbomoso', 'iseyin'] },
  { id: 'ogbomoso', x: 58, y: 28, roadTo: ['oyo-town', 'dugbe'] },
  { id: 'iseyin', x: 28, y: 30, roadTo: ['oyo-town', 'saki'] },
  { id: 'saki', x: 18, y: 22, roadTo: ['iseyin'] },
  { id: 'igbo-ora', x: 22, y: 48, roadTo: ['dugbe'] },
]

export function getMapNodes(view: 'ibadan' | 'oyo'): MapNode[] {
  return view === 'ibadan' ? IBADAN_MAP : OYO_STATE_MAP
}
