export const site = {
  name: "Turquoise Kitchen",
  tagline: "Authentic Turkish - Mediterranean Cuisine",
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

  // Drop an MP4 into /public/videos and set the path here to replace the hero slideshow.
  heroVideo: null as string | null,
};

export const fullAddress = `${site.address.street}, ${site.address.town} ${site.address.postcode}`;

export const mapsQuery = encodeURIComponent(
  `Turquoise Kitchen, ${site.address.street}, ${site.address.town}`,
);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/order", label: "Order Online" },
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
  mixedShish: p(1, "Mixed shish with rice, bulgur and salad", 1080, 1080),
  seaBass: p(2, "Sea bass fillet with chunky chips and salad", 1080, 1080),
  lamb: p(3, "Charcoal-grilled lamb with bulgur and salad", 1080, 1080),
  topkapi: p(4, "Chicken Topkapi with fries and salad", 1080, 1080),
  mezeSpread: p(5, "A spread of mezes and Turkish bread", 1600, 900),
  cutlets: p(6, "Turquoise chicken cutlets", 1600, 900),
  storefront: p(7, "Turquoise Kitchen restaurant front on Wood Street", 1439, 1093),
  seaBassWarm: p(8, "Sea bass plate in the restaurant", 1374, 1145),
  mixedGrill: p(9, "Mixed grill with colourful mezes", 1536, 1024),
  interiorBlue: p(10, "Blue and gold dining room", 1448, 1086),
  interiorBooth: p(11, "Booth seating beneath patterned tiles", 1448, 1086),
  cutletsWarm: p(12, "Grilled chicken in warm candlelight", 1024, 1536),
  interiorWarm: p(13, "Warmly lit dining room", 1448, 1086),
  tableSpread: p(14, "A full Turkish table spread", 1448, 1086),
  casserole: p(15, "Chicken casserole served in copper", 1600, 900),
  breadMeze: p(16, "Fresh bread with houmous and mezes", 1600, 900),
  starters: p(17, "Cold starters ready to share", 1360, 898),
  kavurma: p(18, "Houmous kavurma topped with lamb", 1360, 925),
  cocktail: p(19, "Strawberry cocktail", 1360, 932),
  cocktailTray: p(20, "A tray of colourful cocktails", 1360, 904),
  cocktailsServed: p(21, "Cocktails being served", 1360, 881),
};

export const gallery: Photo[] = Object.values(photos);
