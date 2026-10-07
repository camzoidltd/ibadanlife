import type { ActionDef, ActionId } from '../types/game';

export const ACTIONS: Record<ActionId, ActionDef> = {
  eat_amala: {
    id: 'eat_amala', label: 'Chop Amala', emoji: '🍲', minutes: 35, moneyDelta: -1800,
    needsDelta: { hunger: 55, fun: 10, social: 5 },
  },
  sleep: {
    id: 'sleep', label: 'Sleep', emoji: '😴', minutes: 360, moneyDelta: 0,
    needsDelta: { energy: 70, hygiene: -10 },
  },
  shower: {
    id: 'shower', label: 'Shower / Bathe', emoji: '🚿', minutes: 20, moneyDelta: -200,
    needsDelta: { hygiene: 60, dignity: 5 },
  },
  work: {
    id: 'work', label: 'Work Shift', emoji: '💼', minutes: 120, moneyDelta: 0,
    needsDelta: { energy: -25, hunger: -15, dignity: 8 }, requiresJob: true,
  },
  chat: {
    id: 'chat', label: 'Yarn with People', emoji: '🗣️', minutes: 40, moneyDelta: 0,
    needsDelta: { social: 35, fun: 15, energy: -5 },
  },
  explore: {
    id: 'explore', label: 'Explore Area', emoji: '🚶', minutes: 45, moneyDelta: -500,
    needsDelta: { fun: 25, energy: -10, social: 5 },
  },
  claim_plot: {
    id: 'claim_plot', label: 'Claim Plot', emoji: '📜', minutes: 60, moneyDelta: 0,
    needsDelta: { dignity: 10, energy: -15 },
  },
  pay_rent: {
    id: 'pay_rent', label: 'Pay Rent / Agent', emoji: '🏠', minutes: 15, moneyDelta: -150000,
    needsDelta: { dignity: 10 },
  },
  travel: {
    id: 'travel', label: 'Travel', emoji: '🚐', minutes: 25, moneyDelta: -300,
    needsDelta: { energy: -8, hunger: -5 },
  },
  study: {
    id: 'study', label: 'Study / Research', emoji: '📖', minutes: 90, moneyDelta: 0,
    needsDelta: { energy: -15, fun: -5, dignity: 12 },
  },
  party: {
    id: 'party', label: 'Owambe / Party', emoji: '🎉', minutes: 150, moneyDelta: -8000,
    needsDelta: { fun: 50, social: 30, energy: -30, hygiene: -15 },
  },
  market_trade: {
    id: 'market_trade', label: 'Trade at Market', emoji: '🛒', minutes: 80, moneyDelta: 3500,
    needsDelta: { energy: -18, social: 10, fun: 5 },
  },
  visit_tower: {
    id: 'visit_tower', label: 'Climb / View', emoji: '🗼', minutes: 50, moneyDelta: -500,
    needsDelta: { fun: 30, energy: -12, dignity: 5 },
  },
  hospital: {
    id: 'hospital', label: 'Hospital Visit', emoji: '🏥', minutes: 60, moneyDelta: -3000,
    needsDelta: { energy: 20, hygiene: 15 },
  },
  build_home: {
    id: 'build_home', label: 'Build / Upgrade Home', emoji: '🏗️', minutes: 90, moneyDelta: 0,
    needsDelta: { energy: -20, dignity: 8 },
  },
  build_business: {
    id: 'build_business', label: 'Open Business', emoji: '🏪', minutes: 120, moneyDelta: 0,
    needsDelta: { energy: -25, dignity: 12 },
  },
  advertise: {
    id: 'advertise', label: 'Buy Ad Slot', emoji: '📢', minutes: 20, moneyDelta: 0,
    needsDelta: { dignity: 5 },
  },
  collect_rent: {
    id: 'collect_rent', label: 'Collect Rent', emoji: '💰', minutes: 15, moneyDelta: 0,
    needsDelta: { dignity: 3 },
  },
  farm: {
    id: 'farm', label: 'Farm Work', emoji: '🌾', minutes: 100, moneyDelta: 6000,
    needsDelta: { energy: -30, hunger: -10, dignity: 5 },
  },
  worship: {
    id: 'worship', label: 'Worship', emoji: '🙏', minutes: 60, moneyDelta: 0,
    needsDelta: { social: 15, dignity: 10 },
  },
  freelance: {
    id: 'freelance', label: 'Freelance Corner', emoji: '🛠️', minutes: 20, moneyDelta: 0,
    needsDelta: { social: 5 },
  },
  hub_meet: {
    id: 'hub_meet', label: 'Hub Meetup', emoji: '🤝', minutes: 40, moneyDelta: 0,
    needsDelta: { social: 25, fun: 15 },
  },
  news_post: {
    id: 'news_post', label: 'Post News', emoji: '📰', minutes: 25, moneyDelta: 0,
    needsDelta: { social: 10, dignity: 5 },
  },
};
