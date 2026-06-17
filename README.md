# Shattered Oath — Card Gallery

Upload **this entire folder** to GitHub. It contains everything needed to build and host the online card gallery.

## What's inside

| Folder / file | Purpose |
|---------------|---------|
| `.github/workflows/pages.yml` | Builds cards and deploys to GitHub Pages |
| `shattered-oath-print/` | Card generator, portrait art, gallery page |
| `shattered-oath/src/data/` | Card names, stats, and rules text |
| `shattered-oath/src/types/cards.ts` | Card type definitions |

**Not included (on purpose):** `node_modules/`, generated SVGs in `output/` — GitHub builds those automatically.

## Upload to GitHub

1. Open **GitHub Desktop**
2. **File → Add local repository**
3. Choose this folder: `C:\Users\galgo\Desktop\shattered-oath-upload`
4. If Git asks to create a repo here, say **Yes**
5. Publish to **`GalGoldman10/shattered-oath-upload`**
6. If GitHub only shows `.gitattributes` and a workflow: **Branch → Force push origin**

## Turn on the live site

1. On GitHub: **Settings → Pages**
2. **Source:** GitHub Actions
3. Wait for the **Deploy card gallery** workflow to finish (Actions tab)
4. Open: **https://GalGoldman10.github.io/shattered-oath-upload/**

## Preview locally (optional)

```powershell
cd shattered-oath-print
npm install
npm run generate
```

Then open `shattered-oath-print\output\gallery.html` in your browser.
