import type { ObjectiveCard } from '../types/cards';

export const OBJECTIVES: ObjectiveCard[] = [
  {
    id: 'ob-01', type: 'objective', name: 'United Front', rarity: 'common',
    requirement: 'classes_3', requirementValue: 3, rewardRenown: 2,
    rewardText: 'Gain 2 Renown.', completeCost: 1, isFinal: false,
    flavorText: 'Diverse blades cleave a single path.',
  },
  {
    id: 'ob-02', type: 'objective', name: 'Flawless Hunt', rarity: 'uncommon',
    requirement: 'monster_no_damage', requirementValue: 1, rewardRenown: 3,
    rewardText: 'Gain 3 Renown.', completeCost: 2, isFinal: false,
    flavorText: 'Strike without being struck.',
  },
  {
    id: 'ob-03', type: 'objective', name: 'Arsenal of War', rarity: 'common',
    requirement: 'equipment_3_types', requirementValue: 3, rewardRenown: 2,
    rewardText: 'Draw 2 cards.', completeCost: 1, isFinal: false,
    flavorText: 'A warrior is only as deep as their kit.',
  },
  {
    id: 'ob-04', type: 'objective', name: 'Master Tactician', rarity: 'rare',
    requirement: 'abilities_3_turn', requirementValue: 3, rewardRenown: 3,
    rewardText: 'Gain 3 Renown.', completeCost: 2, isFinal: false,
    flavorText: 'Three gambits in a single breath.',
  },
  {
    id: 'ob-05', type: 'objective', name: 'Slayer\'s Mark', rarity: 'uncommon',
    requirement: 'defeat_major', requirementValue: 1, rewardRenown: 2,
    rewardText: 'Gain 2 Renown.', completeCost: 1, isFinal: false,
    flavorText: 'Only titans need apply.',
  },
  {
    id: 'ob-06', type: 'objective', name: 'Vanguard\'s Oath', rarity: 'common',
    requirement: 'control_class', requirementValue: 1, requirementClass: 'vanguard',
    rewardRenown: 1, rewardText: 'Gain 1 Renown.', completeCost: 1, isFinal: false,
    flavorText: 'Hold the line until dawn.',
  },
  {
    id: 'ob-07', type: 'objective', name: 'Whispers of Renown', rarity: 'common',
    requirement: 'renown_threshold', requirementValue: 6, rewardRenown: 2,
    rewardText: 'Gain 2 Renown.', completeCost: 1, isFinal: false,
    flavorText: 'Glory spreads through the ruins.',
  },
  {
    id: 'ob-08', type: 'objective', name: 'Arcanist\'s Thesis', rarity: 'uncommon',
    requirement: 'control_class', requirementValue: 1, requirementClass: 'arcanist',
    rewardRenown: 2, rewardText: 'Draw 2 cards.', completeCost: 1, isFinal: false,
    flavorText: 'Theory proven in blood and ink.',
  },
  {
    id: 'ob-09', type: 'objective', name: 'Stalker\'s Contract', rarity: 'uncommon',
    requirement: 'control_class', requirementValue: 1, requirementClass: 'stalker',
    rewardRenown: 2, rewardText: 'Gain 2 Renown.', completeCost: 1, isFinal: false,
    flavorText: 'Targets eliminated. Payment due.',
  },
  {
    id: 'ob-10', type: 'objective', name: 'Occult Bargain', rarity: 'rare',
    requirement: 'control_class', requirementValue: 1, requirementClass: 'occultist',
    rewardRenown: 3, rewardText: 'Gain 3 Renown.', completeCost: 2, isFinal: false,
    flavorText: 'Power exchanged for secrets.',
  },
  {
    id: 'ob-11', type: 'objective', name: 'Warden\'s Vigil', rarity: 'common',
    requirement: 'control_class', requirementValue: 1, requirementClass: 'warden',
    rewardRenown: 1, rewardText: 'Heal all Champions for 2.', completeCost: 1, isFinal: false,
    flavorText: 'Guardians never sleep.',
  },
  {
    id: 'ob-12', type: 'objective', name: 'The Shattered Oath', rarity: 'legendary',
    requirement: 'final_oath', requirementValue: 5, rewardRenown: 5,
    rewardText: 'Claim victory through the Oath path.', completeCost: 3, isFinal: true,
    flavorText: 'Five paths converge. One promise remains.',
  },
];
