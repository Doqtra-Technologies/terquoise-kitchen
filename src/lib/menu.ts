export type Tag = "v" | "vg" | "spicy" | "gluten" | "nuts";

export type Dish = { name: string; note?: string; desc?: string; tags?: Tag[]; price?: string };

export type MenuSection = { title: string; subtitle?: string; items: Dish[] };

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
          d("Beef Burger", burgerDesc, undefined, { note: "6oz" }),
          spChicken,
          spPrawn,
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
      "A discretionary service charge of 10% will be added to your bill. All prices include VAT at the current rate. All prices are subject to change without prior notice.",
  },
];
