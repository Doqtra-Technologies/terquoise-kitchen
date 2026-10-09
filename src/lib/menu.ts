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
const cacik = d("Cacik", "Grated cucumber mixed with thick yoghurt, garlic, fresh mint and dill.", ["v", "gluten"]);
const soup = d("Soup of the Day", "Please ask for today's special soup.");
const liverStarter = d("Pan Fried Lamb Liver", "Pan fried lamb liver with red onion and parsley.");
const houmous = d("Houmous", "Rich chickpea purée flavoured with cumin, garlic, tahini, lemon & olive oil.", ["vg", "v"]);
const babaganush = d("Babaganush", "Grilled aubergine with tahini, yoghurt, garlic, olive oil and mixed herbs.", ["v"]);
const saksuka = d("Saksuka", "Fried aubergine, onions and mixed peppers cooked in tomato sauce.", ["v"]);
const beetroot = d("Beetroot Salad", "Roasted beetroots grated and mixed with yoghurt, garlic and olive oil.", ["v", "gluten"]);
const sigara = d("Sigara Borek", "Pastry filled with feta cheese, spinach & dill, served with sweet chilli sauce.", ["v"], { note: "Pastry Rolls" });

const chickenShish = d("Chicken Shish", "Marinated cubes of chicken grilled over charcoal.");
const adana = d("Adana", "Spicy minced lamb kebab grilled over charcoal.");
const liverMain = d("Pan Fried Lamb Liver", "Pan fried lamb liver with red onion and parsley.");
const kofte = d(
  "Turquoise Kofte",
  "Spicy minced lamb and beef kofte pieces grilled on charcoal, served on a bed of garlic butter croutons with special tomato sauce, butter sauce, rice and bulgur.",
);
const cutlets = d("Turquoise Chicken Cutlets", "Tender chicken thighs lightly marinated with herbs, grilled over charcoal.");
const seaBass = d("Pan Fried Sea Bass Fillet", "Pan fried sea bass fillet served with chunky chips and side salad.");
const casserole = d(
  "Chicken Casserole",
  "Cubes of chicken cooked in tomato sauce with peppers, onion, mushrooms, herbs and spices, served with rice / bulgur.",
);
const falafel = d("Falafel", "Chickpea and vegetable fritters served with houmous.", ["v"]);
const vegMoussaka = d(
  "Vegetarian Moussaka",
  "Layers of aubergine, potato, mushrooms, courgettes, onions and tomato topped with béchamel sauce.",
  ["v"],
);
const spChicken = d(
  "Salt & Pepper Chicken",
  "Battered chicken strips, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice.",
  ["spicy"],
);
const spPrawn = d(
  "Salt & Pepper King Prawn",
  "Battered jumbo king prawns, garlic, onion, chilli, fresh peppers, sesame seeds, salt and pepper, served with rice.",
  ["spicy"],
);
const burgerDesc =
  "100% beef mince, cheese, lettuce, tomato, pickle, caramelised onion and burger sauce, served with chunky chips.";

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
        items: [sigara, soup, houmous, babaganush, saksuka, cacik, liverStarter, beetroot, d("Halloumi", "Pan fried halloumi cheese."), d("Garlic Mushrooms", "Pan fried sliced mushrooms with butter, double cream, garlic & herbs.")],
      },
      {
        title: "Mains",
        subtitle: "Please choose one",
        items: [
          chickenShish,
          adana,
          liverMain,
          kofte,
          cutlets,
          seaBass,
          casserole,
          falafel,
          vegMoussaka,
          spPrawn,
          spChicken,
          d("King Prawn Linguine", "Linguine pasta with king prawns, cherry tomatoes, onion, chilli, garlic and lime dill sauce."),
          d("Penne Arabiata", "Penne pasta with garlic and chilli in a light tomato sauce."),
          d("Lasagna", "Oven baked pasta layers with meat sauce, béchamel and parmesan."),
          d("Turquoise Beef Burger", burgerDesc),
          d(
            "Wrap Adana",
            "Spicy minced lamb kebab in a tortilla wrap topped with onion, tomatoes, parsley, chilli and mint yoghurt sauce, then rolled. Served with chips.",
            ["spicy"],
          ),
          d("Halloumi Salad", "Pan fried halloumi cheese."),
          d("Pizza Margherita", "Tomato and basil sauce with mozzarella."),
          d("Turquoise Pizza", "Spicy beef, peppers, sucuk and jalapeño.", ["spicy"]),
          d("Meat Feast Pizza", "Pepperoni (sucuk), spicy beef, chicken and salami."),
          d("Vegetarian Pizza", "Mushrooms, pineapple, peppers, tomatoes, sweetcorn and red onion.", ["v"]),
        ],
      },
      {
        title: "Side Orders",
        items: [
          d("Chunky Chips", undefined, undefined, { price: "£3.95" }),
          d("Extra Bread", undefined, undefined, { price: "£2.50" }),
          d("Chilli & Garlic Dip", undefined, undefined, { price: "£2.50" }),
          d("Garlic Bread Cheese", undefined, undefined, { price: "£7.50" }),
        ],
      },
    ],
    extras: {
      title: "Extra Pizza Toppings",
      price: "£2.00",
      items: ["Chicken", "Spicy Beef", "Sucuk / Pepperoni", "Pineapple", "Jalapeño", "Extra Cheese", "Mushrooms", "Olives", "Red Onions"],
    },
    serviceNote:
      "A discretionary service charge of 10% will be added to your bill, 12.5% for groups of 8 and above. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
  },
  {
    slug: "dinner",
    name: "Dinner Menu",
    courses: "3 Courses",
    price: "£25.95",
    served: "Monday - Sunday · 5:00pm - 9:00pm",
    pdf: "/menus/turquoise-kitchen-dinner-menu.pdf",
    sections: [
      {
        title: "Starters",
        subtitle: "Please choose one",
        items: [
          cacik,
          houmous,
          babaganush,
          saksuka,
          d("Yaprak Sarma", "Vine leaves stuffed with a mixture of rice, onion and herbs, cooked in olive oil.", ["v"], { note: "Vine Leaves" }),
          beetroot,
          soup,
          liverStarter,
          sigara,
          d("Muska Borek", "Triangular filo pastry filled with minced meat, onions and peppers."),
          d("Houmous Kavurma", "Pan-fried lamb pieces served on a bed of houmous."),
          d("Calamari", "Deep fried crispy squid rings served with tartar sauce."),
          d("Prawns", "Peeled tiger prawns with dill, garlic and tomato sauce."),
          d("Falafel", "Chickpea and vegetable fritters served with houmous, dill, garlic and tomato sauce.", ["v"]),
          d("Halloumi", "Pan fried halloumi cheese.", ["v"]),
          d("Sucuk Grill", "Grilled spicy Turkish sausage.", ["spicy"]),
          d("Garlic Mushroom", "Pan fried sliced mushrooms with butter, double cream, garlic & herbs.", ["v"]),
          d("Halloumi Mushroom", "Sliced mushrooms pan fried with butter, halloumi cheese & herbs.", ["v"]),
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
          d("Mixed Grill", "Marinated cubes of lamb, cubes of chicken and Adana kebab grilled over charcoal."),
          d(
            "Chicken Topkapi",
            "Large chicken thighs stuffed with rice enriched with pine nuts, currants and spices. Baked in the oven with special tomato sauce and butter sauce, served with fries and salad.",
            ["nuts"],
          ),
          cutlets,
          falafel,
          vegMoussaka,
          d(
            "Imam Bayildi",
            "Oven baked aubergine filled with vegetables, topped with tomato sauce and cheese. Served with rice / bulgur and a garnish of salad.",
            ["v"],
          ),
          d("Beef Burger", burgerDesc),
          spChicken,
          spPrawn,
          d("Lasagna", "Oven baked pasta layers with meat sauce, béchamel and parmesan."),
          d(
            "Lamb Beyti",
            "Minced, herbed and spiced lamb cooked on the charcoal grill, wrapped in tortilla bread with mozzarella. Served with homemade tomato sauce, butter sauce, rice / bulgur and yoghurt.",
          ),
          liverMain,
          casserole,
          d(
            "Meat Moussaka",
            "Layered slices of potatoes, courgettes, peppers, mushrooms, aubergines and carrots, topped with minced lamb and béchamel sauce with cheese. Served with rice / bulgur and side salad.",
          ),
          seaBass,
        ],
      },
      {
        title: "Desserts",
        subtitle: "Please choose one",
        items: [d("Baklava", undefined, ["nuts"]), d("Biscoff Cheesecake"), d("Supangle", "Chocolate pudding.", ["nuts"])],
      },
    ],
    serviceNote:
      "A discretionary service charge of 10% will be added to your bill, 12.5% for groups of 8 and above. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
  },
];

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

const lambChicken = (lamb: string, chicken: string): Price[] => [
  { label: "Lamb", price: lamb },
  { label: "Chicken", price: chicken },
];

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
      subtitle: "Served with bread",
      items: [
        p("Mixed Olives", "£6.90", "Mixed green and black olives marinated in herbs and olive oil.", ["vg", "v", "gf"]),
        p("Houmous", "£6.90", "Rich chickpea purée flavoured with cumin, garlic, tahini, lemon & olive oil.", ["vg"]),
        p("Cacik", "£6.90", "Finely chopped cucumber mixed with yoghurt, garlic and olive oil.", ["v", "gf"]),
        p("Babaganush", "£6.90", "Grilled aubergine with tahini, yoghurt, garlic, olive oil and mixed herbs.", ["v"]),
        p("Saksuka", "£6.90", "Fried aubergine, onions, potatoes and mixed peppers cooked in tomato sauce.", ["v", "gf"]),
        p("Yaprak Sarma", "£6.90", "Vine leaves stuffed with a mixture of rice, onion and herbs, cooked in olive oil.", ["v"], { note: "Vine Leaves" }),
        p("Beetroot Salad", "£6.90", "Roasted beetroots grated and mixed with yoghurt, garlic and olive oil.", ["v", "gf"]),
        p("Mixed Cold Meze Platter", "£19.50", "Houmous, Babaganush, Cacik, Saksuka, Beetroot Salad and Yaprak Sarma."),
      ],
    },
    {
      title: "Hot Starters",
      subtitle: "Served with bread",
      note: "Additional bread or homemade dip for £2.50 extra.",
      items: [
        p("Turkish Pita Bread", "£2.50", "Gluten free bread available on request."),
        p("Soup of the Day", "£5.50", "Please ask for today's special soup."),
        p("Houmous Kavurma", "£8.90", "Pan-fried lamb pieces served on a bed of houmous.", ["gf"]),
        p("Sigara Borek", "£7.90", "Pastry filled with feta cheese, spinach & dill, served with sweet chilli sauce.", ["v"], { note: "Pastry Rolls" }),
        p("Halloumi", "£7.90", "Pan fried halloumi cheese.", ["v"]),
        p("Falafel", "£7.90", "Chickpea and vegetable fritters served with houmous.", ["v", "vg"]),
        p("Kuzu Ciger Tava", "£8.50", "Pan fried lamb liver with red onion and parsley."),
        p("Sucuk Grill", "£7.90", "Grilled spicy Turkish sausage.", ["spicy"]),
        p("Sucuk Sauté", "£8.50", "Turkish sausage cooked with pepper, special tomato sauce and garlic.", ["spicy"]),
        p("Garlic Mushroom", "£7.90", "Pan fried sliced mushrooms with butter, double cream, garlic & herbs.", ["v"]),
        p("Calamari", "£8.50", "Deep fried crispy squid rings served with tartar sauce."),
        p("Prawns", "£8.50", "Peeled tiger prawns with dill, garlic and tomato sauce."),
        p("Halloumi Mushroom", "£8.50", "Sliced mushrooms pan fried with butter, halloumi cheese & herbs.", ["v"]),
        p("Muska Borek", "£8.50", "Triangular filo pastry filled with minced meat, onions and peppers."),
        p("Mixed Hot Meze Platter", "£22.50", "Halloumi, Sucuk, Sigara Borek, Falafel and Calamari."),
      ],
    },
    {
      title: "Grills",
      subtitle: "All our kebabs cooked on real charcoal",
      note: "Served with a garnish of salad & rice / bulgur.",
      items: [
        p("Chicken Shish", "£20.95", "Marinated cubes of chicken grilled over charcoal."),
        p("Mixed Shish", "£22.95", "Marinated cubes of lamb and chicken grilled over charcoal."),
        p("Adana", "£20.95", "Spicy minced lamb kebab grilled over charcoal."),
        p("Lamb Shish", "£22.95", "Char-grilled lean, tender lamb skewers."),
        p("Mixed Grill", "£25.95", "Marinated cubes of lamb, cubes of chicken and Adana kebab grilled over charcoal."),
        p("Lamb Ribs", "£21.95", "Charcoal grilled juicy lamb ribs."),
        p("Chicken Wings", "£20.95", "Lightly spiced chicken wings grilled over charcoal."),
        p("Kulbasti", "£20.95", "Tender chicken thighs lightly marinated with herbs, grilled over charcoal."),
      ],
    },
    {
      title: "Chef's Specials",
      note: "Before ordering your food, please speak to a member of staff if you have allergies or want to know more about the ingredients.",
      items: [
        p(
          "Cokertme Kebab",
          "£25.95",
          "Sautéed beef strips marinated with garlic and spices, served on a bed of grated, fried crispy potatoes with yoghurt, hot tomato sauce and butter sauce.",
        ),
        p(
          "Chicken Topkapi",
          "£22.50",
          "Large chicken thighs stuffed with rice enriched with pine nuts, currants and spices. Baked in the oven with special tomato sauce and butter sauce, served with fries and salad.",
          ["nuts"],
        ),
        multi(
          "Lamb / Chicken Sarma Beyti",
          lambChicken("£23.45", "£22.45"),
          "Minced, herbed and spiced lamb / chicken cooked on the charcoal grill, wrapped in tortilla bread with mozzarella cheese. Served with homemade tomato sauce, butter sauce, rice / bulgur and yoghurt.",
        ),
        multi(
          "Lamb / Chicken Shish with Yoghurt Sauce",
          lambChicken("£23.50", "£21.50"),
          "Charcoal grilled cubes of lamb / chicken served on a bed of garlic butter croutons with homemade tomato sauce, butter sauce and yoghurt.",
        ),
        multi(
          "Lamb / Chicken Casserole",
          lambChicken("£23.95", "£21.95"),
          "Cubes of lamb / chicken cooked in tomato sauce with peppers, onion, mushrooms, herbs and spices, served with rice / bulgur.",
        ),
        p("Hunkar Begendi", "£22.50", "Succulent lamb pieces with peppers, tomato, garlic and onions, served on a bed of béchamel sauce with aubergine."),
        p(
          "Meat Moussaka",
          "£22.45",
          "Layered slices of potatoes, courgettes, peppers, mushrooms, aubergines and carrots, topped with minced lamb and béchamel sauce with cheese. Served with rice / bulgur and side salad.",
        ),
        p(
          "Lamb Shank",
          "£23.45",
          "Lamb shank slow cooked with onion, carrots and tomatoes, served with assorted roasted vegetables and potato purée.",
          undefined,
          { note: "Kleftiko - Incik" },
        ),
        p("Kuzu Ciger Tava", "£21.50", "Pan fried lamb liver with red onion and parsley, served with rice / bulgur and a garnish of salad."),
        p(
          "Pideli Kofte",
          "£21.50",
          "Minced lamb kofte pieces grilled on charcoal, served on a bed of garlic butter croutons with special tomato sauce, butter sauce and yoghurt.",
        ),
        p(
          "Turquoise Kofte",
          "£21.50",
          "Spicy minced lamb and beef kofte pieces grilled on charcoal, served on a bed of garlic butter croutons with special tomato sauce, butter sauce, rice and bulgur.",
        ),
      ],
    },
    {
      title: "Seafood",
      items: [
        p("Sea Bass Fillet", "£23.50", "Oven-cooked sea bass fillet served with vegetables.", ["gf"], { note: "Oven-cooked" }),
        p("Sea Bass Fillet", "£23.50", "Seasoned and char-grilled sea bass fillet served with side salad and chunky chips.", ["gf"], { note: "Char-grilled" }),
        p("Salmon", "£23.50", "Pan fried salmon steak served with creamy sauce and vegetables.", ["gf"]),
        p("King Prawn Casserole", "£23.50", "King prawn pieces cooked with vegetables in our special tomato sauce and herbs."),
      ],
    },
    {
      title: "Steaks",
      note: "Served with fries, creamy garlic mushroom sauce and broccoli.",
      items: [
        p("Sirloin Steak", "£26.50", "Delicate flavour balanced with a firmer texture, recommended medium rare.", ["gf"], { note: "10oz" }),
        p("Rib-Eye Steak", "£28.50", "Bursting with flavour and almost as tender as fillet, recommended medium.", ["gf"], { note: "10oz" }),
      ],
    },
    {
      title: "Vegetarians",
      items: [
        p(
          "Vegetarian Moussaka",
          "£18.90",
          "Layers of aubergine, potato, mushrooms, courgettes, onions and tomato topped with béchamel sauce, mozzarella cheese and tomato sauce. Served with rice / bulgur and a garnish of salad.",
          ["v"],
        ),
        p(
          "Imam Bayildi",
          "£18.90",
          "Oven baked aubergine filled with vegetables, topped with tomato sauce and cheese. Served with rice / bulgur and a garnish of salad.",
          ["v"],
        ),
        p("Yaprak Sarma", "£18.90", "Freshly prepared stuffed vine leaves served with yoghurt and a garnish of salad.", ["v"], { note: "Vine Leaves" }),
        p("Falafel", "£18.50", "Chickpea and vegetable fritters served with houmous.", ["v", "gf"]),
      ],
    },
    {
      title: "Salads",
      items: [
        p("Chicken Salad", "£17.50", "Grilled chicken and mixed leaves with mixed salad.", ["gf"]),
        p("Halloumi Salad", "£15.50", "Grilled halloumi with mixed salad.", ["v", "gf"]),
        p("Avocado Salad", "£13.50", "Avocado with tomatoes, red onion, mixed olives, olive oil dressing and green leaves.", ["vg", "v", "gf"]),
        p("Feta Cheese Salad", "£13.50", "Tomato, cucumber, parsley, red onion, olive oil dressing, feta cheese and mixed olives.", ["v", "gf"]),
        p("Coban Salad", "£9.50", "Tomato, cucumber, red onion, parsley and olive oil dressing.", ["v", "gf"]),
      ],
    },
    {
      title: "Side Orders",
      items: [
        p("Grilled Onions", "£3.95", undefined, ["vg", "v", "gf"]),
        p("Strained Yoghurt", "£3.45", undefined, ["v", "gf"]),
        p("Fries", "£3.95", undefined, ["gf"]),
        p("Sautéed Spinach", "£4.00", undefined, ["v", "spicy"]),
        p("Rice / Bulgur", "£3.95", undefined, ["v"]),
        p("Onion Rings", "£3.95"),
      ],
    },
    {
      title: "Kids Meals",
      note: "Served with a garnish of salad & fries.",
      items: [p("Chicken Nuggets", "£9.50"), p("Chicken Wings", "£9.50"), p("Fish Fingers", "£9.50")],
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
        multi("Still Water", water),
        multi("Sparkling Water", water),
        p("Fruit Juices", "£3.50", "Apple, orange, cranberry, mango, pineapple."),
        p("Ayran", "£3.50", "Yoghurt drink."),
        p("Slimline Tonic", "£2.95"),
        p("Soda Water", "£2.95"),
      ],
    },
    {
      title: "White Wines",
      items: [
        multi(
          "Sanvigilio Pinot Grigio",
          glass("£6.25", "£8.50", "£24.50"),
          "Delicate, yet lifted, floral and fruity aromas on the nose. Crisp and fresh on the palate with a ripe lemon character; the wine has a good mouthfeel and clean finish.",
          ["vg"],
          { note: "Italy" },
        ),
        multi(
          "Çankaya",
          glass("£6.50", "£8.75", "£25.50"),
          "This elegant, persistent and well balanced white wine matches perfectly with grilled fish, seafood salads, tomato sauced pastas, grilled chicken and fresh cheeses.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Diren Collection Narince",
          glass("£6.75", "£8.75", "£25.50"),
          "Floral notes, yellow fruit and citrus aromas on the nose. The palate produces a round, medium bodied wine, balanced with good acidity.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "The Listening Station Chardonnay",
          glass("£6.85", "£8.90", "£26.95"),
          "Refreshingly unoaked, citrus and white peach flavours combine with a zesty fresh acidity and a clean, bright and linear mineral finish.",
          undefined,
          { note: "Australia" },
        ),
        multi(
          "Villa Doluca White",
          glass("£7.50", "£9.50", "£28.50"),
          "Hints of yellow flowers (honeysuckle, lily) and Mediterranean macchia make this wine a pleasant and typical every day drinking wine.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Sileni Estates Sauvignon Blanc",
          glass("£7.50", "£10.50", "£31.50"),
          "Peach aromas with a zingy finish. A portion of Semillon has been used in the final blend for additional complexity.",
          ["vg"],
          { note: "New Zealand" },
        ),
        multi(
          "Nuovo Quadro Gavi del Comune di Gavi",
          bottle("£44.50"),
          "Nose of white peach and pear with hints of lime and delicate aromatic notes. The palate is fresh with zesty citrus fruit and ripe stone fruit characters.",
          ["vg"],
          { note: "Italy" },
        ),
        multi(
          "Gurbuz Fume Blanc",
          bottle("£44.25"),
          "Made of Sauvignon Blanc grapes sourced from Gazikoy vineyards, fermented in stainless steel tanks and aged for 8 months in oak barrels. White flowers, ripe stone fruits, smoky and vanilla flavours with peach and apricot notes.",
          undefined,
          { note: "Turkey" },
        ),
      ],
    },
    {
      title: "Red Wines",
      items: [
        multi(
          "Sierra Grand Merlot",
          glass("£6.50", "£8.75", "£25.50"),
          "Aromas of plums and cherries mixed with peppery spice. Juicy and fresh with soft red fruits and a hint of green pepper.",
          ["vg"],
          { note: "Chile" },
        ),
        multi(
          "Yakut",
          glass("£6.85", "£8.90", "£26.50"),
          "Distinctive red wine with rich red fruit aromas, very well balanced with its ripe tannins.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Tesoro de los Andes Malbec",
          glass("£7.50", "£9.75", "£29.50"),
          "Dark fruit character with more savoury overtones, generous and full with a soft rounded finish.",
          ["vg"],
          { note: "Argentina" },
        ),
        multi(
          "Villa Doluca Red",
          glass("£7.50", "£9.75", "£29.50"),
          "Intense nose of dark cherry, plum and blackberry. Some original Mediterranean macchia hints.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Rioja Vendimia Seleccionada",
          bottle("£33.00"),
          "Ripe plum and cherry fruit aromas. Richly flavoured with good fruit dominance and a smoky, spicy dimension.",
          ["vg"],
          { note: "Spain" },
        ),
        multi(
          "Sarafin Shiraz",
          bottle("£37.50"),
          "With a long maceration and oak aged for 12 months, it is powerful, balanced and fruity, invoking aromas of damson plum, raspberry, aromatic coffee and vanilla.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Doluca Kavaklidere Selection",
          bottle("£47.50"),
          "Dried red fruits and spice aromas. Full-bodied with persistent flavours, integrated oak notes and strong ripe tannins.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Gurbuz Cabernet Sauvignon",
          bottle("£44.25"),
          "Flavours of liquorice, vanilla, ripe black fruits, white pepper, coffee beans, plum, raspberry, coconut and roasted hazelnut with earthy notes. Grapes are sourced from Gazikoy vineyards.",
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
          "Delicately scented peachy, floral characters on the nose. Juicy, ripe berry fruit fills the palate with good acidity and an off dry finish.",
          undefined,
          { note: "Italy" },
        ),
        multi(
          "Burlesque White Zinfandel Rosé",
          glass("£6.85", "£8.90", "£26.50"),
          "Luscious strawberry ice cream on the nose supported by a bright, berry fruited palate. Lightly crushed to create a pretty pink wine.",
          undefined,
          { note: "America" },
        ),
        multi(
          "Lâl",
          glass("£6.85", "£8.90", "£26.50"),
          "The popular rosé wine of Turkey, produced from Cal Karasi grapes grown in Denizli. Attractive red fruit aromas, fresh acidity and persistent flavours.",
          undefined,
          { note: "Turkey" },
        ),
      ],
    },
    {
      title: "Champagne & Sparkling Wines",
      items: [
        multi(
          "Prosecco DOC Treviso Brut Ltynera",
          [
            { label: "125ml", price: "£7.20" },
            { label: "Bottle", price: "£31.50" },
          ],
          "A deliciously light and fruity Prosecco with hints of apple and peach on the nose and fresh characters of soft ripe stone fruits.",
          undefined,
          { note: "Veneto, Italy" },
        ),
        multi(
          "Altin Kopuk",
          bottle("£33.50"),
          "A light and refreshing sparkling white wine with a fresh fruit driven style. The first natural sparkling wine of Turkey, produced by \"Méthode de la cuve close\" from Emir grapes grown in the volcanic soil of Cappadocia.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Yasasin Rosé",
          bottle("£45.00"),
          "A pale salmon colour. A fresh, fruity and flowery nose enriched with citrus notes is followed by a palate of fresh apricot and grapefruit.",
          undefined,
          { note: "Turkey" },
        ),
        multi(
          "Moët & Chandon Brut Impérial",
          bottle("£88.00"),
          "Very pale straw colour with small, active bubbles and a subtle suggestion of flowers, vanilla, grapefruit and bread. A light and delicate champagne.",
          undefined,
          { note: "France" },
        ),
      ],
    },
    {
      title: "Cocktails",
      items: [
        p("Rossini", "£10.95", "Strawberry liqueur served with Prosecco."),
        p("Kir Royale", "£10.95", "Crème de cassis with Prosecco and a twist of lemon."),
        p("Bellini", "£10.95", "White peach purée topped with Prosecco."),
        p("Aperol Spritz", "£10.95", "Aperol, soda water, slice of orange and Prosecco."),
        p("Piña Colada", "£10.95", "A tropical blend of rich coconut cream, white rum and tangy pineapple."),
        p("Mojito", "£10.95", "Strawberry, passion fruit, white rum, fresh mint, fresh lime wedges, brown sugar and lemonade, topped with dark rum."),
        p("Espresso Martini", "£10.95", "Espresso, vodka, Kahlúa and sugar syrup."),
        p("Strawberry Daiquiri", "£10.95", "Strawberry purée with rum and lime juice."),
      ],
    },
    {
      title: "Spirits",
      note: "All mixers £1.50.",
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
        p("Budweiser", "£5.50"),
        p("Heineken", "£5.50", undefined, undefined, { note: "Alcohol Free" }),
      ],
    },
    {
      title: "Ciders",
      items: [p("Bulmers", "£6.50", "Original."), p("Kopparberg", "£6.50", "Strawberry & lime, mixed fruits.")],
    },
    {
      title: "Aperitifs",
      subtitle: "50ml",
      items: [p("Campari", "£6.50"), p("Aperol", "£6.50"), p("Pimm's", "£6.50"), p("Martini", "£6.50", "Bianco / Extra Dry / Rosso.")],
    },
    {
      title: "Digestifs & Liqueurs",
      subtitle: "50ml",
      items: [p("Tia Maria", "£6.50"), p("Baileys", "£6.50"), p("Limoncello", "£6.50"), p("Cointreau", "£6.50"), p("Archers", "£6.50")],
    },
    {
      title: "Shots",
      items: [
        p("Archers Schnapps", "£5.50"),
        p("Jägermeister", "£5.50"),
        p("Tequila", "£5.50", "Gold, Silver & Rose."),
        p("Patrón", "£5.50", "Gold, Black."),
        p("Sambuca", "£5.50", "Multiple flavours."),
      ],
    },
  ],
  serviceNote: "All prices are subject to change without prior notice.",
};
