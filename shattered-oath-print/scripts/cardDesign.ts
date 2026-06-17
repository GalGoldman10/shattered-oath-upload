/**
 * Illustration Rare (IR) full-art layout — full-bleed scene art, minimal UI overlay.
 * Inspired by modern premium TCG full-art cards; original Shattered Oath identity.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { GameCard } from '../../shattered-oath/src/types/cards.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORTRAIT_DIR = path.join(__dirname, '..', 'assets', 'portraits');

export const W = 750;
export const H = 1050;
const B = 5;
const SILVER = '#C0C0C8';
const INK = '#141414';

export const CLASS = {
  vanguard: { label: 'Vanguard', bg: '#C86820', bgLight: '#F0A040', sigil: 'shield' },
  ravager: { label: 'Ravager', bg: '#D02838', bgLight: '#F05868', sigil: 'blade' },
  arcanist: { label: 'Arcanist', bg: '#2878D0', bgLight: '#58A8F0', sigil: 'star' },
  stalker: { label: 'Stalker', bg: '#289868', bgLight: '#58C898', sigil: 'dagger' },
  warden: { label: 'Warden', bg: '#98A830', bgLight: '#C8D860', sigil: 'sun' },
  occultist: { label: 'Occultist', bg: '#7830C0', bgLight: '#A868E8', sigil: 'moon' },
} as const;

const RARITY: Record<string, { label: string; star: string }> = {
  common: { label: 'Common', star: '●' },
  uncommon: { label: 'Uncommon', star: '◆' },
  rare: { label: 'Rare', star: '★' },
  legendary: { label: 'Legendary', star: '★★' },
};

const portraitCache = new Map<string, string>();

function loadPortrait(keys: string[]): string | null {
  for (const key of keys) {
    if (portraitCache.has(key)) return portraitCache.get(key)!;
    const file = path.join(PORTRAIT_DIR, `portrait-${key}.png`);
    if (!fs.existsSync(file)) continue;
    const uri = `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`;
    portraitCache.set(key, uri);
    return uri;
  }
  return null;
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrap(text: string, max: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    if ((line + w).length > max) {
      if (line) lines.push(line.trim());
      line = w + ' ';
    } else line += w + ' ';
  }
  if (line.trim()) lines.push(line.trim());
  return lines.slice(0, 3);
}

export function sigil(type: string, cx: number, cy: number, s: number, color: string): string {
  switch (type) {
    case 'shield':
      return `<path d="M${cx},${cy - s} L${cx + s * 0.78},${cy - s * 0.42} L${cx + s * 0.78},${cy + s * 0.28} Q${cx},${cy + s * 0.98} ${cx - s * 0.78},${cy + s * 0.28} L${cx - s * 0.78},${cy - s * 0.42} Z" fill="${color}"/>`;
    case 'blade':
      return `<g fill="${color}"><polygon points="${cx},${cy - s} ${cx + s * 0.14},${cy + s * 0.14} ${cx},${cy + s * 0.04} ${cx - s * 0.14},${cy + s * 0.14}"/><rect x="${cx - s * 0.11}" y="${cy + s * 0.04}" width="${s * 0.22}" height="${s * 0.58}" rx="2"/></g>`;
    case 'star':
      return `<polygon points="${cx},${cy - s} ${cx + s * 0.24},${cy - s * 0.26} ${cx + s},${cy - s * 0.26} ${cx + s * 0.32},${cy + s * 0.08} ${cx + s * 0.58},${cy + s} ${cx},${cy + s * 0.38} ${cx - s * 0.58},${cy + s} ${cx - s * 0.32},${cy + s * 0.08} ${cx - s},${cy - s * 0.26} ${cx - s * 0.24},${cy - s * 0.26}" fill="${color}"/>`;
    case 'dagger':
      return `<g fill="${color}"><polygon points="${cx},${cy - s} ${cx + s * 0.13},${cy + s * 0.1} ${cx},${cy - s * 0.02} ${cx - s * 0.13},${cy + s * 0.1}"/><rect x="${cx - s * 0.09}" y="${cy + s * 0.08}" width="${s * 0.18}" height="${s * 0.52}" rx="1"/></g>`;
    case 'sun':
      return `<g fill="${color}"><circle cx="${cx}" cy="${cy}" r="${s * 0.3}"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => { const r = a * Math.PI / 180; return `<rect x="${cx + Math.cos(r) * s * 0.44 - 3}" y="${cy + Math.sin(r) * s * 0.44 - 3}" width="6" height="6" transform="rotate(${a} ${cx + Math.cos(r) * s * 0.44} ${cy + Math.sin(r) * s * 0.44})"/>`; }).join('')}</g>`;
    case 'moon':
      return `<path d="M${cx + s * 0.26},${cy - s * 0.76} A${s * 0.76},${s * 0.76} 0 1 0 ${cx + s * 0.26},${cy + s * 0.76} A${s * 0.51},${s * 0.51} 0 1 1 ${cx + s * 0.26},${cy - s * 0.76}" fill="${color}"/>`;
    default:
      return `<circle cx="${cx}" cy="${cy}" r="${s * 0.46}" fill="${color}"/>`;
  }
}

function sharedDefs(id: string): string {
  return `
    <defs>
      <filter id="${id}glow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color="#FFFFFF" flood-opacity="0.95"/>
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.45"/>
      </filter>
      <linearGradient id="${id}holo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#88CCFF" stop-opacity="0"/>
        <stop offset="40%" stop-color="#AADDFF" stop-opacity="0.08"/>
        <stop offset="60%" stop-color="#FFAAEE" stop-opacity="0.07"/>
        <stop offset="100%" stop-color="#FFFFAA" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="${id}face"><rect x="${B}" y="${B}" width="${W - B * 2}" height="${H - B * 2}" rx="10"/></clipPath>
    </defs>`;
}

function irFrame(uri: string | null, id: string, fallback: string): string {
  const iw = W - B * 2;
  const ih = H - B * 2;
  const art = uri
    ? `<image href="${uri}" x="${B - 25}" y="${B - 20}" width="${iw + 50}" height="${ih + 40}" preserveAspectRatio="xMidYMid slice"/>`
    : `<rect x="${B}" y="${B}" width="${iw}" height="${ih}" fill="${fallback}"/>`;
  return `
    ${sharedDefs(id)}
    <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="${SILVER}"/>
    <g clip-path="url(#${id}face)">
      ${art}
    </g>`;
}

/** IR-style text: white halo stroke + dark fill — readable on art without panels. */
function irText(
  x: number, y: number, text: string, size: number,
  opts: { anchor?: string; weight?: string; font?: string; italic?: boolean; id?: string; light?: boolean } = {},
): string {
  const fill = opts.light ? '#FFFFFF' : INK;
  const stroke = opts.light ? INK : '#FFFFFF';
  const sw = opts.light ? 2.5 : 3.5;
  const anchor = opts.anchor ? ` text-anchor="${opts.anchor}"` : '';
  const font = opts.font ?? 'Arial, Helvetica, sans-serif';
  const style = opts.italic ? ' font-style="italic"' : '';
  const filter = opts.id ? ` filter="url(#${opts.id}glow)"` : '';
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="${font}" font-size="${size}" font-weight="${opts.weight ?? 'bold'}"${style}${anchor} stroke="${stroke}" stroke-width="${sw}" paint-order="stroke fill"${filter}>${esc(text)}</text>`;
}

function irTextBlock(x: number, y: number, lines: string[], size: number, lh: number, id: string): string {
  return lines.map((l, i) => irText(x, y + i * lh, l, size, { weight: '500', id })).join('');
}

function stagePill(x: number, y: number, text: string, id: string): string {
  const w = Math.max(72, text.length * 9 + 24);
  return `
    <rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="#A8A8B0" fill-opacity="0.88" stroke="${INK}" stroke-width="1.5" stroke-opacity="0.35"/>
    ${irText(x + w / 2, y + 18, text, 13, { anchor: 'middle', weight: 'bold', italic: true, id })}`;
}

function pillWidth(text: string): number {
  return Math.max(72, text.length * 9 + 24);
}

function cardName(x: number, y: number, name: string, id: string): string {
  const size = name.length > 18 ? 30 : 34;
  return irText(x, y, name, size, { weight: '900', font: 'Arial Black, Arial, sans-serif', id });
}

function hpBlock(id: string, hp: number, typeColor: string, sigilType: string): string {
  return `
    <g transform="translate(${W - B - 24}, ${B + 38})">
      ${irText(-90, 0, 'HP', 16, { id })}
      ${irText(-50, 2, String(hp), 32, { weight: '900', font: 'Arial Black, Arial, sans-serif', id })}
      <circle cx="0" cy="-4" r="22" fill="${typeColor}" stroke="${INK}" stroke-width="2"/>
      ${sigil(sigilType, 0, -4, 14, '#FFFFFF')}
    </g>`;
}

function costOrbs(x: number, y: number, cost: number, color: string, id: string): string {
  if (cost <= 0) return irText(x, y + 5, '—', 14, { id, weight: 'bold' });
  let s = '';
  for (let i = 0; i < Math.min(cost, 3); i++) {
    s += `<circle cx="${x + i * 34}" cy="${y}" r="15" fill="${color}" stroke="${INK}" stroke-width="2"/>`;
  }
  if (cost > 3) s += irText(x + 102, y + 5, `×${cost}`, 16, { weight: '900', font: 'Arial Black, sans-serif', id });
  return s;
}

function moveRow(id: string, y: number, cost: number, costColor: string, title: string, rightVal: string | null, body: string): string {
  const lines = wrap(body, 44);
  return `
    ${costOrbs(B + 28, y, cost, costColor, id)}
    ${irText(200, y + 6, title, 23, { weight: '900', font: 'Arial Black, Arial, sans-serif', id })}
    ${rightVal ? irText(W - B - 32, y + 6, rightVal, 26, { anchor: 'end', weight: '900', font: 'Arial Black, sans-serif', id }) : ''}
    ${irTextBlock(200, y + 34, lines, 17, 21, id)}`;
}

function statFooter(id: string, y: number, cols: { label: string; value: string }[]): string {
  const slot = (W - B * 2) / cols.length;
  return `
    <line x1="${B + 16}" y1="${y}" x2="${W - B - 16}" y2="${y}" stroke="${INK}" stroke-width="1.5" opacity="0.35"/>
    ${cols.map((c, i) => {
      const cx = B + 16 + slot * i + slot / 2;
      return `
        ${irText(cx, y + 20, c.label, 11, { anchor: 'middle', weight: 'bold', id })}
        ${irText(cx, y + 38, c.value, 15, { anchor: 'middle', weight: '900', font: 'Arial Black, sans-serif', id })}`;
    }).join('')}`;
}

function metaFooter(id: string, cardId: string, flavor: string, rarity: string): string {
  const r = RARITY[rarity];
  const flavorLines = wrap(flavor, 40);
  return `
    ${irText(B + 20, H - B - 10, 'Illus. Shattered Oath', 11, { id, weight: 'normal' })}
    ${irText(W / 2, H - B - 10, `SO ${cardId.toUpperCase()} ${r.star}`, 11, { anchor: 'middle', id })}
    ${flavorLines.map((l, i) =>
      irText(W - B - 20, H - B - 26 - (flavorLines.length - 1 - i) * 15, l, 12, { anchor: 'end', italic: true, font: 'Georgia, serif', id })
    ).join('')}`;
}

function holo(id: string, rarity: string): string {
  if (rarity !== 'rare' && rarity !== 'legendary') return '';
  return `<rect x="${B}" y="${B}" width="${W - B * 2}" height="${H - B * 2}" rx="10" fill="url(#${id}holo)" pointer-events="none"/>`;
}

function splitAbility(text: string): { title: string; body: string } {
  const colon = text.indexOf(':');
  if (colon > 0 && colon < 30) return { title: text.slice(0, colon), body: text.slice(colon + 1).trim() };
  return { title: 'Effect', body: text };
}

function renderChampion(card: Extract<GameCard, { type: 'champion' }>, id: string): string {
  const c = CLASS[card.class];
  const uri = loadPortrait([card.id, card.class]);
  const ab = splitAbility(card.ability);

  return `
    ${irFrame(uri, id, c.bg)}
    ${stagePill(B + 18, B + 18, c.label.toUpperCase(), id)}
    ${cardName(B + 18 + pillWidth(c.label.toUpperCase()) + 12, B + 42, card.name, id)}
    ${hpBlock(id, card.health, c.bg, c.sigil)}
    ${moveRow(id, H - 268, card.abilityCost, c.bg, ab.title, String(card.attack), ab.body)}
    ${moveRow(id, H - 178, 0, '#888888', 'Passive', String(card.guard), card.passive)}
    ${statFooter(id, H - 108, [
      { label: 'attack', value: String(card.attack) },
      { label: 'guard', value: String(card.guard) },
      { label: 'ability', value: `${card.abilityCost} AP` },
    ])}
    ${metaFooter(id, card.id, card.flavorText, card.rarity)}
    ${holo(id, card.rarity)}`;
}

function renderMonster(card: Extract<GameCard, { type: 'monster' }>, id: string): string {
  const uri = loadPortrait([card.id, 'monster', card.difficulty]);
  const ab = splitAbility(card.specialAbility);
  const stage = card.difficulty === 'major' ? 'MAJOR' : 'MINOR';

  return `
    ${irFrame(uri, id, '#881828')}
    ${stagePill(B + 18, B + 18, stage, id)}
    ${cardName(B + 18 + pillWidth(stage) + 12, B + 42, card.name, id)}
    ${hpBlock(id, card.health, '#881828', 'blade')}
    ${moveRow(id, H - 268, 0, '#881828', ab.title, String(card.attack), ab.body)}
    ${moveRow(id, H - 178, 0, '#886018', 'Reward', null, card.reward)}
    ${statFooter(id, H - 108, [
      { label: 'attack', value: String(card.attack) },
      { label: 'renown', value: String(card.renownValue) },
      { label: 'tier', value: stage },
    ])}
    ${metaFooter(id, card.id, card.flavorText, card.rarity)}
    ${holo(id, card.rarity)}`;
}

function renderEquipment(card: Extract<GameCard, { type: 'equipment' }>, id: string): string {
  const uri = loadPortrait([card.id, card.equipmentType, 'equipment']);
  const stats: string[] = [];
  if (card.attackBonus) stats.push(`${card.attackBonus >= 0 ? '+' : ''}${card.attackBonus} ATK`);
  if (card.guardBonus) stats.push(`${card.guardBonus >= 0 ? '+' : ''}${card.guardBonus} GRD`);
  if (card.healthBonus) stats.push(`${card.healthBonus >= 0 ? '+' : ''}${card.healthBonus} HP`);
  const compat = card.compatibleClasses === 'all' ? 'All' : card.compatibleClasses.map(c => CLASS[c].label.slice(0, 3)).join(' ');

  return `
    ${irFrame(uri, id, '#585868')}
    ${stagePill(B + 18, B + 18, `ITEM · ${card.equipmentType.toUpperCase()}`, id)}
    ${cardName(B + 18 + pillWidth(`ITEM · ${card.equipmentType.toUpperCase()}`) + 12, B + 42, card.name, id)}
    <g transform="translate(${W - B - 24}, ${B + 38})">
      ${irText(-80, 0, 'Equip', 14, { anchor: 'end', id, weight: 'bold' })}
      ${irText(-28, 2, String(card.equipCost), 28, { weight: '900', font: 'Arial Black, sans-serif', id })}
      <circle cx="0" cy="-4" r="22" fill="#585868" stroke="${INK}" stroke-width="2"/>
      ${sigil(card.equipmentType === 'weapon' ? 'blade' : card.equipmentType === 'armor' ? 'shield' : card.equipmentType === 'relic' ? 'star' : 'moon', 0, -4, 14, '#FFF')}
    </g>
    ${moveRow(id, H - 248, 0, '#585868', 'Effect', stats.join(' ') || null, card.specialEffect)}
    ${statFooter(id, H - 108, [
      { label: 'bonus', value: stats.join(' · ') || '—' },
      { label: 'classes', value: compat },
      { label: 'equip', value: `${card.equipCost} AP` },
    ])}
    ${metaFooter(id, card.id, card.flavorText, card.rarity)}
    ${holo(id, card.rarity)}`;
}

function renderTactic(card: Extract<GameCard, { type: 'tactic' }>, id: string): string {
  const uri = loadPortrait([card.id, card.effectType, 'tactic']);

  return `
    ${irFrame(uri, id, '#2858A0')}
    ${stagePill(B + 18, B + 18, 'TACTIC', id)}
    ${cardName(B + 18 + pillWidth('TACTIC') + 12, B + 42, card.name, id)}
    <g transform="translate(${W - B - 24}, ${B + 38})">
      <circle cx="0" cy="-4" r="22" fill="#2858A0" stroke="${INK}" stroke-width="2"/>
      ${sigil('star', 0, -4, 14, '#FFF')}
    </g>
    ${moveRow(id, H - 228, 1, '#2858A0', 'Effect', null, card.effectText)}
    ${statFooter(id, H - 108, [
      { label: 'target', value: card.targetRequired ? 'Yes' : 'No' },
      { label: 'type', value: card.effectType.replace(/_/g, ' ') },
      { label: 'play', value: 'Your turn' },
    ])}
    ${metaFooter(id, card.id, card.flavorText, card.rarity)}
    ${holo(id, card.rarity)}`;
}

function renderReaction(card: Extract<GameCard, { type: 'reaction' }>, id: string): string {
  const uri = loadPortrait([card.id, card.trigger, 'reaction']);
  const triggers: Record<string, string> = {
    on_attack: 'When attacked',
    on_ability: 'When ability used',
    on_tactic: 'When tactic played',
    on_damage: 'When taking damage',
  };

  return `
    ${irFrame(uri, id, '#502888')}
    ${stagePill(B + 18, B + 18, 'REACTION', id)}
    ${cardName(B + 18 + pillWidth('REACTION') + 12, B + 42, card.name, id)}
    <g transform="translate(${W - B - 24}, ${B + 38})">
      <circle cx="0" cy="-4" r="22" fill="#502888" stroke="${INK}" stroke-width="2"/>
      ${sigil('moon', 0, -4, 14, '#FFF')}
    </g>
    ${moveRow(id, H - 268, 0, '#502888', 'Trigger', null, triggers[card.trigger] ?? card.trigger)}
    ${moveRow(id, H - 188, 0, '#502888', 'Effect', null, card.effectText)}
    ${statFooter(id, H - 108, [
      { label: 'timing', value: 'Any time' },
      { label: 'then', value: 'Discard' },
      { label: 'type', value: card.effectType.replace(/_/g, ' ') },
    ])}
    ${metaFooter(id, card.id, card.flavorText, card.rarity)}
    ${holo(id, card.rarity)}`;
}

function renderObjective(card: Extract<GameCard, { type: 'objective' }>, id: string): string {
  const uri = loadPortrait([card.id, card.requirement, 'objective']);
  const reqs: Record<string, string> = {
    classes_3: `Control ${card.requirementValue} classes`,
    monster_no_damage: 'Defeat monster unhurt',
    equipment_3_types: `${card.requirementValue} equipment types`,
    abilities_3_turn: `${card.requirementValue} abilities / turn`,
    defeat_major: 'Defeat major monster',
    control_class: card.requirementClass ? `Control ${CLASS[card.requirementClass].label}` : 'Control class',
    renown_threshold: `Reach ${card.requirementValue} Renown`,
    final_oath: `${card.requirementValue} unique classes`,
  };

  return `
    ${irFrame(uri, id, '#886018')}
    ${stagePill(B + 18, B + 18, card.isFinal ? 'FINAL QUEST' : 'QUEST', id)}
    ${cardName(B + 18 + pillWidth(card.isFinal ? 'FINAL QUEST' : 'QUEST') + 12, B + 42, card.name, id)}
    <g transform="translate(${W - B - 24}, ${B + 38})">
      ${irText(-90, -2, 'AP', 13, { anchor: 'end', id, weight: 'bold' })}
      ${irText(-48, 2, String(card.completeCost), 26, { weight: '900', font: 'Arial Black, sans-serif', id })}
      <circle cx="0" cy="-4" r="22" fill="#886018" stroke="${INK}" stroke-width="2"/>
      ${sigil('star', 0, -4, 14, '#FFF')}
    </g>
    ${moveRow(id, H - 268, 0, '#886018', 'Requirement', null, reqs[card.requirement] ?? card.requirement)}
    ${moveRow(id, H - 188, 0, '#886018', 'Reward', `+${card.rewardRenown}`, card.rewardText)}
    ${statFooter(id, H - 108, [
      { label: 'cost', value: `${card.completeCost} AP` },
      { label: 'renown', value: `+${card.rewardRenown}` },
      { label: 'rarity', value: RARITY[card.rarity].label },
    ])}
    ${metaFooter(id, card.id, card.flavorText, card.rarity)}
    ${holo(id, card.rarity)}`;
}

export function renderCard(card: GameCard, idSuffix = ''): string {
  const id = `k${idSuffix.replace(/[^a-z0-9]/gi, '')}`;
  let body = '';
  switch (card.type) {
    case 'champion': body = renderChampion(card, id); break;
    case 'monster': body = renderMonster(card, id); break;
    case 'equipment': body = renderEquipment(card, id); break;
    case 'tactic': body = renderTactic(card, id); break;
    case 'reaction': body = renderReaction(card, id); break;
    case 'objective': body = renderObjective(card, id); break;
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  ${body}
</svg>`;
}

export function renderCardBack(): string {
  const id = 'back';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  ${sharedDefs(id)}
  <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="${SILVER}"/>
  <rect x="${B}" y="${B}" width="${W - B * 2}" height="${H - B * 2}" rx="10" fill="#1A1028"/>
  <rect x="${B}" y="${B}" width="${W - B * 2}" height="${H - B * 2}" rx="10" fill="url(#${id}holo)" opacity="0.35"/>
  <circle cx="375" cy="440" r="110" fill="none" stroke="${SILVER}" stroke-width="4" opacity="0.6"/>
  ${sigil('shield', 375, 440, 56, SILVER)}
  <text x="375" y="620" text-anchor="middle" fill="${SILVER}" font-family="Arial Black, sans-serif" font-size="38" font-weight="900" letter-spacing="12">SHATTERED</text>
  <text x="375" y="668" text-anchor="middle" fill="#9898A8" font-family="Arial Black, sans-serif" font-size="38" font-weight="900" letter-spacing="16">OATH</text>
  <text x="375" y="740" text-anchor="middle" fill="#686878" font-family="Arial, sans-serif" font-size="13" letter-spacing="4">DARK FANTASY CARD GAME</text>
</svg>`;
}

export function getClassDesc(key: string): string {
  const d: Record<string, string> = {
    vanguard: 'Heavy frontline fighters. High Guard, protection, taunting, counterattacks.',
    ravager: 'Aggressive damage dealers. Sacrifice health, chain attacks, execute weakened targets.',
    arcanist: 'Spell and card-control. Draw, manipulate deck, multi-target damage, cancel effects.',
    stalker: 'Precision sabotage. Poison, traps, ignore Guard, target weak enemies.',
    warden: 'Support and recovery. Healing, shields, remove debuffs, revive Champions.',
    occultist: 'Forbidden risk-reward. Curses, sacrifice, discard pile, powerful negative tradeoffs.',
  };
  return d[key] ?? '';
}
