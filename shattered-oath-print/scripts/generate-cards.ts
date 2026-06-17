/**
 * Generates printable SVG card files for the physical board game.
 * Run: npm run generate
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllCards } from '../../shattered-oath/src/data/index.ts';
import type { GameCard } from '../../shattered-oath/src/types/cards.ts';
import { W, H, CLASS, renderCard, renderCardBack, getClassDesc, sigil } from './cardDesign.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'output');
const INDIVIDUAL = path.join(OUT, 'cards');
const SHEETS = path.join(OUT, 'sheets');

function renderSheet(cards: GameCard[], pageNum: number, side: 'front' | 'back'): string {
  const cols = 3;
  const rows = 3;
  const marginX = 60;
  const marginY = 80;
  const gapX = 30;
  const gapY = 40;
  const sheetW = marginX * 2 + cols * W + (cols - 1) * gapX;
  const sheetH = marginY * 2 + rows * H + (rows - 1) * gapY;

  let content = '';
  for (let i = 0; i < cols * rows; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = marginX + col * (W + gapX);
    const y = marginY + row * (H + gapY);
    const card = cards[i];
    if (card || side === 'back') {
      const suffix = `-p${pageNum}-c${i}`;
      const inner = card && side === 'front' ? renderCard(card, suffix) : renderCardBack();
      const svgInner = inner.replace(/<\?xml[^?]*\?>\s*/, '').replace(/<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      content += `<g transform="translate(${x}, ${y})"><rect x="-2" y="-2" width="${W + 4}" height="${H + 4}" fill="none" stroke="#ccc" stroke-width="1" stroke-dasharray="8,4"/><svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${svgInner}</svg></g>`;
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${sheetW} ${sheetH}" width="${sheetW}" height="${sheetH}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  <text x="${sheetW / 2}" y="40" text-anchor="middle" fill="#333" font-family="Arial, sans-serif" font-size="28">Shattered Oath — ${side === 'front' ? 'Card Fronts' : 'Card Backs'} — Sheet ${pageNum}</text>
  <text x="${sheetW / 2}" y="65" text-anchor="middle" fill="#666" font-family="Arial, sans-serif" font-size="18">Print at 100% scale · Cut along dashed lines · Standard poker size 2.5" × 3.5"</text>
  ${content}
</svg>`;
}

function renderReferenceSheet(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2480 3508" width="2480" height="3508">
  <rect width="100%" height="100%" fill="#f5f0e8"/>
  <text x="1240" y="120" text-anchor="middle" fill="#1a1008" font-family="Georgia, serif" font-size="72" font-weight="bold">SHATTERED OATH</text>
  <text x="1240" y="200" text-anchor="middle" fill="#5a5048" font-family="Georgia, serif" font-size="36">CLASS COLOR GUIDE</text>
  ${Object.entries(CLASS).map(([key, c], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 200 + col * 1100;
    const y = 320 + row * 520;
    return `
    <g transform="translate(${x}, ${y})">
      <rect width="1000" height="460" rx="20" fill="${c.bg}"/>
      <rect x="20" y="20" width="960" height="420" rx="16" fill="#f5f0e8"/>
      <circle cx="120" cy="120" r="50" fill="${c.bg}"/>
      ${sigil(c.sigil, 120, 120, 28, '#f5f0e8')}
      <text x="200" y="100" fill="#1a1008" font-family="Georgia, serif" font-size="44" font-weight="bold">${c.label.toUpperCase()}</text>
      <text x="200" y="150" fill="${c.bg}" font-family="Arial, sans-serif" font-size="20" font-weight="bold">${c.bg}</text>
      <text x="40" y="240" fill="#3a3020" font-family="Georgia, serif" font-size="24">${getClassDesc(key)}</text>
    </g>`;
  }).join('')}
</svg>`;
}

function cleanOutput() {
  for (const dir of [INDIVIDUAL, SHEETS]) {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) fs.unlinkSync(path.join(dir, f));
    } else fs.mkdirSync(dir, { recursive: true });
  }
}

cleanOutput();
const cards = getAllCards();
console.log(`Generating ${cards.length} Illustration Rare full-art cards...`);

for (const card of cards) {
  const safeName = card.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  fs.writeFileSync(path.join(INDIVIDUAL, `${card.type}-${safeName}-${card.id}.svg`), renderCard(card));
}

fs.writeFileSync(path.join(OUT, 'card-back.svg'), renderCardBack());
fs.writeFileSync(path.join(SHEETS, 'class-reference.svg'), renderReferenceSheet());

const playable = cards.filter(c => c.type !== 'monster' && c.type !== 'objective');
const chunk = <T,>(arr: T[], n: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

chunk(playable, 9).forEach((batch, i) => {
  fs.writeFileSync(path.join(SHEETS, `fronts-sheet-${String(i + 1).padStart(2, '0')}.svg`), renderSheet(batch, i + 1, 'front'));
});

for (let i = 0; i < Math.ceil(playable.length / 9); i++) {
  fs.writeFileSync(path.join(SHEETS, `backs-sheet-${String(i + 1).padStart(2, '0')}.svg`), renderSheet([], i + 1, 'back'));
}

chunk(cards.filter(c => c.type === 'monster'), 9).forEach((batch, i) => {
  fs.writeFileSync(path.join(SHEETS, `monsters-sheet-${String(i + 1).padStart(2, '0')}.svg`), renderSheet(batch, i + 1, 'front'));
});

chunk(cards.filter(c => c.type === 'objective'), 9).forEach((batch, i) => {
  fs.writeFileSync(path.join(SHEETS, `objectives-sheet-${String(i + 1).padStart(2, '0')}.svg`), renderSheet(batch, i + 1, 'front'));
});

// Gallery for GitHub Pages and local preview
const gallerySrc = path.join(ROOT, 'gallery.html');
fs.copyFileSync(gallerySrc, path.join(OUT, 'gallery.html'));
fs.copyFileSync(gallerySrc, path.join(OUT, 'index.html'));

console.log('Done!');
