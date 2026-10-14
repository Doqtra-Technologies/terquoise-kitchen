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

## Deploying to GoDaddy (cPanel Node.js)

```bash
npm run build:godaddy   # builds and writes godaddy-deploy.zip
```

1. cPanel → **Setup Node.js App** → Create: Node.js 20 or 22, mode Production, Application root e.g. `turquoise-kitchen`, Application URL your domain, startup file `server.js`.
2. Stop the app, upload `godaddy-deploy.zip` into the Application root with File Manager, extract it (overwrite), then Restart.
3. No `npm install` needed on the server: the zip already contains the trimmed `node_modules`.
