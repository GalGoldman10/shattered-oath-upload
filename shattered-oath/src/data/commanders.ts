import type { CommanderDefinition } from '../types/cards';

export const COMMANDERS: CommanderDefinition[] = [
  {
    id: 'cmd-vanguard',
    name: 'Lord Cassian',
    title: 'Warden of the Broken Gate',
    class: 'vanguard',
    startingBonus: 'Start with 1 extra Vanguard Champion in hand.',
    passiveAbility: 'Your Vanguard Champions gain +1 Guard.',
  },
  {
    id: 'cmd-ravager',
    name: 'Vara the Red',
    title: 'Butcher of Thornvale',
    class: 'ravager',
    startingBonus: 'Start with +1 Renown.',
    passiveAbility: 'First attack each turn deals +1 damage.',
  },
  {
    id: 'cmd-arcanist',
    name: 'Magister Thorne',
    title: 'Keeper of Forbidden Tomes',
    class: 'arcanist',
    startingBonus: 'Draw 1 extra card on turn 1.',
    passiveAbility: 'Tactic cards cost 1 less AP once per turn.',
  },
  {
    id: 'cmd-stalker',
    name: 'Silas Grey',
    title: 'Shadow of the Crown',
    class: 'stalker',
    startingBonus: 'Start with 1 Stalker Reaction in hand.',
    passiveAbility: 'First attack each turn ignores Guard.',
  },
  {
    id: 'cmd-warden',
    name: 'Sister Elara',
    title: 'Light in the Ruins',
    class: 'warden',
    startingBonus: 'All Champions start with +1 Health when played.',
    passiveAbility: 'Heal 1 at the start of each turn.',
  },
  {
    id: 'cmd-occultist',
    name: 'Malachar Veil',
    title: 'Voice of the Hollow Court',
    class: 'occultist',
    startingBonus: 'Start with 1 Occultist Tactic in hand.',
    passiveAbility: 'Gain 1 Renown when you discard a card.',
  },
];
