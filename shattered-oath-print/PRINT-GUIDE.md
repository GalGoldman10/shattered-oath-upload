# Shattered Oath — Printable Card Designs

**Physical board game cards — not a website.**

This folder contains print-ready SVG card artwork for *Shattered Oath*, a dark-fantasy strategic card game.

## What's included

After running the generator:

| Output | Description |
|--------|-------------|
| `output/cards/` | **100 individual card SVG files** (one per card) |
| `output/card-back.svg` | Shared card back design |
| `output/sheets/fronts-sheet-*.svg` | A4 print sheets — player deck fronts (9 cards per sheet) |
| `output/sheets/backs-sheet-*.svg` | Matching back sheets |
| `output/sheets/monsters-sheet-*.svg` | Monster cards |
| `output/sheets/objectives-sheet-*.svg` | Objective cards |
| `output/sheets/class-reference.svg` | Class color & identity reference |

## Generate the cards

```bash
cd shattered-oath-print
npm install
npm run generate
```

## How to print

1. Open any file in `output/sheets/` in **Chrome**, **Edge**, or **Inkscape**.
2. Print or export to PDF at **100% scale** (no “fit to page”).
3. Card size: **2.5" × 3.5"** (standard poker / board game size).
4. Use **300gsm+ cardstock** for best results.
5. Cut along the dashed guide lines on each sheet.
6. Print `backs-sheet-*.svg` on the reverse (or glue backs separately).

### Professional print

Send the SVG or PDF files to a print shop (MakePlayingCards, PrintNinja, local copy shop).  
Specify: poker size, matte or linen finish, double-sided.

## Card design features

- Dark metal / burgundy / muted gold palette  
- Sharp geometric frames (no cartoon rounding)  
- Class-specific accent colors and sigils:
  - **Vanguard** — bronze shield  
  - **Ravager** — crimson blade  
  - **Arcanist** — blue star  
  - **Stalker** — green dagger  
  - **Warden** — pale sun  
  - **Occultist** — violet moon  
- Rarity gem (Common / Uncommon / Rare / Legendary)  
- Stats, abilities, flavor text on every card  

## Card counts

| Type | Count |
|------|-------|
| Champions | 24 |
| Equipment | 18 |
| Tactics | 24 |
| Reactions | 12 |
| Monsters | 10 |
| Objectives | 12 |

## Rename the game

Edit `../shattered-oath/src/config/gameConfig.ts` → `title`, then re-run `npm run generate`.

## Note about the web prototype

The `shattered-oath/` folder contains an earlier digital prototype you did **not** ask for.  
**These printable SVGs are your card design deliverable** for the physical board game.
