export const site = {
  name: "Turquoise Kitchen",
  tagline: "Mediterranean Cuisine",
  description:
    "Charcoal-grilled favourites, colourful mezes and house specialities in the heart of Stratford-upon-Avon.",
  url: "https://turquoisekitchen.co.uk",

  address: {
    street: "22 Wood Street",
    town: "Stratford-upon-Avon",
    postcode: "CV37 9LL",
  },
  email: "turquoisekitchenstratford@hotmail.com",
  phone: { display: "01789 290933", href: "tel:+441789290933" },

  hours: [
    { days: "Monday - Friday", time: "12pm - 10pm" },
    { days: "Saturday - Sunday", time: "12pm - 11pm" },
  ],

  socials: {
    instagram: "https://www.instagram.com/turquoisekitchenn/",
    facebook: "https://www.facebook.com/turquoisekitchenn/",
  },

  ordering: {
    deliveroo:
      "https://deliveroo.co.uk/menu/coventry/stratford-upon-avon/turquoise-kitchen-restaurant-22-wood-street-stratford-upon-avon",
    uberEats:
      "https://www.ubereats.com/gb/store/turquoise-kitchen/9ig0mop3TlGfB3vRC39JxQ",
  },

  reservationsUrl: "https://www.turquoisekitchen.uk/reservations",

  // Google Business Profile "write a review" short link.
  reviewUrl: "https://g.page/r/CWH7BJJEgD7bEBM/review",

  bookingUrl: "https://www.turquoisekitchen.uk/reservations",

  // Drop an MP4 into /public/videos and set the path here to replace the hero slideshow.
  heroVideo: null as string | null,
};

export const fullAddress = `${site.address.street}, ${site.address.town} ${site.address.postcode}`;

export const mapsQuery = encodeURIComponent(
  `Turquoise Kitchen, ${site.address.street}, ${site.address.town}`,
);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
// Directions to the restaurant's Google Maps listing (place id + coordinates).
export const mapsLinkUrl =
  "https://www.google.com/maps/dir//Turquoise+Kitchen,+22+Wood+St,+Stratford-upon-Avon/data=!4m8!4m7!1m0!1m5!1m1!1s0x4870ce33067df443:0xdb3e80449204fb61!2m2!1d-1.7089446!2d52.1926594";

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/order", label: "Order Online" },
  { href: "https://www.turquoisekitchen.uk/gift-card", label: "Gift Card" },
  { href: "/contact", label: "Contact Us" },
];

export type Photo = { src: string; alt: string; w: number; h: number };

const p = (n: number, alt: string, w: number, h: number): Photo => ({
  src: `/images/gallery-${String(n).padStart(2, "0")}.webp`,
  alt,
  w,
  h,
});

export const photos = {
  interiorLanterns: p(1, "Dining room set for dinner beneath glowing lanterns", 1024, 1536),
  hotMeze: p(2, "Hot meze board with halloumi, falafel, sucuk and calamari", 1079, 1457),
  copperCloche: p(3, "Lamb and potatoes revealed beneath a copper cloche", 1086, 1448),
  lambFries: p(4, "Sautéed lamb on fries finished with fresh herbs", 1068, 1473),
  efesMezes: p(5, "Efes beer with houmous and cold mezes", 1079, 1457),
  baklava: p(6, "Pistachio baklava served with ice cream", 1086, 1448),
  carrotMeze: p(7, "Creamy meze with carrot and olive oil", 1079, 1457),
  kofteMeze: p(8, "Grilled kofte with yoghurt and salad", 1086, 1448),
  cheesecake: p(9, "Cheesecake slice with caramel sauce", 1024, 1536),
  charcoalGrill: p(10, "Kebabs grilling over real charcoal", 1024, 1536),
  kofteChips: p(11, "Kofte with chips and colourful salad", 1024, 1536),
  seaBass: p(12, "Sea bass fillet with chips and salad by the window", 1086, 1448),
  beetroot: p(13, "Beetroot salad with yoghurt and dill", 1079, 1458),
  wineEvening: p(14, "Red wine poured beside a hot meze board", 1024, 1536),
  interiorTables: p(15, "Tables laid beneath glowing chandeliers", 1024, 1536),
  interiorSettings: p(16, "Warmly lit table settings", 1024, 1536),
  lambShish: p(17, "Charcoal-grilled lamb with bulgur and salad", 1079, 1458),
  coldMezes: p(18, "Cold mezes served to share", 1024, 1536),
  tableSpread: p(19, "A full Turkish table spread with wine and beer", 1100, 1430),
  casserole: p(20, "Layered casserole topped with rich tomato sauce", 1086, 1448),
  storefront: p(21, "Turquoise Kitchen restaurant front on Wood Street", 1064, 1478),
  adana: p(22, "Adana kebab with bulgur and salad", 1086, 1448),
  houmous: p(23, "Houmous drizzled with olive oil and chilli", 1031, 1526),
};

export const gallery: Photo[] = Object.values(photos);
