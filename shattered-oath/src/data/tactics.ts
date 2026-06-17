import type { TacticCard } from '../types/cards';

export const TACTICS: TacticCard[] = [
  {
    id: 'tc-01', type: 'tactic', name: 'Ruin Strike', rarity: 'common',
    effectType: 'damage', effectValue: 2, effectText: 'Deal 2 damage to a Monster or enemy Champion.',
    targetRequired: true, flavorText: 'Stone crumbles; flesh follows.',
  },
  {
    id: 'tc-02', type: 'tactic', name: 'Scout the Depths', rarity: 'common',
    effectType: 'draw', effectValue: 2, effectText: 'Draw 2 cards.',
    targetRequired: false, flavorText: 'Knowledge is the first weapon.',
  },
  {
    id: 'tc-03', type: 'tactic', name: 'Sanctified Mending', rarity: 'common',
    effectType: 'heal', effectValue: 3, effectText: 'Heal a Champion for 3 Health.',
    targetRequired: true, flavorText: 'Light seeps through cracked armor.',
  },
  {
    id: 'tc-04', type: 'tactic', name: 'Iron Resolve', rarity: 'uncommon',
    effectType: 'protect', effectValue: 0, effectText: 'Grant a Champion Protection until end of turn.',
    targetRequired: true, flavorText: 'Will outlast steel.',
  },
  {
    id: 'tc-05', type: 'tactic', name: 'Sabotage', rarity: 'uncommon',
    effectType: 'discard', effectValue: 1, effectText: 'Opponent discards 1 random card.',
    targetRequired: false, flavorText: 'Trust is the first casualty.',
  },
  {
    id: 'tc-06', type: 'tactic', name: 'War Cry', rarity: 'common',
    effectType: 'buff_attack', effectValue: 2, effectText: 'A Champion gains +2 Attack this turn.',
    targetRequired: true, flavorText: 'Echoes rally the broken.',
  },
  {
    id: 'tc-07', type: 'tactic', name: 'Relic Shift', rarity: 'uncommon',
    effectType: 'move_equipment', effectValue: 0, effectText: 'Move one Equipment to another compatible Champion.',
    targetRequired: true, flavorText: 'Tools find new hands in chaos.',
  },
  {
    id: 'tc-08', type: 'tactic', name: 'Blood Tithe', rarity: 'rare',
    effectType: 'damage', effectValue: 4, effectText: 'Deal 4 damage; lose 1 Renown.',
    targetRequired: true, flavorText: 'Power demands payment.',
  },
  {
    id: 'tc-09', type: 'tactic', name: 'Royal Decree', rarity: 'rare',
    effectType: 'gain_renown', effectValue: 2, effectText: 'Gain 2 Renown.',
    targetRequired: false, flavorText: 'Authority persists beyond thrones.',
  },
  {
    id: 'tc-10', type: 'tactic', name: 'Rally the Line', rarity: 'common',
    effectType: 'refresh_champion', effectValue: 1, effectText: 'Refresh one used Champion.',
    targetRequired: true, flavorText: 'The line holds one breath longer.',
  },
  {
    id: 'tc-11', type: 'tactic', name: 'Void Lash', rarity: 'uncommon',
    effectType: 'damage', effectValue: 1, effectText: 'Deal 1 damage to up to 3 targets.',
    targetRequired: true, flavorText: 'Darkness strikes in threads.',
  },
  {
    id: 'tc-12', type: 'tactic', name: 'Fortify', rarity: 'common',
    effectType: 'buff_attack', effectValue: 0, effectText: 'A Champion gains +3 Guard this turn.',
    targetRequired: true, flavorText: 'Walls rise from desperation.',
  },
  {
    id: 'tc-13', type: 'tactic', name: 'Grave Robbing', rarity: 'uncommon',
    effectType: 'draw', effectValue: 1, effectText: 'Draw 1 card from discard into hand.',
    targetRequired: false, flavorText: 'The dead keep no secrets.',
  },
  {
    id: 'tc-14', type: 'tactic', name: 'Assassin\'s Mark', rarity: 'rare',
    effectType: 'damage', effectValue: 3, effectText: 'Deal 3 damage ignoring Guard.',
    targetRequired: true, flavorText: 'Marked for the abyss.',
  },
  {
    id: 'tc-15', type: 'tactic', name: 'Emergency Rations', rarity: 'common',
    effectType: 'heal', effectValue: 2, effectText: 'Heal all your Champions for 1.',
    targetRequired: false, flavorText: 'Survival is its own sacrament.',
  },
  {
    id: 'tc-16', type: 'tactic', name: 'Dark Bargain', rarity: 'rare',
    effectType: 'draw', effectValue: 3, effectText: 'Draw 3 cards; discard 2.',
    targetRequired: false, flavorText: 'Every gift bears hidden teeth.',
  },
  {
    id: 'tc-17', type: 'tactic', name: 'Shatter Weapon', rarity: 'uncommon',
    effectType: 'discard', effectValue: 0, effectText: 'Destroy an enemy Weapon Equipment.',
    targetRequired: true, flavorText: 'Steel breaks; hope with it.',
  },
  {
    id: 'tc-18', type: 'tactic', name: 'Banner of Conquest', rarity: 'legendary',
    effectType: 'gain_renown', effectValue: 3, effectText: 'Gain 3 Renown and +1 Attack to all Champions this turn.',
    targetRequired: false, flavorText: 'Victory flies over corpse-fields.',
  },
  {
    id: 'tc-19', type: 'tactic', name: 'Smoke Veil', rarity: 'common',
    effectType: 'protect', effectValue: 0, effectText: 'Prevent the next 2 damage to a Champion.',
    targetRequired: true, flavorText: 'Visibility is a liability.',
  },
  {
    id: 'tc-20', type: 'tactic', name: 'Chain Lightning', rarity: 'rare',
    effectType: 'damage', effectValue: 2, effectText: 'Deal 2 damage to a Monster, then 1 to another.',
    targetRequired: true, flavorText: 'The sky remembers war.',
  },
  {
    id: 'tc-21', type: 'tactic', name: 'Forced March', rarity: 'common',
    effectType: 'draw', effectValue: 1, effectText: 'Draw 1 card and gain 1 Action Point.',
    targetRequired: false, flavorText: 'Rest is for the buried.',
  },
  {
    id: 'tc-22', type: 'tactic', name: 'Cursed Ground', rarity: 'uncommon',
    effectType: 'damage', effectValue: 1, effectText: 'All enemy Champions take 1 damage.',
    targetRequired: false, flavorText: 'Soil drinks deep tonight.',
  },
  {
    id: 'tc-23', type: 'tactic', name: 'Last Rites', rarity: 'uncommon',
    effectType: 'heal', effectValue: 4, effectText: 'Fully heal a Champion below half Health.',
    targetRequired: true, flavorText: 'Death waits, impatient.',
  },
  {
    id: 'tc-24', type: 'tactic', name: 'Oath of Vengeance', rarity: 'legendary',
    effectType: 'buff_attack', effectValue: 4, effectText: 'Your Champions gain +2 Attack; enemies -1 Guard this turn.',
    targetRequired: false, flavorText: 'Broken vows fuel the blade.',
  },
];
