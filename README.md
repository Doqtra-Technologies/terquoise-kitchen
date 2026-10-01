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
