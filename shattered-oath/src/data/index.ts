import { CHAMPIONS } from './champions';
import { EQUIPMENT } from './equipment';
import { TACTICS } from './tactics';
import { REACTIONS } from './reactions';
import { MONSTERS } from './monsters';
import { OBJECTIVES } from './objectives';
import { COMMANDERS } from './commanders';
import type { GameCard, ChampionClass, CardType, Rarity } from '../types/cards';

const allCards: GameCard[] = [
  ...CHAMPIONS,
  ...EQUIPMENT,
  ...TACTICS,
  ...REACTIONS,
  ...MONSTERS,
  ...OBJECTIVES,
];

const cardMap = new Map<string, GameCard>(
  allCards.map((card) => [card.id, card]),
);

export function getCard(id: string): GameCard | undefined {
  return cardMap.get(id);
}

export function getAllCards(): GameCard[] {
  return [...allCards];
}

export function getCardsByType(type: CardType): GameCard[] {
  return allCards.filter((c) => c.type === type);
}

export function getChampionClass(cardId: string): ChampionClass | undefined {
  const card = cardMap.get(cardId);
  return card?.type === 'champion' ? card.class : undefined;
}

export function getCardsByClass(cls: ChampionClass): GameCard[] {
  return allCards.filter(
    (c) => c.type === 'champion' && c.class === cls,
  );
}

export function getCardsByRarity(rarity: Rarity): GameCard[] {
  return allCards.filter((c) => c.rarity === rarity);
}

export function buildMainDeck(): string[] {
  const deck: string[] = [];
  const addCopies = (ids: string[], copies: number) => {
    for (const id of ids) {
      for (let i = 0; i < copies; i++) deck.push(id);
    }
  };

  addCopies(CHAMPIONS.map((c) => c.id), 2);
  addCopies(EQUIPMENT.map((e) => e.id), 2);
  addCopies(TACTICS.map((t) => t.id), 2);
  addCopies(REACTIONS.map((r) => r.id), 1);

  return deck;
}

export function buildMonsterDeck(): string[] {
  return MONSTERS.flatMap((m) =>
    m.difficulty === 'major' ? [m.id, m.id] : [m.id, m.id, m.id],
  );
}

export function buildObjectiveDeck(): string[] {
  return OBJECTIVES.filter((o) => !o.isFinal).map((o) => o.id);
}

export { CHAMPIONS, EQUIPMENT, TACTICS, REACTIONS, MONSTERS, OBJECTIVES, COMMANDERS };
