export type Tag = "v" | "vg" | "spicy" | "gluten" | "nuts";

export type Price = { label: string; price: string };

export type Dish = { name: string; note?: string; desc?: string; tags?: Tag[]; price?: string; prices?: Price[] };

export type MenuSection = { title: string; subtitle?: string; footnote?: string; items: Dish[] };

export type Menu = {
  slug: string;
  name: string;
  served: string;
  courses?: string;
  price?: string;
  pdf: string;
  sections: MenuSection[];
  extras?: { title: string; price: string; items: string[] };
  serviceNote: string;
};

export type SetMenu = Menu & { courses: string; price: string };

export const tagLabels: Record<Tag, string> = {
  v: "Suitable for vegetarians",
  vg: "Suitable for vegans",
  spicy: "Contains spicy",
  gluten: "Gluten free",
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

const serviceNote =
  "A discretionary service charge of 10% will be added to your bill, 12.5% for groups of 8 and above. All prices include VAT at the current rate. All prices are subject to change without prior notice.";

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
    serviceNote,
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
    serviceNote,
  },
];

const pr = (price: string) => ({ price });
const lambChicken = (lamb: string, chicken: string) => ({
  prices: [
    { label: "Lamb", price: lamb },
    { label: "Chicken", price: chicken },
  ],
});
const glass = (small: string | null, large: string | null, bottle: string) => ({
  prices: [
    ...(small ? [{ label: "175ml", price: small }] : []),
    ...(large ? [{ label: "250ml", price: large }] : []),
    { label: "Bottle", price: bottle },
  ],
});
const shot = (single: string, double: string) => ({
  prices: [
    { label: "25ml", price: single },
    { label: "50ml", price: double },
  ],
});
const pint = (half: string, full: string) => ({
  prices: [
    { label: "285ml", price: half },
    { label: "568ml", price: full },
  ],
});
const water = { prices: [{ label: "Small", price: "£2.95" }, { label: "Large", price: "£3.95" }] };

export const aLaCarte: Menu = {
  slug: "a-la-carte",
  name: "À La Carte",
  served: "Served daily",
  pdf: "/menus/turquoise-kitchen-a-la-carte-menu.pdf",
  sections: [
    {
      title: "Cold Starters",
      subtitle: "Served with bread",
      items: [
        d("Mixed Olives", "Mix of green and black olives marinated in herbs and olive oil.", ["vg", "v", "gluten"], pr("£6.90")),
        d("Houmous", "Rich chickpea purée flavoured with cumin, garlic, tahini, lemon & olive oil.", ["vg"], pr("£6.90")),
        d("Cacik", "Finely chopped cucumber mixed with yoghurt, garlic and olive oil.", ["v", "gluten"], pr("£6.90")),
        d("Babaganush", "Grilled aubergine with tahini, yoghurt, garlic, olive oil and mixed herbs.", ["v"], pr("£6.90")),
        d("Saksuka", "Fried aubergine, onions, potatoes and mixed peppers cooked in tomato sauce.", ["v", "gluten"], pr("£6.90")),
        d("Yaprak Sarma", "Vine leaves stuffed with a mixture of rice, onion and herbs, cooked in olive oil.", ["v"], { note: "Vine Leaves", price: "£6.90" }),
        d("Beetroot Salad", "Roasted beetroots grated and mixed with yoghurt, garlic and olive oil.", ["v", "gluten"], pr("£6.90")),
        d("Mixed Cold Meze Platter", "Houmous, babaganush, cacik, saksuka, beetroot salad and yaprak sarma.", undefined, pr("£19.50")),
      ],
    },
    {
      title: "Hot Starters",
      subtitle: "Served with bread",
      footnote: "Additional bread or homemade dip £2.50 extra.",
      items: [
        d("Turkish Pita Bread", "Gluten free bread available on request.", undefined, pr("£2.50")),
        d("Soup of the Day", "Please ask for today's special soup.", undefined, pr("£5.50")),
        d("Houmous Kavurma", "Pan-fried lamb pieces served on a bed of houmous.", ["gluten"], pr("£8.90")),
        d("Sigara Borek", "Pastry filled with feta cheese, spinach & dill, served with sweet chilli sauce.", ["v"], { note: "Pastry Rolls", price: "£7.90" }),
        d("Halloumi", "Pan fried halloumi cheese.", ["v"], pr("£7.90")),
        d("Falafel", "Chickpea and vegetable fritters served with houmous.", ["v", "vg"], pr("£7.90")),
        d("Kuzu Ciger Tava", "Pan fried lamb liver with red onion and parsley.", undefined, pr("£8.50")),
        d("Sucuk Grill", "Grilled spicy Turkish sausage.", ["spicy"], pr("£7.90")),
        d("Sucuk Sauté", "Turkish sausage cooked with pepper, special tomato sauce and garlic.", ["spicy"], pr("£8.50")),
        d("Garlic Mushroom", "Pan fried sliced mushrooms with butter, double cream, garlic & herbs.", ["v"], pr("£7.90")),
        d("Calamari", "Deep fried crispy squid rings served with tartar sauce.", undefined, pr("£8.50")),
        d("Prawns", "Peeled tiger prawns with dill, garlic and tomato sauce.", undefined, pr("£8.50")),
        d("Halloumi Mushroom", "Sliced mushrooms pan fried with butter, halloumi cheese & herbs.", ["v"], pr("£8.50")),
        d("Muska Borek", "Triangular filo pastry filled with minced meat, onions and peppers.", undefined, pr("£8.50")),
        d("Mixed Hot Meze Platter", "Halloumi, sucuk, sigara borek, falafel and calamari.", undefined, pr("£22.50")),
      ],
    },
    {
      title: "Grills",
      subtitle: "Served with salad & rice / bulgur, cooked on real charcoal",
      items: [
        d("Chicken Shish", "Marinated cubes of chicken grilled over charcoal.", undefined, pr("£20.95")),
        d("Mixed Shish", "Marinated cubes of lamb and chicken grilled over charcoal.", undefined, pr("£22.95")),
        d("Adana", "Spicy minced lamb kebab grilled over charcoal.", undefined, pr("£20.95")),
        d("Lamb Shish", "Char-grilled lean tender lamb skewers.", undefined, pr("£22.95")),
        d("Mixed Grill", "Marinated cubes of lamb, cubes of chicken and Adana kebab grilled over charcoal.", undefined, pr("£25.95")),
        d("Lamb Ribs", "Charcoal grilled juicy lamb ribs.", undefined, pr("£21.95")),
        d("Chicken Wings", "Lightly spiced chicken wings grilled over charcoal.", undefined, pr("£20.95")),
        d("Kulbasti", "Tender chicken thighs lightly marinated with herbs, grilled over charcoal.", undefined, pr("£20.95")),
      ],
    },
    {
      title: "Chef's Specials",
      footnote: "Before ordering, please speak to a member of staff if you have allergies or want to know more about the ingredients.",
      items: [
        d(
          "Cokertme Kebab",
          "Sautéed beef strips marinated with garlic and spices, served on a bed of grated crispy fried potatoes with yoghurt, hot tomato sauce and butter sauce.",
          undefined,
          pr("£25.95"),
        ),
        d(
          "Chicken Topkapi",
          "Large chicken thighs stuffed with rice enriched with pine nuts, currants and spices. Baked in the oven with special tomato sauce and butter sauce, served with fries and salad.",
          ["nuts"],
          pr("£22.50"),
        ),
        d(
          "Lamb / Chicken Sarma Beyti",
          "Minced, herbed and spiced lamb or chicken cooked on the charcoal grill, wrapped in tortilla bread with mozzarella. Served with homemade tomato sauce, butter sauce, rice / bulgur and yoghurt.",
          undefined,
          lambChicken("£23.45", "£22.45"),
        ),
        d(
          "Lamb / Chicken Shish with Yoghurt Sauce",
          "Charcoal grilled cubes of lamb or chicken on a bed of garlic butter croutons, served with homemade tomato sauce, butter sauce and yoghurt.",
          undefined,
          lambChicken("£23.50", "£21.50"),
        ),
        d(
          "Lamb / Chicken Casserole",
          "Cubes of lamb or chicken cooked in tomato sauce with peppers, onion, mushrooms, herbs and spices, served with rice / bulgur.",
          undefined,
          lambChicken("£23.95", "£21.95"),
        ),
        d(
          "Hunkar Begendi",
          "Succulent lamb pieces with peppers, tomato, garlic and onions on a bed of béchamel sauce with aubergine.",
          undefined,
          pr("£22.50"),
        ),
        d(
          "Meat Moussaka",
          "Layered slices of potatoes, courgettes, peppers, mushrooms, aubergines and carrots, topped with minced lamb and béchamel sauce with cheese. Served with rice / bulgur and side salad.",
          undefined,
          pr("£22.45"),
        ),
        d(
          "Lamb Shank",
          "Lamb shank slow cooked with onion, carrots and tomatoes, served with assorted roasted vegetables and potato purée.",
          undefined,
          { note: "Kleftiko - Incik", price: "£23.45" },
        ),
        d(
          "Kuzu Ciger Tava",
          "Pan fried lamb liver with red onion and parsley, served with rice / bulgur and a garnish of salad.",
          undefined,
          pr("£21.50"),
        ),
        d(
          "Pideli Kofte",
          "Minced lamb kofte pieces grilled on charcoal, served on a bed of garlic butter croutons with special tomato sauce, butter sauce and yoghurt.",
          undefined,
          pr("£21.50"),
        ),
        { ...kofte, price: "£21.50" },
      ],
    },
    {
      title: "Seafood",
      items: [
        d("Sea Bass Fillet", "Oven-cooked sea bass fillet served with vegetables.", ["gluten"], { note: "Oven-cooked", price: "£23.50" }),
        d("Sea Bass Fillet", "Seasoned and char-grilled sea bass fillet served with side salad and chunky chips.", ["gluten"], { note: "Char-grilled", price: "£23.50" }),
        d("Salmon", "Pan fried salmon steak served with creamy sauce and vegetables.", ["gluten"], pr("£23.50")),
        d("King Prawn Casserole", "King prawn pieces cooked with vegetables in our special tomato sauce and herbs.", undefined, pr("£23.50")),
      ],
    },
    {
      title: "Steaks",
      subtitle: "Served with fries, creamy garlic mushroom sauce and broccoli",
      items: [
        d("Sirloin Steak", "Delicate flavour balanced with a firmer texture, recommended medium rare.", ["gluten"], { note: "10oz", price: "£26.50" }),
        d("Rib-Eye Steak", "Bursting with flavour and almost as tender as fillet, recommended medium.", ["gluten"], { note: "10oz", price: "£28.50" }),
      ],
    },
    {
      title: "Vegetarians",
      items: [
        d(
          "Vegetarian Moussaka",
          "Layers of aubergine, potato, mushrooms, courgettes, onions and tomato topped with béchamel sauce, mozzarella and tomato sauce. Served with rice / bulgur and a garnish of salad.",
          ["v"],
          pr("£18.90"),
        ),
        d(
          "Imam Bayildi",
          "Oven baked aubergine filled with vegetables, topped with tomato sauce and cheese. Served with rice / bulgur and a garnish of salad.",
          ["v"],
          pr("£18.90"),
        ),
        d("Yaprak Sarma", "Freshly prepared stuffed vine leaves served with yoghurt and a garnish of salad.", ["v"], { note: "Vine Leaves", price: "£18.90" }),
        d("Falafel", "Chickpea and vegetable fritters served with houmous.", ["v", "gluten"], pr("£18.50")),
      ],
    },
    {
      title: "Salads",
      items: [
        d("Chicken Salad", "Grilled chicken with mixed leaves and mixed salad.", ["gluten"], pr("£17.50")),
        d("Halloumi Salad", "Grilled halloumi with mixed salad.", ["v", "gluten"], pr("£15.50")),
        d("Avocado Salad", "Avocado with tomatoes, red onion, mixed olives, olive oil dressing and green leaves.", ["vg", "v", "gluten"], pr("£13.50")),
        d("Feta Cheese Salad", "Tomato, cucumber, parsley, red onion, olive oil dressing, feta cheese and mixed olives.", ["v", "gluten"], pr("£13.50")),
        d("Coban Salad", "Tomato, cucumber, red onion, parsley and olive oil dressing.", ["v", "gluten"], pr("£9.50")),
      ],
    },
    {
      title: "Side Orders",
      items: [
        d("Grilled Onions", undefined, ["vg", "v", "gluten"], pr("£3.95")),
        d("Strained Yoghurt", undefined, ["v", "gluten"], pr("£3.45")),
        d("Fries", undefined, ["gluten"], pr("£3.95")),
        d("Sautéed Spinach", undefined, ["v", "spicy"], pr("£4.00")),
        d("Rice / Bulgur", undefined, ["v"], pr("£3.95")),
        d("Onion Rings", undefined, undefined, pr("£3.95")),
      ],
    },
    {
      title: "Kids Meals",
      subtitle: "Served with salad & fries",
      items: [
        d("Chicken Nuggets", undefined, undefined, pr("£9.50")),
        d("Chicken Wings", undefined, undefined, pr("£9.50")),
        d("Fish Fingers", undefined, undefined, pr("£9.50")),
      ],
    },
  ],
  serviceNote,
};

export const drinksMenu: Menu = {
  slug: "drinks",
  name: "Drinks",
  served: "Wines, cocktails, beers & soft drinks",
  pdf: "/menus/turquoise-kitchen-drinks-menu.pdf",
  sections: [
    {
      title: "White Wines",
      items: [
        d("Sanvigilio Pinot Grigio", "Italy (vegan). Delicate yet lifted, floral and fruity aromas. Crisp and fresh on the palate with a ripe lemon character and a clean finish.", undefined, glass("£6.25", "£8.50", "£24.50")),
        d("Cankaya", "Turkey. Elegant, persistent and well balanced; perfect with grilled fish, seafood salads, tomato sauced pastas, grilled chicken and fresh cheeses.", undefined, glass("£6.50", "£8.75", "£25.50")),
        d("Diren Collection Narince", "Turkey. Floral notes, yellow fruit and citrus aromas. A round, medium bodied wine balanced with good acidity.", undefined, glass("£6.75", "£8.75", "£25.50")),
        d("The Listening Station Chardonnay", "Australia. Refreshingly unoaked; citrus and white peach with zesty fresh acidity and a clean, bright mineral finish.", undefined, glass("£6.85", "£8.90", "£26.95")),
        d("Villa Doluca White", "Turkey. Hints of yellow flowers (honeysuckle, lily) and Mediterranean macchia; a pleasant everyday drinking wine.", undefined, glass("£7.50", "£9.50", "£28.50")),
        d("Sileni Estates Sauvignon Blanc", "New Zealand (vegan). Peach aromas with a zingy finish; a portion of Semillon adds complexity.", undefined, glass("£7.50", "£10.50", "£31.50")),
        d("Nuovo Quadro Gavi del Comune di Gavi", "Italy (vegan). White peach and pear with hints of lime. Fresh, zesty citrus and ripe stone fruit on the palate.", undefined, glass(null, null, "£44.50")),
        d("Gurbuz Fume Blanc", "Turkey. Sauvignon Blanc from Gazikoy vineyards, aged 8 months in oak. White flowers, ripe stone fruit, smoky vanilla, peach and apricot.", undefined, glass(null, null, "£44.25")),
      ],
    },
    {
      title: "Red Wines",
      items: [
        d("Sierra Grand Merlot", "Chile (vegan). Plums and cherries with peppery spice. Juicy and fresh with soft red fruits and a hint of green pepper.", undefined, glass("£6.50", "£8.75", "£25.50")),
        d("Yakut", "Turkey. Distinctive red with rich red fruit aromas, well balanced with ripe tannins.", undefined, glass("£6.85", "£8.90", "£26.50")),
        d("Tesoro de los Andes Malbec", "Argentina (vegan). Dark fruit with savoury overtones, generous and full with a soft rounded finish.", undefined, glass("£7.50", "£9.75", "£29.50")),
        d("Villa Doluca Red", "Turkey. Intense nose of dark cherry, plum and blackberry with Mediterranean macchia hints.", undefined, glass("£7.50", "£9.75", "£29.50")),
        d("Rioja Vendimia Seleccionada", "Spain (vegan). Ripe plum and cherry, richly flavoured with a smoky, spicy dimension.", undefined, glass(null, null, "£33.00")),
        d("Sarafin Shiraz", "Turkey. Oak aged for 12 months; powerful, balanced and fruity with damson plum, raspberry, coffee and vanilla.", undefined, glass(null, null, "£37.50")),
        d("Doluca Kavaklidere Selection", "Turkey. Dried red fruits and spice. Full-bodied with integrated oak and strong ripe tannins.", undefined, glass(null, null, "£47.50")),
        d("Gurbuz Cabernet Sauvignon", "Turkey. Liquorice, vanilla, ripe black fruits, white pepper, coffee, plum and roasted hazelnut. From Gazikoy vineyards.", undefined, glass(null, null, "£44.25")),
      ],
    },
    {
      title: "Rosé Wines",
      items: [
        d("Sanvigilio Pinot Grigio Rosé", "Italy. Delicately scented peachy, floral nose; juicy ripe berry fruit with good acidity and an off-dry finish.", undefined, glass("£6.50", "£8.75", "£25.50")),
        d("Burlesque White Zinfandel Rosé", "America. Luscious strawberry nose with a bright, berry fruited palate.", undefined, glass("£6.85", "£8.90", "£26.50")),
        d("Lâl", "Turkey. The popular rosé of Turkey, from Cal Karasi grapes grown in Denizli. Red fruit aromas, fresh acidity and persistent flavours.", undefined, glass("£6.85", "£8.90", "£26.50")),
      ],
    },
    {
      title: "Champagne & Sparkling",
      items: [
        d("Prosecco DOC Treviso Brut", "Italy. Light and fruity with hints of apple and peach and soft ripe stone fruits.", undefined, {
          prices: [
            { label: "125ml", price: "£7.20" },
            { label: "Bottle", price: "£31.50" },
          ],
        }),
        d("Altin Kopuk", "Turkey. Light, refreshing sparkling white from Emir grapes grown in the volcanic soil of Cappadocia.", undefined, glass(null, null, "£33.50")),
        d("Yasasin Rosé", "Turkey. Pale salmon colour; fresh, fruity and flowery with citrus, apricot and grapefruit.", undefined, glass(null, null, "£45.00")),
        d("Moët & Chandon Brut Imperial", "France. Pale straw with small, active bubbles and subtle notes of flowers, vanilla, grapefruit and bread.", undefined, glass(null, null, "£88.00")),
      ],
    },
    {
      title: "Cocktails",
      items: [
        d("Rossini", "Strawberry liqueur served with Prosecco.", undefined, pr("£10.95")),
        d("Kir Royale", "Crème de cassis with Prosecco and a twist of lemon.", undefined, pr("£10.95")),
        d("Bellini", "White peach purée topped with Prosecco.", undefined, pr("£10.95")),
        d("Aperol Spritz", "Aperol, soda water, slice of orange and Prosecco.", undefined, pr("£10.95")),
        d("Piña Colada", "A tropical blend of rich coconut cream, white rum and tangy pineapple.", undefined, pr("£10.95")),
        d("Mojito", "Strawberry, passion fruit, white rum, fresh mint, lime wedges, brown sugar and lemonade, topped with dark rum.", undefined, pr("£10.95")),
        d("Espresso Martini", "Espresso, vodka, Kahlúa and sugar syrup.", undefined, pr("£10.95")),
        d("Strawberry Daiquiri", "Strawberry purée with rum and lime juice.", undefined, pr("£10.95")),
      ],
    },
    {
      title: "Spirits",
      footnote: "All mixers £1.50.",
      items: [
        d("Smirnoff", undefined, undefined, shot("£5.50", "£7.50")),
        d("Absolut", undefined, undefined, shot("£5.50", "£7.50")),
        d("Gordon's", undefined, undefined, shot("£5.50", "£7.50")),
        d("Bombay", undefined, undefined, shot("£5.50", "£7.50")),
        d("Bacardi", undefined, undefined, shot("£5.50", "£7.50")),
        d("Havana 3", undefined, undefined, shot("£5.50", "£7.50")),
        d("Captain Morgan", undefined, undefined, shot("£5.50", "£7.50")),
        d("Bell's", undefined, undefined, shot("£5.50", "£7.50")),
        d("Jack Daniel's", undefined, undefined, shot("£6.50", "£8.00")),
        d("Jameson", undefined, undefined, shot("£5.50", "£7.50")),
        d("Turkish Raki", undefined, undefined, {
          prices: [
            { label: "50ml", price: "£7.00" },
            { label: "35cl", price: "£40.00" },
            { label: "70cl", price: "£70.00" },
          ],
        }),
      ],
    },
    {
      title: "Beers & Ciders",
      items: [
        d("Efes Draft", undefined, undefined, pint("£4.95", "£6.85")),
        d("Peroni Draft", undefined, undefined, pint("£4.95", "£6.85")),
        d("Peroni", undefined, undefined, pr("£5.50")),
        d("Corona", undefined, undefined, pr("£5.50")),
        d("Budweiser", undefined, undefined, pr("£5.50")),
        d("Heineken", undefined, undefined, { note: "Alcohol free", price: "£5.50" }),
        d("Bulmers", "Original.", undefined, pr("£6.50")),
        d("Kopparberg", "Strawberry & lime, mixed fruits.", undefined, pr("£6.50")),
      ],
    },
    {
      title: "Aperitifs & Liqueurs",
      subtitle: "50ml",
      items: [
        d("Campari", undefined, undefined, pr("£6.50")),
        d("Aperol", undefined, undefined, pr("£6.50")),
        d("Pimm's", undefined, undefined, pr("£6.50")),
        d("Martini", "Bianco / Extra Dry / Rosso.", undefined, pr("£6.50")),
        d("Tia Maria", undefined, undefined, pr("£6.50")),
        d("Baileys", undefined, undefined, pr("£6.50")),
        d("Limoncello", undefined, undefined, pr("£6.50")),
        d("Cointreau", undefined, undefined, pr("£6.50")),
        d("Archers", undefined, undefined, pr("£6.50")),
      ],
    },
    {
      title: "Shots",
      items: [
        d("Archers Schnapps", undefined, undefined, pr("£5.50")),
        d("Jägermeister", undefined, undefined, pr("£5.50")),
        d("Tequila", "Gold, silver & rosé.", undefined, pr("£5.50")),
        d("Patrón", "Gold, black.", undefined, pr("£5.50")),
        d("Sambuca", "Multiple flavours.", undefined, pr("£5.50")),
      ],
    },
    {
      title: "Soft Drinks",
      items: [
        d("Coke / Diet Coke / Sprite / Fanta", undefined, undefined, { note: "330ml", price: "£3.50" }),
        d("Still Water", undefined, undefined, water),
        d("Sparkling Water", undefined, undefined, water),
        d("Fruit Juices", "Apple, orange, cranberry, mango, pineapple.", undefined, pr("£3.50")),
        d("Ayran", "Yoghurt drink.", undefined, pr("£3.50")),
        d("Slimline Tonic", undefined, undefined, pr("£2.95")),
        d("Soda Water", undefined, undefined, pr("£2.95")),
      ],
    },
  ],
  serviceNote: "All prices include VAT at the current rate. All prices are subject to change without prior notice.",
};

// Order shown on the menu page.
export const menus: Menu[] = [aLaCarte, ...setMenus, drinksMenu];
