export type NeedKey = 'hunger' | 'energy' | 'hygiene' | 'social' | 'fun' | 'dignity';

export interface Needs {
  hunger: number;
  energy: number;
  hygiene: number;
  social: number;
  fun: number;
  dignity: number;
}

export type Zone = 'Ibadan' | 'Oyo' | 'Ogbomoso' | 'Oke-Ogun' | 'Ibarapa';

export type FaithPreference = 'christian' | 'muslim' | 'traditional' | 'none' | 'open';

export interface Player {
  id: string;
  name: string;
  background: string;
  money: number;
  locationId: string;
  homeId: string | null;
  needs: Needs;
  jobId: string | null;
  jobLevel: number;
  traits: string[];
  createdAt: number;
  lastTick: number;
  day: number;
  minuteOfDay: number;
  properties: Property[];
  businesses: Business[];
  adSlots: AdSlot[];
  totalEarned: number;
  faith: FaithPreference;
  hubsJoined: string[];
  visibilityPoints: number;
  freelancePosts: string[];
}

export interface Location {
  id: string;
  name: string;
  area: string;
  zone: Zone;
  type: 'residential' | 'commercial' | 'market' | 'campus' | 'landmark' | 'hospital' | 'nightlife' | 'gov' | 'park' | 'farm' | 'worship' | 'hub';
  description: string;
  emoji: string;
  actions: ActionId[];
  travelCost: number;
  travelMinutes: number;
  rentRange?: [number, number];
  powerBand?: 'A' | 'B' | 'C' | 'D' | 'E';
  buildable: boolean;
  maxPlots?: number;
}

export type ActionId =
  | 'eat_amala' | 'sleep' | 'shower' | 'work' | 'chat' | 'explore'
  | 'claim_plot' | 'pay_rent' | 'travel' | 'study' | 'party'
  | 'market_trade' | 'visit_tower' | 'hospital'
  | 'build_home' | 'build_business' | 'advertise' | 'collect_rent' | 'farm'
  | 'worship' | 'freelance' | 'hub_meet' | 'news_post';

export interface Job {
  id: string;
  title: string;
  category: string;
  basePay: number;
  levels: { title: string; pay: number; reqDignity: number }[];
  locationIds: string[];
  energyCost: number;
  minutes: number;
}

export interface ActionDef {
  id: ActionId;
  label: string;
  emoji: string;
  minutes: number;
  moneyDelta: number;
  needsDelta: Partial<Needs>;
  requiresLocationTypes?: Location['type'][];
  requiresJob?: boolean;
}

export type Screen =
  | 'landing' | 'create' | 'play' | 'map' | 'jobs' | 'home'
  | 'build' | 'business' | 'wallet'
  | 'freelance' | 'hubs' | 'faith' | 'news' | 'afterdark';

export type BuildingStage = 'empty' | 'foundation' | 'lintel' | 'roof' | 'finished';

export interface Property {
  id: string;
  locationId: string;
  name: string;
  stage: BuildingStage;
  type: 'home' | 'shop' | 'office' | 'farm';
  rooms: number;
  rentPerTenant: number;
  tenants: number;
  maxTenants: number;
  builtAt: number;
  lastCollected: number;
}

export interface Business {
  id: string;
  locationId: string;
  name: string;
  type: 'amala_spot' | 'shop' | 'salon' | 'viewing_centre' | 'transport' | 'farm_produce' | 'aso_oke' | 'tech_hub';
  level: number;
  dailyIncome: number;
  lastCollected: number;
  adBoost: number;
}

export interface AdSlot {
  id: string;
  locationId: string;
  businessId: string | null;
  message: string;
  emoji: string;
  daysLeft: number;
  costPaid: number;
}

export type FreelanceKind = 'offer' | 'request';

export interface FreelancePost {
  id: string;
  authorId: string;
  authorName: string;
  kind: FreelanceKind;
  category: string;
  title: string;
  description: string;
  priceNGN: number;
  locationId: string | null;
  createdAt: number;
  status: 'open' | 'in_progress' | 'done' | 'cancelled';
  contactNote: string;
}

export type HubCategory =
  | 'founders' | 'gamers' | 'creatives' | 'tech' | 'farmers' | 'students' | 'afterdark' | 'general';

export interface Hub {
  id: string;
  name: string;
  category: HubCategory;
  emoji: string;
  description: string;
  locationId: string;
  memberCount: number;
  isAdult: boolean;
}

export interface HubMessage {
  id: string;
  hubId: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: number;
  likes: number;
}

export interface NewsPost {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  body: string;
  createdAt: number;
  likes: number;
  shares: number;
  comments: NewsComment[];
  visibilityPoints: number;
  tags: string[];
}

export interface NewsComment {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: number;
}

export interface WorshipActivity {
  id: string;
  faith: FaithPreference;
  name: string;
  emoji: string;
  description: string;
  locationIds: string[];
  minutes: number;
  needsDelta: Partial<Needs>;
  moneyDelta: number;
}
