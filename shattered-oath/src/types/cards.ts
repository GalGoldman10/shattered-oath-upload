export type ChampionClass =
  | 'vanguard'
  | 'ravager'
  | 'arcanist'
  | 'stalker'
  | 'warden'
  | 'occultist';

export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary';

export type EquipmentType = 'weapon' | 'armor' | 'relic' | 'charm';

export type CardType =
  | 'champion'
  | 'equipment'
  | 'tactic'
  | 'reaction'
  | 'monster'
  | 'objective';

export interface BaseCard {
  id: string;
  type: CardType;
  name: string;
  rarity: Rarity;
  flavorText: string;
}

export interface ChampionCard extends BaseCard {
  type: 'champion';
  class: ChampionClass;
  attack: number;
  guard: number;
  health: number;
  ability: string;
  abilityCost: number;
  passive: string;
}

export interface EquipmentCard extends BaseCard {
  type: 'equipment';
  equipmentType: EquipmentType;
  compatibleClasses: ChampionClass[] | 'all';
  attackBonus: number;
  guardBonus: number;
  healthBonus: number;
  specialEffect: string;
  equipCost: number;
}

export type TacticEffectType =
  | 'damage'
  | 'draw'
  | 'heal'
  | 'protect'
  | 'discard'
  | 'buff_attack'
  | 'move_equipment'
  | 'gain_renown'
  | 'refresh_champion';

export interface TacticCard extends BaseCard {
  type: 'tactic';
  effectType: TacticEffectType;
  effectValue: number;
  effectText: string;
  targetRequired: boolean;
}

export type ReactionTrigger =
  | 'on_attack'
  | 'on_ability'
  | 'on_tactic'
  | 'on_damage';

export interface ReactionCard extends BaseCard {
  type: 'reaction';
  trigger: ReactionTrigger;
  effectText: string;
  effectType: 'cancel' | 'reduce_damage' | 'redirect' | 'protect' | 'counter';
  effectValue: number;
}

export type MonsterDifficulty = 'minor' | 'major';

export interface MonsterCard extends BaseCard {
  type: 'monster';
  attack: number;
  health: number;
  maxHealth: number;
  specialAbility: string;
  reward: string;
  renownValue: number;
  difficulty: MonsterDifficulty;
}

export type ObjectiveRequirement =
  | 'classes_3'
  | 'monster_no_damage'
  | 'equipment_3_types'
  | 'abilities_3_turn'
  | 'defeat_major'
  | 'control_class'
  | 'renown_threshold'
  | 'final_oath';

export interface ObjectiveCard extends BaseCard {
  type: 'objective';
  requirement: ObjectiveRequirement;
  requirementValue: number;
  requirementClass?: ChampionClass;
  rewardRenown: number;
  rewardText: string;
  completeCost: number;
  isFinal: boolean;
}

export type GameCard =
  | ChampionCard
  | EquipmentCard
  | TacticCard
  | ReactionCard
  | MonsterCard
  | ObjectiveCard;

export interface CommanderDefinition {
  id: string;
  name: string;
  title: string;
  class: ChampionClass;
  startingBonus: string;
  passiveAbility: string;
}
