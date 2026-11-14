export type Tag = "v" | "vg" | "spicy" | "gluten" | "gf" | "nuts";

export type Price = { label: string; price: string };

export type Dish = { name: string; note?: string; desc?: string; tags?: Tag[]; price?: string; prices?: Price[] };

export type MenuSection = { title: string; subtitle?: string; note?: string; items: Dish[] };

export type SetMenu = {
  slug: string;
  name: string;
  courses: string;
  price: string;
  served: string;
  pdf: string;
  sections: MenuSection[];
  extras?: { title: string; price: string; items: string[] };
  serviceNote: string;
};

export const tagLabels: Record<Tag, string> = {
  v: "Suitable for vegetarians",
  vg: "Suitable for vegans",
  spicy: "Contains spicy",
  gluten: "Gluten",
  gf: "Gluten free",
  nuts: "Contains nuts",
};

const d = (name: string, desc?: string, tags?: Tag[], extra?: Partial<Dish>): Dish => ({
  name,
  desc,
  tags,
  ...extra,
});

// Shared dishes
const cacik = d("Cacik", "Grated cucumber mixed with thick yoghurt, garlic, fresh mint and dill.", ["v"]);
const soup = d("Soup of the Day", "Please ask for today's special soup.");
const liverStarter = d("Pan Fried Lamb Liver", "Pan fried lamb liver with red onion and parsley.");
const houmous = d("Houmous", "Rich chickpea purée flavoured with cumin, garlic, tahini, lemon & olive oil.", ["vg", "v"]);
const babaganush = d("Babaganush", "Grilled aubergine with tahini, yoghurt, garlic, olive oil and mixed herbs.", ["v"]);
const saksuka = d("Saksuka", "Fried aubergine, onions and mixed peppers cooked in tomato sauce.", ["v"]);
const beetroot = d("Beetroot Salad", "Roasted beetroot grated and mixed with yoghurt, garlic and olive oil.", ["v"]);
const sigara = d("Sigara Borek", "Pastry filled with feta cheese, spinach & dill, served with sweet chilli sauce.", ["v"], { note: "Pastry Rolls" });
const halloumi = d("Halloumi", "Pan fried halloumi cheese.", ["v"]);

const chickenShish = d("Chicken Shish", "Marinated cubes of chicken grilled over charcoal.");
const adana = d("Adana", "Spicy minced lamb kebab grilled over charcoal.");
const liverMain = d("Pan Fried Lamb Liver", "Pan fried lamb liver with red onion and parsley.");
const kofte = d(
  "Turquoise Kofte",
  "Spicy minced lamb and beef kofte pieces grilled on charcoal, served on garlic butter croutons with special tomato sauce, butter sauce and rice.",
);
const seaBass = d("Pan Fried Sea Bass Fillet", "Pan fried sea bass fillet served with chunky chips and side salad.");
const vegMoussaka = d(
  "Vegetarian Moussaka",
  "Layers of aubergine, potato, mushrooms, courgettes, onions and tomato topped with béchamel sauce.",
  ["v"],
);
const spChicken = d(
  "Salt & Pepper Chicken",
  "Battered chicken strips, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice.",
);
const spPrawn = d(
  "Salt & Pepper King Prawn",
  "Battered jumbo king prawns, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice.",
);

const allergyNote =
  "Food allergies and intolerances: before ordering your food and drinks, please speak to a member of staff if you want to know more about our ingredients. We cannot guarantee that all of our dishes are 100% free from nuts or their derivatives. All menu items are subject to availability. Some of our menu items contain gluten ingredients.";

export { allergyNote };

export const setMenus: SetMenu[] = [
  {
    slug: "lunch",
    name: "Lunch Menu",
    courses: "2 Courses",
    price: "£17.50",
    served: "Monday - Saturday · 12:00pm - 4:00pm",
    pdf: "/menus/turquoise-kitchen-lunch-menu.pdf",
    sections: [
      {
        title: "Starters",
        subtitle: "Please choose one",
        items: [
          sigara,
          soup,
          houmous,
          babaganush,
          cacik,
          liverStarter,
          beetroot,
          halloumi,
          d("Garlic Mushrooms", "Pan fried sliced mushrooms with butter, double cream, garlic & herbs.", ["v"]),
        ],
      },
      {
        title: "Mains",
        subtitle: "Please choose one",
        items: [
          chickenShish,
          adana,
          liverMain,
          kofte,
          seaBass,
          spChicken,
          d(
            "Wrap Adana",
            "Spicy minced lamb kebab wrapped in tortilla bread with onion, tomatoes, parsley, chilli and mint yoghurt sauce. Served with chips.",
          ),
          vegMoussaka,
          spPrawn,
        ],
      },
      {
        title: "Side Orders",
        items: [
          d("Chunky Chips", undefined, undefined, { price: "£3.95" }),
          d("Extra Bread", undefined, undefined, { price: "£2.50" }),
          d("Chilli & Garlic Dip", undefined, undefined, { price: "£2.50" }),
        ],
      },
    ],
    serviceNote:
      "A discretionary service charge of 10% will be added to your bill, 12.5% for groups of 8 and above. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
  },
  {
    slug: "dinner",
    name: "Dinner Menu",
    courses: "3 Courses",
    price: "£29.50",
    served: "Monday - Sunday · 4:00pm - 9:00pm",
    pdf: "/menus/turquoise-kitchen-dinner-menu.pdf",
    sections: [
      {
        title: "Starters",
        subtitle: "Please choose one",
        items: [
          cacik,
          houmous,
          babaganush,
          d("Yaprak Sarma", "Vine leaves stuffed with rice, onion and herbs, cooked in olive oil.", ["v"], { note: "Vine Leaves" }),
          soup,
          liverStarter,
          sigara,
          d("Houmous Kavurma", "Pan-fried lamb pieces served on a bed of houmous."),
          d("Calamari", "Deep fried crispy squid rings served with tartar sauce."),
          d("Prawns", "Peeled tiger prawns with dill, garlic and tomato sauce."),
          halloumi,
          d("Sucuk Grill", "Grilled spicy Turkish sausage."),
          d("Garlic Mushroom", "Pan fried mushrooms with butter, double cream, garlic & herbs.", ["v"]),
        ],
      },
      {
        title: "Mains",
        subtitle: "Please choose one",
        items: [
          chickenShish,
          d("Mixed Shish", "Marinated chicken cubes and spicy minced lamb kebab (Adana) grilled over charcoal."),
          adana,
          kofte,
          d("Mixed Grill", "Marinated lamb cubes, chicken cubes and Adana kebab grilled over charcoal."),
          d(
            "Chicken Topkapi",
            "Chicken thighs stuffed with rice, pine nuts, currants and spices. Baked with special tomato and butter sauces, served with fries and salad.",
            ["nuts"],
          ),
          vegMoussaka,
          spChicken,
          spPrawn,
          d(
            "Lamb Beyti",
            "Minced, herbed and spiced lamb cooked on charcoal, wrapped in tortilla bread with mozzarella. Served with homemade tomato and butter sauces, rice and yoghurt.",
          ),
          liverMain,
          d(
            "Meat Moussaka",
            "Layered potatoes, courgettes, peppers, mushrooms, aubergines and carrots, topped with minced lamb, béchamel sauce and cheese. Served with rice and side salad.",
          ),
          seaBass,
        ],
      },
      {
        title: "Desserts",
        subtitle: "Please choose one",
        items: [d("Baklava", undefined, ["nuts"]), d("Rice Pudding", undefined, undefined, { note: "Sutlac" }), d("Supangle", "Chocolate pudding.", ["nuts"])],
      },
    ],
    serviceNote:
      "A discretionary service charge of 10% will be added to your bill, 12.5% for groups of 8 and above. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
  },
];

export const collectionMenu: SetMenu = {
  slug: "collection",
  name: "Collection Menu",
  courses: "2 Courses",
  price: "£22.95",
  served: "Collection · Available for a limited time only",
  pdf: "/menus/turquoise-kitchen-collection-menu.pdf",
  sections: [
    {
      title: "Starters",
      subtitle: "Please choose one",
      note: "All starters come with Turkish flat bread.",
      items: [
        d("Cacik", "Grated cucumber mixed with thick yoghurt, garlic, fresh mint and dill.", ["v", "gf"]),
        d("Houmous", "Rich chickpea purée flavoured with cumin, garlic, tahini, lemon & olive oil.", ["v", "gf"]),
        babaganush,
        saksuka,
        d("Yaprak Sarma", "Vine leaves stuffed with a mixture of rice, onion and herbs, cooked in olive oil.", ["v"], { note: "Vine Leaves" }),
        d("Beetroot Salad", "Roasted beetroots grated and mixed with yoghurt, garlic and olive oil.", ["v", "gf"]),
        liverStarter,
        sigara,
        d("Muska Borek", "Triangular filo pastry filled with minced meat, onions and peppers."),
        d("Falafel", "Chickpea and vegetable fritters served with houmous, dill, garlic and tomato sauce.", ["v"]),
        d("Halloumi", "Pan fried halloumi cheese.", ["v"]),
      ],
    },
    {
      title: "Mains",
      subtitle: "Please choose one",
      items: [
        d("Chicken Shish", "Marinated cubes of chicken grilled over charcoal, served with rice and side salad."),
        d("Adana", "Spicy minced lamb kebab grilled over charcoal, served with rice and side salad."),
        d(
          "Turquoise Kofte",
          "Spicy minced lamb and beef kofte pieces grilled on charcoal, served on a bed of garlic butter croutons with special tomato sauce, butter sauce, rice and bulgur.",
        ),
        d("Turquoise Chicken Cutlets", "Tender chicken thighs lightly marinated with herbs, grilled over charcoal, served with rice and side salad."),
        d("Falafel", "Chickpea and vegetable fritters served with houmous, rice and side salad.", ["v"]),
        d(
          "Vegetarian Moussaka",
          "Layers of aubergine, potato, mushrooms, courgettes, onions and tomato topped with béchamel sauce, served with rice and side salad.",
          ["v"],
        ),
        d("Pan Fried Lamb Liver", "Pan fried lamb liver with red onion and parsley, served with rice and side salad."),
        d(
          "Beef Burger",
          "100% beef mince (6oz), cheese, lettuce, tomato, pickle, caramelised onion and burger sauce, served with chips (ketchup & mayo).",
        ),
        d(
          "Salt & Pepper Chicken",
          "Battered chicken strips, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice and side salad.",
          ["spicy"],
        ),
        d("Chicken Casserole", "Cubes of chicken cooked in tomato sauce with peppers, onion, mushrooms, herbs and spices, served with rice."),
        d("Wrap Adana", "Char-grilled Adana in soft lavash with special salad and yoghurt sauce, served with chips (ketchup & mayo)."),
        d("Wrap Chicken Shish", "Char-grilled chicken in soft lavash with special salad and yoghurt sauce, served with chips (ketchup & mayo)."),
        d("Wrap Falafel", "Homemade falafel with houmous in soft lavash with special salad and sauce, served with chips (ketchup & mayo).", ["v"]),
      ],
    },
  ],
  serviceNote:
    "This offer is available for a limited time only. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
};

export type PricedMenu = {
  slug: string;
  name: string;
  eyebrow: string;
  pdf: string;
  sections: MenuSection[];
  serviceNote: string;
};

// Priced dish
const p = (name: string, price: string, desc?: string, tags?: Tag[], extra?: Partial<Dish>): Dish => ({
  name,
  price,
  desc,
  tags,
  ...extra,
});

// Dish with several sizes / options, e.g. wine by the glass and bottle
const multi = (name: string, prices: Price[], desc?: string, tags?: Tag[], extra?: Partial<Dish>): Dish => ({
  name,
  prices,
  desc,
  tags,
  ...extra,
});

const glass = (ml175: string, ml250: string, bottle: string): Price[] => [
  { label: "175ml", price: ml175 },
  { label: "250ml", price: ml250 },
  { label: "Bottle", price: bottle },
];

const bottle = (price: string): Price[] => [{ label: "Bottle", price }];

const spirit = (ml25: string, ml50: string): Price[] => [
  { label: "25ml", price: ml25 },
  { label: "50ml", price: ml50 },
];

const draught = (small: string, pint: string): Price[] => [
  { label: "285ml", price: small },
  { label: "568ml", price: pint },
];

const water: Price[] = [
  { label: "Small", price: "£2.95" },
  { label: "Large", price: "£3.95" },
];

export const aLaCarte: PricedMenu = {
  slug: "a-la-carte",
  name: "À La Carte",
  eyebrow: "Authentic Turkish cuisine",
  pdf: "/menus/turquoise-kitchen-a-la-carte-menu.pdf",
  sections: [
    {
      title: "Cold Starters",
      subtitle: "Served with homemade bread",
      items: [
        p("Mixed Olives", "£6.90", "Mixed green and black olives marinated in herbs and olive oil.", ["vg", "v"]),
        p("Houmous", "£6.90", "Rich chickpea purée with cumin, garlic, tahini, lemon and olive oil.", ["vg", "v"]),
        p("Cacik", "£6.90", "Cucumber mixed with yoghurt, garlic, olive oil and dill.", ["v"]),
        p("Babaganush", "£6.90", "Grilled aubergine with tahini, yoghurt, garlic, olive oil and herbs.", ["v"]),
        p("Yaprak Sarma", "£6.90", "Vine leaves stuffed with rice, onion and herbs, cooked in olive oil.", ["v"], { note: "Vine Leaves" }),
        p("Beetroot Salad", "£6.90", "Roasted beetroot grated and mixed with yoghurt, garlic and olive oil.", ["v"]),
        p("Mixed Cold Meze Platter", "£17.90", "Houmous, Babaganush, Cacik, Beetroot Salad, Yaprak Sarma and olives."),
      ],
    },
    {
      title: "Hot Starters",
      subtitle: "Served with homemade bread",
      note: "Additional bread or homemade dip: £3.50.",
      items: [
        p("Turkish Pita Bread", "£3.50", "Gluten-free bread available on request."),
        p("Soup of the Day", "£5.50", "Please ask for today's special soup."),
        p("Houmous Kavurma", "£6.90", "Pan-fried lamb pieces served on a bed of houmous."),
        p("Sigara Borek", "£6.90", "Feta cheese, spinach and dill pastry with sweet chilli sauce.", ["v"], { note: "Pastry Rolls" }),
        p("Halloumi", "£6.90", "Pan-fried halloumi cheese.", ["v"]),
        p("Kuzu Ciger Tava", "£6.90", "Pan-fried lamb liver with red onion and parsley."),
        p("Sucuk Grill", "£6.90", "Grilled spicy Turkish sausage."),
        p("Garlic Mushroom", "£6.90", "Pan-fried mushrooms with butter, double cream, garlic and herbs.", ["v"]),
        p("Calamari", "£7.90", "Deep-fried crispy squid rings with tartar sauce."),
        p("Prawns", "£7.90", "Peeled tiger prawns with dill, garlic and tomato sauce."),
        p("Mixed Hot Meze Platter", "£19.50", "Halloumi, Sucuk, Sigara Borek and Calamari."),
      ],
    },
    {
      title: "Grills",
      note: "Served with garnish of salad and rice.",
      items: [
        p("Chicken Shish", "£18.90", "Marinated chicken cubes grilled over charcoal."),
        p("Mixed Shish", "£18.90", "Marinated lamb and chicken grilled over charcoal."),
        p("Adana", "£18.90", "Spicy minced lamb kebab grilled over charcoal."),
        p("Lamb Shish", "£19.50", "Chargrilled lean tender lamb skewers."),
        p("Mixed Grill", "£22.50", "Lamb, chicken and Adana kebab grilled over charcoal."),
        p("Lamb Ribs", "£19.50", "Charcoal-grilled lamb ribs."),
      ],
    },
    {
      title: "Chef's Specials",
      note: "Please tell our team about any food allergies.",
      items: [
        p(
          "Cokertme Kebab",
          "£22.90",
          "Sautéed beef strips marinated with garlic and spices, served on grated and fried crispy potatoes with yoghurt, hot tomato sauce and butter sauce.",
        ),
        p(
          "Chicken Topkapi",
          "£18.50",
          "Chicken thighs stuffed with rice, pine nuts, currants and spices. Baked with special tomato and butter sauces, served with fries and salad.",
          ["nuts"],
        ),
        p(
          "Lamb Sarma Beyti",
          "£18.50",
          "Minced, herbed and spiced lamb cooked on charcoal, wrapped in tortilla bread with mozzarella. Served with homemade tomato and butter sauces, rice and yoghurt.",
        ),
        p(
          "Salt & Pepper Chicken",
          "£16.90",
          "Battered chicken strips, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice.",
        ),
        p(
          "Salt & Pepper King Prawn",
          "£18.50",
          "Battered jumbo king prawns, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice.",
        ),
        p(
          "Meat Moussaka",
          "£16.50",
          "Layers of potatoes, courgettes, peppers, mushrooms, aubergines and carrots topped with minced lamb and béchamel sauce with cheese. Served with rice / bulgur and side salad.",
        ),
        p("Kuzu Ciger Tava", "£18.50", "Pan-fried lamb liver with red onion and parsley, served with rice and garnish of salad."),
        p("Turquoise Kofte", "£18.50", "Spicy minced lamb and beef kofte grilled on charcoal, served with special tomato sauce, butter sauce and rice."),
      ],
    },
    {
      title: "Seafood",
      items: [
        p("Sea Bass Fillet", "£19.50", "Seasoned and chargrilled sea bass fillet served with side salad and chunky chips."),
        p("King Prawn Casserole", "£18.50", "King prawns cooked with vegetables in our special tomato sauce and herbs."),
      ],
    },
    {
      title: "Steaks",
      items: [
        p("Sirloin Steak", "£26.50", "Delicate flavour balanced with firmer texture; recommended medium rare.", undefined, { note: "10oz" }),
        p("Rib-Eye Steak", "£28.50", "Bursting with flavour and almost as tender as fillet; recommended medium.", undefined, { note: "10oz" }),
      ],
    },
    {
      title: "Vegetarians",
      items: [
        p(
          "Vegetarian Moussaka",
          "£16.50",
          "Layers of aubergine, potato, mushrooms, courgettes, onions and tomato topped with béchamel sauce, mozzarella cheese and tomato sauce. Served with rice and garnish of salad.",
          ["v"],
        ),
        p("Yaprak Sarma", "£17.50", "Freshly prepared stuffed vine leaves served with yoghurt and garnish of salad.", ["v"], { note: "Vine Leaves" }),
      ],
    },
    {
      title: "Salads",
      items: [
        p("Chicken Salad", "£17.50", "Grilled chicken with mixed salad leaves."),
        p("Feta Cheese Salad", "£14.50", "Tomato, cucumber, parsley, red onion, olive oil dressing, feta cheese and mixed olives.", ["v"]),
        p("Coban Salad", "£8.90", "Tomato, cucumber, red onion, parsley and olive oil dressing.", ["v"]),
      ],
    },
    {
      title: "Side Orders",
      items: [p("Grilled Onions", "£3.95", undefined, ["vg", "v"]), p("Fries", "£3.95"), p("Rice", "£3.95", undefined, ["v"]), p("Onion Rings", "£3.95")],
    },
    {
      title: "Kids Meals",
      note: "Served with garnish of salad and fries.",
      items: [p("Chicken Nuggets", "£9.50"), p("Chicken Shish", "£9.50"), p("Fish Finger", "£9.50")],
    },
  ],
  serviceNote:
    "A discretionary service charge of 10% will be added to your bill, 12.5% for groups of 8 and above. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
};

export const drinksMenu: PricedMenu = {
  slug: "drinks",
  name: "Drinks",
  eyebrow: "Wines, cocktails, beers & more",
  pdf: "/menus/turquoise-kitchen-drinks-menu.pdf",
  sections: [
    {
      title: "Soft Drinks",
      items: [
        p("Coke / Diet Coke / Sprite / Fanta", "£3.50", undefined, undefined, { note: "330ml" }),
        multi("Still / Sparkling Water", water),
        p("Fruit Juices", "£3.50"),
        p("Ayran", "£2.50", "Yoghurt drink."),
        p("Slimline Tonic / Soda Water", "£2.95"),
      ],
    },
    {
      title: "White Wines",
      items: [
        multi("Les Ottomans", glass("£4.50", "£6.20", "£17.50"), "Anatolian dry white wine."),
        multi(
          "Sanvigilio Pinot Grigio",
          glass("£6.25", "£8.50", "£24.50"),
          "Delicate, floral and fruity aromas. Crisp and fresh with ripe melon, good mouthfeel and a clean finish.",
          ["vg"],
          { note: "Italy" },
        ),
        multi(
          "Çankaya",
          glass("£6.50", "£8.75", "£25.50"),
          "Elegant, persistent and well-balanced; ideal with grilled fish, seafood salads, tomato pasta, grilled chicken and fresh cheeses.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Diren Collection Narince",
          glass("£6.75", "£8.75", "£25.50"),
          "Floral notes, yellow fruit and citrus aromas. A round, medium-bodied wine balanced with good acidity.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "The Listening Station Chardonnay",
          glass("£6.85", "£8.90", "£26.95"),
          "Refreshingly unoaked, with citrus and white peach flavours, fresh acidity and a clean, bright mineral finish.",
          undefined,
          { note: "Australia" },
        ),
        multi(
          "Villa Doluca White",
          [
            { label: "175ml", price: "£7.50" },
            { label: "250ml", price: "£9.50" },
          ],
          "Yellow flowers, honeysuckle and lily. A pleasant, typical everyday drinking wine.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Sileni Estates Sauvignon Blanc",
          glass("£7.50", "£10.50", "£31.50"),
          "Peach aromas with a zingy finish; a portion of Semillon adds complexity.",
          ["vg"],
          { note: "New Zealand" },
        ),
      ],
    },
    {
      title: "Red Wines",
      items: [
        multi("Les Ottomans", glass("£4.50", "£6.20", "£17.50"), "Anatolian red wine - Kalecik Karasi / Shiraz."),
        multi(
          "Sierra Grand Merlot",
          glass("£6.50", "£8.75", "£25.50"),
          "Plum and cherry aromas with peppery spice. Juicy, fresh red fruit and a hint of green pepper.",
          ["vg"],
          { note: "Chile" },
        ),
        multi("Yakut", glass("£6.85", "£8.90", "£26.50"), "Distinctive red wine with rich red fruit aromas, balanced by ripe tannins.", undefined, {
          note: "Turkey",
        }),
        multi(
          "Tesoro de los Andes Malbec",
          glass("£7.50", "£9.75", "£29.50"),
          "Dark fruit, savoury overtones and generous, full-bodied flavour.",
          ["vg"],
          { note: "Argentina" },
        ),
        multi(
          "Villa Doluca Red",
          glass("£7.50", "£9.75", "£29.50"),
          "Intense dark cherry, plum and blackberry; distinctive Mediterranean maquis hints.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Rioja Vendimia Seleccionada",
          bottle("£33.00"),
          "Ripe plum and cherry with good fruit and a smoky, spicy dimension.",
          ["vg"],
          { note: "Spain" },
        ),
        multi("Sarafin Shiraz", bottle("£37.50"), "Rich plum, raspberry and aromatic coffee and vanilla; aged in oak for 12 months.", undefined, {
          note: "Turkey",
        }),
        multi(
          "Kav",
          bottle("£47.50"),
          "Dried red fruits, spice and full-bodied flavour with integrated oak and strong, ripe tannins.",
          undefined,
          { note: "Turkey" },
        ),
      ],
    },
    {
      title: "Rosé Wines",
      items: [
        multi(
          "Sanvigilio Pinot Grigio Rosé",
          glass("£6.50", "£8.75", "£25.50"),
          "Delicately scented peach and strawberry aromas; juicy berry fruit, good acidity and a dry finish.",
          undefined,
          { note: "Italy" },
        ),
        multi(
          "Burlesque White Zinfandel Rosé",
          glass("£6.85", "£8.90", "£26.50"),
          "Strawberry ice cream, bright berry fruit and a pretty pink colour.",
          undefined,
          { note: "America" },
        ),
        multi(
          "Lâl",
          glass("£6.85", "£8.90", "£26.50"),
          "Produced from Çal Karasi grapes grown in Denizli; fruity aromas, fresh acidity and persistent flavour.",
          undefined,
          { note: "Turkey" },
        ),
      ],
    },
    {
      title: "Champagne & Sparkling Wines",
      items: [
        multi(
          "Prosecco DOC Treviso, Brut Lynera",
          [
            { label: "125ml", price: "£7.20" },
            { label: "Bottle", price: "£31.50" },
          ],
          "Delicately light and fruity Prosecco with apple and pear aromas, a fresh palate and crisp ripe stone fruit.",
          undefined,
          { note: "Veneto, Italy" },
        ),
        multi(
          "Prosecco Treviso Rosé",
          [
            { label: "125ml", price: "£7.20" },
            { label: "Bottle", price: "£31.50" },
          ],
          "Light and fruity. Raboso red grapes donate a nice round aftertaste.",
          undefined,
          { note: "Italy" },
        ),
        multi(
          "Moët & Chandon Brut Impérial",
          bottle("£88.00"),
          "Pale straw colour, delicate bubbles and notes of flowers, vanilla, grapefruit, bread and fresh fig.",
          undefined,
          { note: "France" },
        ),
      ],
    },
    {
      title: "Cocktails",
      items: [
        p("Aperol Spritz", "£10.95", "Aperol, soda water, slice of orange and Prosecco."),
        p("Piña Colada", "£10.95", "Rich coconut cream, white rum and tangy pineapple."),
        p("Mojito", "£10.95", "Strawberry or passion fruit, white rum, fresh mint, fresh lime wedges, brown sugar and lemonade, topped with dark rum."),
        p("Espresso Martini", "£10.95", "Espresso, vodka, Kahlúa and sugar syrup."),
        p("Strawberry Daiquiri", "£10.95", "Strawberry purée with rum and lime juice."),
      ],
    },
    {
      title: "Spirits",
      note: "All mixers £1.90.",
      items: [
        multi("Smirnoff", spirit("£5.50", "£7.50")),
        multi("Absolut", spirit("£5.50", "£7.50")),
        multi("Gordon's", spirit("£5.50", "£7.50")),
        multi("Bombay", spirit("£5.50", "£7.50")),
        multi("Bacardi", spirit("£5.50", "£7.50")),
        multi("Havana 3", spirit("£5.50", "£7.50")),
        multi("Captain Morgan", spirit("£5.50", "£7.50")),
        multi("Bell's", spirit("£5.50", "£7.50")),
        multi("Jack Daniel's", spirit("£6.50", "£8.00")),
        multi("Jameson", spirit("£5.50", "£7.50")),
        multi("Turkish Raki", [
          { label: "50ml", price: "£7.00" },
          { label: "35cl", price: "£40.00" },
          { label: "70cl", price: "£70.00" },
        ]),
      ],
    },
    {
      title: "Beers",
      items: [
        multi("Efes Draft", draught("£4.95", "£6.85")),
        p("Peroni", "£5.50"),
        multi("Peroni Draft", draught("£4.95", "£6.85")),
        p("Corona", "£5.50"),
        p("Heineken", "£5.50", undefined, undefined, { note: "Alcohol Free" }),
      ],
    },
    {
      title: "Ciders",
      items: [p("Bulmers", "£6.50", "Original."), p("Kopparberg", "£6.50", "Strawberry & lime, mixed fruits.")],
    },
  ],
  serviceNote: "All prices are subject to change without prior notice.",
};
