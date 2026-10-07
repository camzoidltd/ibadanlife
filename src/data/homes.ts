export interface HomeListing {
  id: string
  name: string
  locationId: string
  area: string
  zone: string
  style: string
  emoji: string
  weeklyRent: number
  moveInCost: number
  rooms: number
  guests: number
  description: string
  tier: 'budget' | 'mid' | 'premium' | 'luxury'
}

export const HOMES: HomeListing[] = [
  { id: 'h-hall-ui', name: 'UI Hall of Residence', locationId: 'ui', area: 'UI / Agbowo', zone: 'Ibadan', style: 'Student bunk', emoji: '🛏️', weeklyRent: 1500, moveInCost: 4500, rooms: 1, guests: 2, description: 'Shared hostel room near campus.', tier: 'budget' },
  { id: 'h-face-beere', name: 'Face-me-I-face-you', locationId: 'beere', area: 'Beere', zone: 'Ibadan', style: 'Room & parlour', emoji: '🏠', weeklyRent: 3500, moveInCost: 10500, rooms: 1, guests: 3, description: 'Classic Beere compound living. Shared bathroom.', tier: 'budget' },
  { id: 'h-self-opo', name: 'Self-contain', locationId: 'opo-yeosa', area: 'Opo Yeosa', zone: 'Ibadan', style: 'Self-contain', emoji: '🏡', weeklyRent: 8000, moveInCost: 24000, rooms: 1, guests: 4, description: 'Your own toilet and kitchenette.', tier: 'budget' },
  { id: 'h-mini-bodija', name: 'Mini-flat Bodija', locationId: 'bodija', area: 'Bodija', zone: 'Ibadan', style: 'Mini-flat', emoji: '🏘️', weeklyRent: 25000, moveInCost: 75000, rooms: 2, guests: 6, description: 'Sitting room + bedroom in Bodija.', tier: 'mid' },
  { id: 'h-flat-ring', name: '2-Bed Flat Ring Road', locationId: 'ring-road', area: 'Ring Road', zone: 'Ibadan', style: 'Flat', emoji: '🏢', weeklyRent: 45000, moveInCost: 135000, rooms: 3, guests: 8, description: 'Modern flat near shops and transport.', tier: 'mid' },
  { id: 'h-duplex-agodi', name: 'Duplex Agodi GRA', locationId: 'agodi', area: 'Agodi GRA', zone: 'Ibadan', style: 'Duplex', emoji: '🏛️', weeklyRent: 180000, moveInCost: 540000, rooms: 5, guests: 12, description: 'Quiet GRA duplex with compound.', tier: 'premium' },
  { id: 'h-mansion-bodija', name: 'Mansion Old Bodija', locationId: 'bodija', area: 'Old Bodija', zone: 'Ibadan', style: 'Mansion', emoji: '🏰', weeklyRent: 800000, moveInCost: 2400000, rooms: 8, guests: 20, description: 'Full mansion with generator and gate.', tier: 'luxury' },
  { id: 'h-room-oyo', name: 'Room & Parlour Oyo', locationId: 'oyo-town', area: 'Oyo Town', zone: 'Oyo', style: 'Room', emoji: '🏠', weeklyRent: 2500, moveInCost: 7500, rooms: 1, guests: 3, description: 'Near Alaafin palace area.', tier: 'budget' },
  { id: 'h-flat-ogbomoso', name: 'Mini-flat Ogbomoso', locationId: 'ogbomoso', area: 'Ogbomoso', zone: 'Ogbomoso', style: 'Mini-flat', emoji: '🏡', weeklyRent: 12000, moveInCost: 36000, rooms: 2, guests: 5, description: 'Close to LAUTECH corridor.', tier: 'mid' },
  { id: 'h-farm-house', name: 'Farm House Oke-Ogun', locationId: 'saki', area: 'Saki', zone: 'Oke-Ogun', style: 'Farm house', emoji: '🌾', weeklyRent: 6000, moveInCost: 18000, rooms: 2, guests: 6, description: 'Rural house with land access.', tier: 'budget' },
]

export const TRANSPORT = [
  { id: 'walk', name: 'Trek', emoji: '🚶', costPerTrip: 0, speedMult: 1.4, traffic: 'none', desc: 'Free. Slow in heat.' },
  { id: 'okada', name: 'Okada', emoji: '🏍️', costPerTrip: 400, speedMult: 0.55, traffic: 'low', desc: 'Fast. Hold tight.' },
  { id: 'keke', name: 'Keke', emoji: '🛺', costPerTrip: 250, speedMult: 0.85, traffic: 'high', desc: 'Three on the bench.' },
  { id: 'danfo', name: 'Danfo / Bus', emoji: '🚌', costPerTrip: 200, speedMult: 1.0, traffic: 'full', desc: 'Enter with your change!' },
  { id: 'cab', name: 'Cab', emoji: '🚕', costPerTrip: 1200, speedMult: 0.7, traffic: 'full', desc: 'AC and comfort.' },
  { id: 'car', name: 'Your Car', emoji: '🚗', costPerTrip: 600, speedMult: 0.65, traffic: 'high', desc: 'Fuel only. Need to own a car.' },
] as const

export type TransportId = typeof TRANSPORT[number]['id']
