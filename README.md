# Turquoise Kitchen

Website for Turquoise Kitchen, a Turkish & Mediterranean restaurant at 22 Wood Street, Stratford-upon-Avon. Built with Next.js 16 (App Router) and Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where to edit content

- `src/lib/site.ts`: address, phone, email, opening hours, social links, Deliveroo / Uber Eats links, photos, and `heroVideo`
- `src/lib/menu.ts`: lunch and dinner set menus (dishes, prices, dietary tags)
- `public/images/`: gallery photos (`gallery-XX.webp`), logo, flame mark
- `public/menus/`: downloadable PDF menus

To use a banner video instead of the hero slideshow, add an MP4 to `public/videos/` and set `heroVideo: "/videos/your-file.mp4"` in `src/lib/site.ts`.

## Pages

`/` home · `/menu` · `/about` · `/gallery` · `/order` · `/contact`

## Deploying to GoDaddy Node.js Hosting

GoDaddy installs `dependencies` only (not `devDependencies`), then runs `npm run build` and `npm start` with `PORT` set. Anything `next build` needs (Tailwind, TypeScript, types) must stay in `dependencies`.

```bash
npm run package:godaddy   # zips the last commit: source only, no node_modules/.next/.env
```

Commit first, then upload `godaddy-deploy.zip` in the GoDaddy Node.js Hosting dashboard.
