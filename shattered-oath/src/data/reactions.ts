import type { ReactionCard } from '../types/cards';

export const REACTIONS: ReactionCard[] = [
  {
    id: 'rx-01', type: 'reaction', name: 'Parrying Stance', rarity: 'common',
    trigger: 'on_attack', effectType: 'reduce_damage', effectValue: 2,
    effectText: 'Reduce incoming attack damage by 2.', flavorText: 'Steel meets steel.',
  },
  {
    id: 'rx-02', type: 'reaction', name: 'Counterspell', rarity: 'uncommon',
    trigger: 'on_tactic', effectType: 'cancel', effectValue: 0,
    effectText: 'Cancel an enemy Tactic card.', flavorText: 'Words die unspoken.',
  },
  {
    id: 'rx-03', type: 'reaction', name: 'Bodyguard', rarity: 'common',
    trigger: 'on_attack', effectType: 'redirect', effectValue: 0,
    effectText: 'Redirect an attack to a different Champion.', flavorText: 'Step between blade and liege.',
  },
  {
    id: 'rx-04', type: 'reaction', name: 'Aegis Flash', rarity: 'uncommon',
    trigger: 'on_damage', effectType: 'protect', effectValue: 0,
    effectText: 'Prevent all damage from one source.', flavorText: 'Light flares, then fades.',
  },
  {
    id: 'rx-05', type: 'reaction', name: 'Disrupt Ritual', rarity: 'rare',
    trigger: 'on_ability', effectType: 'cancel', effectValue: 0,
    effectText: 'Cancel an enemy Champion ability.', flavorText: 'Power unravels mid-incantation.',
  },
  {
    id: 'rx-06', type: 'reaction', name: 'Retaliation', rarity: 'common',
    trigger: 'on_attack', effectType: 'reduce_damage', effectValue: 1,
    effectText: 'Reduce damage by 1; attacker takes 1 damage.', flavorText: 'Pain returned in kind.',
  },
  {
    id: 'rx-07', type: 'reaction', name: 'Mirror Trap', rarity: 'rare',
    trigger: 'on_tactic', effectType: 'counter', effectValue: 0,
    effectText: 'Copy an enemy Tactic targeting you; redirect it.', flavorText: 'Their weapon becomes yours.',
  },
  {
    id: 'rx-08', type: 'reaction', name: 'Sanctuary Ward', rarity: 'uncommon',
    trigger: 'on_attack', effectType: 'protect', effectValue: 0,
    effectText: 'Target Champion cannot be attacked this turn.', flavorText: 'Holy ground, briefly.',
  },
  {
    id: 'rx-09', type: 'reaction', name: 'Desperate Block', rarity: 'common',
    trigger: 'on_damage', effectType: 'reduce_damage', effectValue: 3,
    effectText: 'Reduce damage by 3; discard 1 card.', flavorText: 'Anything to survive.',
  },
  {
    id: 'rx-10', type: 'reaction', name: 'Null Sigil', rarity: 'legendary',
    trigger: 'on_ability', effectType: 'cancel', effectValue: 0,
    effectText: 'Cancel any enemy action; draw 1 card.', flavorText: 'Silence absolute.',
  },
  {
    id: 'rx-11', type: 'reaction', name: 'Shadow Step', rarity: 'uncommon',
    trigger: 'on_attack', effectType: 'redirect', effectValue: 0,
    effectText: 'Avoid attack entirely; swap with another Champion.', flavorText: 'Gone before impact.',
  },
  {
    id: 'rx-12', type: 'reaction', name: 'Blood Shield', rarity: 'rare',
    trigger: 'on_damage', effectType: 'reduce_damage', effectValue: 99,
    effectText: 'Prevent damage; lose 2 Renown.', flavorText: 'Renown buys another breath.',
  },
];
