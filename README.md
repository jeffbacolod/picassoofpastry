# Picasso of Pastry

Single-page luxury website for **Picasso of Pastry** by Chef Al-joffri Bacolod and Chef Phoebe Bacolod, Cebu, Philippines.
Built on the ZAVVÓN codebase (React 19 + Vite 7 + Tailwind CSS 4).

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
npm run lint
```

## Where to change things

| What | File |
|---|---|
| Order link (every Order button) | `src/data/products.js` → `ORDER_URL` |
| Launch date / countdown | `src/data/products.js` → `LAUNCH_DATE` |
| Products & collections | `src/data/products.js` |
| Product photos | put a `.webp` in `public/images/products/`, then set `image: '/images/products/<file>.webp'` on the product |
| All text (EN / FIL / CEB / ES) | `src/i18n/translations.js` |
| Colors & fonts | `src/index.css` (`@theme`) |
| Chef portrait | `public/images/chef/chef-al.webp` |

## Deploy

Same as ZAVVÓN: import the GitHub repo into Vercel (framework preset: Vite). `vercel.json` is included.
