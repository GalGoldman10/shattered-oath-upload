import type { MonsterCard } from '../types/cards';

export const MONSTERS: MonsterCard[] = [
  {
    id: 'mn-01', type: 'monster', name: 'Ash Wraith', rarity: 'common',
    attack: 2, health: 4, maxHealth: 4,
    specialAbility: 'On defeat: all players discard 1 card.',
    reward: 'Draw 1 card.', renownValue: 1, difficulty: 'minor',
    flavorText: 'Remnants of burned villages wander still.',
  },
  {
    id: 'mn-02', type: 'monster', name: 'Ironfang Boar', rarity: 'common',
    attack: 3, health: 5, maxHealth: 5,
    specialAbility: 'High Guard: Treat Guard as 2 when attacked.',
    reward: 'Gain 1 Renown.', renownValue: 1, difficulty: 'minor',
    flavorText: 'Tusks like rusted pikes.',
  },
  {
    id: 'mn-03', type: 'monster', name: 'Crypt Stalker', rarity: 'uncommon',
    attack: 4, health: 4, maxHealth: 4,
    specialAbility: 'Ambush: First attacker takes 1 damage.',
    reward: 'Draw 2 cards.', renownValue: 2, difficulty: 'minor',
    flavorText: 'It hunts by the scent of living warmth.',
  },
  {
    id: 'mn-04', type: 'monster', name: 'Blight Hydra', rarity: 'rare',
    attack: 3, health: 8, maxHealth: 8,
    specialAbility: 'Regenerate: Heal 1 at start of each turn.',
    reward: 'Gain 2 Renown.', renownValue: 2, difficulty: 'minor',
    flavorText: 'Cut one head; poison spreads.',
  },
  {
    id: 'mn-05', type: 'monster', name: 'Obsidian Golem', rarity: 'uncommon',
    attack: 2, health: 7, maxHealth: 7,
    specialAbility: 'Stone Hide: Reduce all damage by 1.',
    reward: 'Equip any Equipment from discard.', renownValue: 2, difficulty: 'minor',
    flavorText: 'Animated by forgotten siege magic.',
  },
  {
    id: 'mn-06', type: 'monster', name: 'Dread Knight', rarity: 'rare',
    attack: 5, health: 6, maxHealth: 6,
    specialAbility: 'Terrify: Attackers lose 1 Attack.',
    reward: 'Gain 3 Renown.', renownValue: 3, difficulty: 'major',
    flavorText: 'A fallen commander serves no master.',
  },
  {
    id: 'mn-07', type: 'monster', name: 'Void Serpent', rarity: 'legendary',
    attack: 4, health: 9, maxHealth: 9,
    specialAbility: 'Coil: Must be attacked twice in one turn to take full damage.',
    reward: 'Draw 3 cards; gain 2 Renown.', renownValue: 3, difficulty: 'major',
    flavorText: 'It devours light along with prey.',
  },
  {
    id: 'mn-08', type: 'monster', name: 'Corrupted Archon', rarity: 'legendary',
    attack: 6, health: 8, maxHealth: 8,
    specialAbility: 'Curse Aura: All Champions lose 1 Guard while active.',
    reward: 'Gain 4 Renown.', renownValue: 4, difficulty: 'major',
    flavorText: 'Once a guardian of the realm.',
  },
  {
    id: 'mn-09', type: 'monster', name: 'Plague Swarm', rarity: 'common',
    attack: 2, health: 3, maxHealth: 3,
    specialAbility: 'Swarm: Defeating grants only half Renown (rounded up).',
    reward: 'All allies heal 1.', renownValue: 1, difficulty: 'minor',
    flavorText: 'A cloud of teeth and wings.',
  },
  {
    id: 'mn-10', type: 'monster', name: 'Throne Guardian', rarity: 'legendary',
    attack: 5, health: 10, maxHealth: 10,
    specialAbility: 'Royal Guard: Immune to first attack each round.',
    reward: 'Complete any Objective for free.', renownValue: 5, difficulty: 'major',
    flavorText: 'It waits where the crown once rested.',
  },
];
