# LogK Capture Lab

This directory is intentionally detached from Astro.

It exists only to produce screenshot-ready product mockups that can later be captured and imported into the Astro site as static image assets.

## Files

- `index.html`: marketing-style overview and launcher
- `workspace.html`: model selection and delegation cockpit
- `compare.html`: multi-model comparison and synthesis view
- `ops.html`: privacy, governance, and reliability control center
- `wallet.html`: credits, budgets, and run-level billing
- `styles.css`: shared visual system
- `script.js`: minor visual polish only

## Run Locally

From the project root:

```bash
python3 -m http.server 4310 --directory capture-lab
```

Then open:

- `http://127.0.0.1:4310/index.html`
- `http://127.0.0.1:4310/workspace.html`
- `http://127.0.0.1:4310/compare.html`
- `http://127.0.0.1:4310/ops.html`
- `http://127.0.0.1:4310/wallet.html`

## Suggested Capture Sizes

- Marketing overview: `1600x1200`
- Dashboard screens: `1728x1117`
- Tall crop for hero usage: `1400x1800`

## Notes

- The pages are pure HTML, CSS, and JS. No Astro components are used here.
- The designs are original, but informed by current patterns visible across Poe, OpenRouter, Vercel AI Gateway, Portkey, Helicone, LiteLLM, and Eden AI.
