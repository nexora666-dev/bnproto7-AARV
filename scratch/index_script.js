/* ═══════════════════════════════
   MENU DATA
═══════════════════════════════ */
let D=[
  {
    id: "make-to-order",
    name: "MAKE TO ORDER",
    sub: "Signature Sharing Portions",
    ico: "i-biryani",
    count: "Made to Order",
    feat: true,
    kind: "hero",
    item: {name:"Mutton Raan Biryani (with Potatoes) 1 Kg",note:"Serves 6–8 Guests",price:"₹4,400",d:"nv",desc:"Signature 1 Kg Mutton Raan Biryani served with potatoes, special gravy (750ml), raita (750ml), tandoori salad, lemon, chutney & 4 cold drinks.",tags:["Gravy 750ml","Raita 750ml","Tandoori Salad","4 Cold Drinks"]}
  },
  {
    id: "irani-special",
    name: "IRANI SPECIAL",
    sub: "Traditional Persian Specialties",
    ico: "i-irani",
    count: "4 Items",
    rows: [
      {n:"Irani Mutton Koobideh Kebab with Rice (3 pcs)",p:"₹655",d:"nv",desc:"Traditional Persian-style saffron butter rice served with 3 skewers of juicy mutton Koobideh and a flame-grilled tomato."},
      {n:"Chicken Irani Jujeh Kebab with Rice (8 pcs)",p:"₹620",d:"nv",desc:"Our signature Jujeh Kebab served over fragrant saffron basmati rice with grilled lime."},
      {n:"Irani Mutton Koobideh Kebab (4 pcs)",p:"₹600",d:"nv",desc:"Minced mutton marinated with saffron, onion & traditional Persian spices, flame-grilled on flat skewers."},
      {n:"Chicken Irani Jujeh Kebab (8 pcs)",p:"₹530",d:"nv",desc:"Saffron-marinated chicken skewers, grilled over charcoal with smoked lime and charred tomatoes."}
    ]
  },
  {
    id: "blue-nile-chicken-platters",
    name: "BLUE NILE CHICKEN PLATTERS",
    sub: "Royal Sharing Feasts",
    ico: "i-chicken",
    count: "3 Items",
    rows: [
      {n:"Blue Nile Special Platter (6–8 Persons)",p:"₹2,365",d:"nv",desc:"The crown jewel of our kitchen — a feast of 4 pcs Chicken Tikka, 4 pcs Chicken Reshmi, 2 pcs Mutton Seekh Kebab, 2 pcs Chicken Seekh Kebab, 4 pcs Prawns Fry, and 2 pcs Fish Fry."},
      {n:"Blue Nile Chicken Platter (4–6 Persons)",p:"₹1,620",d:"nv",desc:"A grand spread of tandoori favourites: 4 pcs Chicken Tikka, 4 pcs Chicken Reshmi Kebab, 2 pcs Chicken Seekh Kebab, 4 pcs Chicken Pahadi Kebab, and 4 pcs Chicken Malai Tikka."},
      {n:"Blue Nile Chicken Platter (2–4 Persons)",p:"₹895",d:"nv",desc:"A sharing platter for 2–4 guests: 2 pcs Chicken Tikka, 2 pcs Chicken Reshmi Kebab, 1 pc Chicken Seekh Kebab, 2 pcs Chicken Malai Tikka, and 2 pcs Chicken Pahadi Kebab."}
    ]
  },
  {
    id: "tandoori-kebabs",
    name: "TANDOORI AND KEBABS",
    sub: "Clay Oven Charcoal Delicacies",
    ico: "i-tandoori",
    count: "14 Items",
    rows: [
      {n:"Rotisserie Chicken (Full) (4 pcs)",p:"₹605",d:"nv",desc:"Succulent whole chicken slowly roasted on a spinning rotisserie, infused with Mediterranean herbs and spices."},
      {n:"Tandoori Chicken (Full) (4 pcs)",p:"₹605",d:"nv",desc:"Classic spiced whole chicken roasted in clay tandoor."},
      {n:"Mutton Seekh Kebab (4 pcs)",p:"₹585",d:"nv",desc:"Spiced minced mutton skewered and charred over open coals."},
      {n:"Chicken Malai Tikka (8 pcs)",p:"₹505",d:"nv",desc:"Tender chicken chunks marinated in cream, cheese & subtle cardamom."},
      {n:"Chicken Pahadi Kebab (8 pcs)",p:"₹505",d:"nv",desc:"Chicken marinated in fresh mint, coriander & green chilli paste."},
      {n:"Chicken Seekh Kebab (4 pcs)",p:"₹500",d:"nv",desc:"Minced chicken kebabs seasoned with fresh herbs."},
      {n:"Chicken Tikka (8 pcs)",p:"₹500",d:"nv",desc:"Classic red tikka marinated in spiced yoghurt and grilled."},
      {n:"Reshmi Kebab (8 pcs)",p:"₹500",d:"nv",desc:"Silky soft chicken kebabs with cashew paste and egg white glaze."},
      {n:"Special Tangdi Kebab (2 pcs)",p:"₹495",d:"nv",desc:"Stuffed chicken drumsticks roasted in tandoori spices."},
      {n:"Chicken Wings (8 pcs)",p:"₹455",d:"nv",desc:"Crispy tandoori style chicken wings."},
      {n:"Paneer Pahadi Tikka (6 pcs)",p:"₹450",d:"v",desc:"Cottage cheese marinated in fresh herb marinade and grilled."},
      {n:"Paneer Tikka (6 pcs)",p:"₹450",d:"v",desc:"Paneer cubes marinated in spiced yoghurt and tandoori mix."},
      {n:"Rotisserie Chicken (Half)",p:"₹440",d:"nv",desc:"Half rotisserie chicken roasted to golden perfection."},
      {n:"Tandoori Chicken (Half)",p:"₹440",d:"nv",desc:"Half tandoori chicken grilled in clay oven."}
    ]
  },
  {
    id: "chicken",
    name: "CHICKEN",
    sub: "Rich Gravies & Curries",
    ico: "i-chicken",
    count: "9 Items",
    rows: [
      {n:"Blue Nile Chicken",p:"₹560",d:"nv",desc:"Our house-special rich gravy chicken prepared with secret royal spices."},
      {n:"Butter Chicken Boneless",p:"₹555",d:"nv",desc:"Tender boneless chicken in buttery velvet tomato gravy."},
      {n:"Chicken Chilly Fry",p:"₹555",d:"nv",desc:"Spicy sauteed chicken chunks with onions, green chillies & pepper."},
      {n:"Chicken Kolhapuri",p:"₹555",d:"nv",desc:"Fiery Kolhapuri spiced chicken curry."},
      {n:"Chicken Masala",p:"₹555",d:"nv",desc:"Thick onion-tomato spiced gravy chicken."},
      {n:"Chicken Saagwala",p:"₹555",d:"nv",desc:"Chicken cooked in fresh spinach puree and spices."},
      {n:"Chicken Tikka Masala",p:"₹555",d:"nv",desc:"Roasted chicken tikka simmered in rich tomato gravy."},
      {n:"Chicken Kheema",p:"₹465",d:"nv",desc:"Minced chicken cooked with peas and aromatic spices."},
      {n:"Gravy",p:"₹215",d:"nv",desc:"Side bowl of signature rich curry gravy."}
    ]
  },
  {
    id: "fish-prawns",
    name: "FISH AND PRAWNS",
    sub: "Seafood Specialties",
    ico: "i-fish",
    count: "5 Items",
    rows: [
      {n:"Tandoori Fish Pomfret (Full)",p:"₹610",d:"nv",desc:"Fresh, handpicked whole Pomfret fish marinated in robust tandoori spices and charred perfectly in the clay tandoor."},
      {n:"Fish Fry with Chips",p:"₹610",d:"nv",desc:"Crispy fried fish served with seasoned potato chips and dipping sauce."},
      {n:"Fish Masala",p:"₹610",d:"nv",desc:"Fish cooked in aromatic tomato-onion gravy with Indian spices."},
      {n:"Prawns Fry with Chips",p:"₹610",d:"nv",desc:"Crispy golden fried prawns served with potato chips."},
      {n:"Prawns Masala",p:"₹610",d:"nv",desc:"Prawns cooked in a semi-dry spiced masala gravy."}
    ]
  },
  {
    id: "mutton",
    name: "MUTTON",
    sub: "Rich Mutton Curries & Delicacies",
    ico: "i-irani",
    count: "8 Items",
    rows: [
      {n:"Blue Nile Mutton",p:"₹650",d:"nv",desc:"Signature rich mutton curry slow-cooked with house special Persian and Indian spices."},
      {n:"Mutton Kheema",p:"₹605",d:"nv",desc:"Fresh minced mutton cooked with onions, garlic, and ground spices."},
      {n:"Mutton Chilly Fry (Dry / Gravy)",p:"₹595",d:"nv",desc:"Mutton pieces sautéed with green chillies, onions, and spices."},
      {n:"Mutton Kolhapuri",p:"₹595",d:"nv",desc:"Fiery Kolhapuri-style mutton cooked with dry roasted spices and grated coconut."},
      {n:"Mutton Masala",p:"₹595",d:"nv",desc:"Traditional mutton curry in a slow-cooked onion-tomato gravy."},
      {n:"Mutton Dal",p:"₹590",d:"nv",desc:"Tender mutton pieces cooked with yellow split lentils and tempered spices."},
      {n:"Mutton Saagwala",p:"₹590",d:"nv",desc:"Mutton pieces cooked in a spiced and creamy spinach gravy."},
      {n:"Mutton Paya Masala",p:"₹500",d:"nv",desc:"Slow-simmered paya (trotters) gravy with rich traditional seasonings."}
    ]
  },
  {
    id: "brain-eggs",
    name: "BRAIN AND EGGS",
    sub: "Traditional Egg & Brain Dishes",
    ico: "i-brain",
    count: "5 Items",
    rows: [
      {n:"Brain Fry (Dry)",p:"₹440",d:"nv",desc:"Spiced brain fry sautéed dry with onions, green chillies, and fresh herbs."},
      {n:"Brain Fry (Semi Gravy)",p:"₹440",d:"nv",desc:"Brain fry cooked in a semi-gravy with onion-tomato masala."},
      {n:"Brain Masala",p:"₹440",d:"nv",desc:"Brain cooked in a rich and spicy traditional onion-tomato gravy."},
      {n:"Egg Masala",p:"₹405",d:"nv",desc:"Boiled eggs simmered in a spiced tomato-onion curry."},
      {n:"Boiled Eggs",p:"₹66",d:"nv",desc:"Freshly boiled eggs, served plain or with pepper salt."}
    ]
  },
  {
    id: "rice",
    name: "RICE",
    sub: "Aromatic Rice & Biryanis",
    ico: "i-biryani",
    count: "16 Items",
    rows: [
      {n:"Mutton Chelo Kebab (Mild-spicy) + Pepsi",p:"₹625",d:"nv",desc:"Tender mutton kebabs served over saffron butter rice, accompanied by a Pepsi."},
      {n:"Fish Pulav",p:"₹610",d:"nv",desc:"Fragrant basmati rice cooked with fish pieces and light spices."},
      {n:"Prawns Pulav",p:"₹610",d:"nv",desc:"Spiced pulao rice cooked with juicy fresh prawns."},
      {n:"Mutton Biryani / Pulav",p:"₹605",d:"nv",desc:"Classic mutton biryani layered with long-grain basmati and spices."},
      {n:"Chicken Tikka Biryani (Boneless)",p:"₹600",d:"nv",desc:"Boneless chicken tikka cooked in spices and layered with basmati rice."},
      {n:"Mutton Biryani Irani Style (Non-spicy)",p:"₹600",d:"nv",desc:"Traditional Irani-style non-spicy mutton biryani with saffron."},
      {n:"Chelo Murg (6 Chicken Tikka with Rice) + Pepsi",p:"₹590",d:"nv",desc:"6 pieces of chicken tikka served with saffron butter rice and a Pepsi."},
      {n:"Chicken Biryani / Pulav",p:"₹565",d:"nv",desc:"Classic spiced chicken biryani cooked to perfection."},
      {n:"Chicken Biryani Irani Style (Non-spicy)",p:"₹560",d:"nv",desc:"Aromatic non-spicy chicken biryani Irani style."},
      {n:"Egg Pulav",p:"₹445",d:"nv",desc:"Mildly spiced pulao rice cooked with boiled eggs."},
      {n:"Paneer Pulav",p:"₹405",d:"v",desc:"Basmati rice cooked with paneer cubes and mild spices."},
      {n:"Veg. Biryani / Pulav",p:"₹405",d:"v",desc:"Fresh mixed vegetable biryani cooked dum style."},
      {n:"Green Peas Pulav",p:"₹395",d:"v",desc:"Aromatic basmati rice cooked with green peas."},
      {n:"Jeera Fried Rice",p:"₹325",d:"v",desc:"Simple and flavorful rice sautéed with cumin seeds."},
      {n:"Biryani Rice",p:"₹320",d:"v",desc:"A portion of plain flavored biryani rice without meat."},
      {n:"Plain Rice",p:"₹320",d:"v",desc:"Simple steamed long-grain basmati rice."}
    ]
  },
  {
    id: "papad-raita",
    name: "PAPAD AND RAITA",
    sub: "Accompaniments & Salads",
    ico: "i-papad",
    count: "6 Items",
    rows: [
      {n:"Pineapple Raita",p:"₹130",d:"v",desc:"Yogurt mixed with sweet pineapple chunks and cumin."},
      {n:"Curd",p:"₹110",d:"v",desc:"Fresh house-made plain curd."},
      {n:"Green Salad",p:"₹110",d:"v",desc:"Freshly sliced onions, cucumbers, tomatoes, and lemon."},
      {n:"Veg. / Boondi Raita",p:"₹110",d:"v",desc:"Yogurt with boondi (tiny fried gram flour balls) or chopped veg."},
      {n:"Masala Papad",p:"₹70",d:"v",desc:"Crisp papad topped with spicy onion-tomato mix and herbs."},
      {n:"Roasted / Fried Papad",p:"₹50",d:"v",desc:"Roasted or fried plain papadum."}
    ]
  },
  {
    id: "roti",
    name: "ROTI",
    sub: "Fresh Tandoori Breads & Bakery Bakes",
    ico: "i-roti",
    count: "25 Items",
    rows: [
      {n:"Blue Nile Chocolate Chip Cookie Jar",p:"₹265",d:"v",desc:"A jar of chunky, gooey chocolate chip cookies."},
      {n:"Bread Pudding",p:"₹245",d:"v",desc:"Warm custard-soaked brioche with raisins and caramel."},
      {n:"Garlic Cheese Bread",p:"₹245",d:"v",desc:"Crisp bread loaded with garlic butter and molten mozzarella."},
      {n:"Almond Croissant",p:"₹215",d:"v",desc:"Butter croissant filled with almond frangipane and toasted flakes."},
      {n:"Banoffee Tartlet",p:"₹195",d:"v",desc:"Banana, toffee and cream in a buttery tart shell."},
      {n:"Chocolate Croissant",p:"₹195",d:"v",desc:"Flaky croissant with a dark chocolate heart."},
      {n:"Cinnamon Roll",p:"₹195",d:"v",desc:"Soft swirl of dough, cinnamon and brown sugar glaze."},
      {n:"Blue Nile Butter Croissant",p:"₹175",d:"v",desc:"36-layered, all-butter croissant baked to a golden shatter."},
      {n:"Garlic Cheese Naan",p:"₹166",d:"v",desc:"Freshly baked leavened flatbread stuffed with mozzarella cheese, topped with garlic and butter."},
      {n:"Garlic Butter Breadsticks",p:"₹165",d:"v",desc:"Crisp sticks brushed with garlic butter and herbs."},
      {n:"Garlic Naan",p:"₹149",d:"v",desc:"Classic leavened tandoor flatbread brushed with butter and topped with aromatic minced garlic."},
      {n:"Eggless Blueberry Muffin",p:"₹145",d:"v",desc:"Tender muffin bursting with blueberries."},
      {n:"Multi-Grain Bread Loaf",p:"₹145",d:"v",desc:"Seven grains, seeds and oats in every slice."},
      {n:"Palmiers",p:"₹145",d:"v",desc:"Crisp caramelised puff-pastry hearts."},
      {n:"Whole Wheat Bread Loaf",p:"₹120",d:"v",desc:"Stone-ground whole wheat loaf, crusty and wholesome."},
      {n:"Butter Naan",p:"₹104",d:"v",desc:"Traditional leavened flatbread baked in the tandoor and brushed generously with butter."},
      {n:"Kerala Butter Paratha",p:"₹104",d:"v",desc:"Multi-layered, flaky, soft flatbread cooked on a griddle, layered with butter."},
      {n:"Kerala Wheat Butter Paratha",p:"₹104",d:"v",desc:"Healthy whole wheat multi-layered paratha, flaky, soft, and brushed with butter."},
      {n:"Butter Roti",p:"₹95",d:"v",desc:"Unleavened whole wheat flatbread baked in the tandoor and brushed with butter."},
      {n:"Kerala Paratha",p:"₹95",d:"v",desc:"Classic, flaky, layered flatbread made from refined flour."},
      {n:"Kerala Wheat Paratha",p:"₹95",d:"v",desc:"Flaky, layered flatbread made using whole wheat flour."},
      {n:"Naan",p:"₹95",d:"v",desc:"Classic plain, soft, leavened tandoori flatbread."},
      {n:"Tandoori Roti",p:"₹88",d:"v",desc:"Healthy, unleavened whole wheat bread baked in a clay tandoor."},
      {n:"Blue Nile Signature Pav (4 pcs)",p:"₹85",d:"v",desc:"Our legendary soft pav, baked fresh every morning."},
      {n:"Bread Slice (2 pcs)",p:"₹22",d:"v",desc:"Slices of soft white bread to accompany gravies and curries."}
    ]
  },
  {
    id: "veg",
    name: "VEG",
    sub: "Vegetarian Curries",
    ico: "i-veg",
    count: "16 Items",
    rows: [
      {n:"Paneer Tikka Masala",p:"₹460",d:"v",desc:"Grilled paneer tikka in thick tomato onion gravy."},
      {n:"Aaloo Mutter / Mutter Masala",p:"₹410",d:"v",desc:"Potatoes & green peas gravy."},
      {n:"Aaloo Palak",p:"₹410",d:"v",desc:"Potatoes cooked with spinach puree."},
      {n:"Mixed Veg Curry",p:"₹410",d:"v",desc:"Assorted garden vegetables in curry sauce."},
      {n:"Mushroom Masala",p:"₹410",d:"v",desc:"Fresh mushrooms cooked in spiced gravy."},
      {n:"Mutter Paneer Masala",p:"₹410",d:"v",desc:"Green peas and paneer in spiced gravy."},
      {n:"Palak Paneer",p:"₹410",d:"v",desc:"Cottage cheese cubes in smooth spinach gravy."},
      {n:"Paneer Makhanwala",p:"₹410",d:"v",desc:"Paneer cubes in creamy sweet-spiced tomato gravy."},
      {n:"Plain Palak",p:"₹410",d:"v",desc:"Seasoned spinach curry."},
      {n:"Vegetable Kolhapuri",p:"₹410",d:"v",desc:"Spicy mixed veg in Kolhapuri chilli paste."},
      {n:"Vegetable Makhani",p:"₹410",d:"v",desc:"Mixed vegetables in rich buttery gravy."},
      {n:"Chana Masala",p:"₹405",d:"v",desc:"Traditional chickpea masala."},
      {n:"Paneer Bhurji",p:"₹385",d:"v",desc:"Scrambled paneer with onions & spices."},
      {n:"Dal Butter Fry",p:"₹365",d:"v",desc:"Tempered yellow dal finished with butter."},
      {n:"Dal Fry",p:"₹360",d:"v",desc:"Yellow lentils tempered with garlic & cumin."},
      {n:"French Fries",p:"₹330",d:"v",desc:"Golden salted potato fries."}
    ]
  },
  {
    id: "shawarma",
    name: "SHAWARMA",
    sub: "Traditional Middle-Eastern Shawarmas",
    ico: "i-shawarma",
    count: "2 Items",
    rows: [
      {n:"Chicken Shawarma with Cold Drink",p:"₹360",d:"nv",desc:"Slow-roasted spiced chicken, garlic sauce and pickles rolled in warm flatbread, served with a cold drink."},
      {n:"Paneer Shawarma with Cold Drink",p:"₹350",d:"v",desc:"Marinated paneer with mint chutney and pickles, rolled in warm flatbread with a cold drink."}
    ]
  },
  {
    id: "wraps",
    name: "WRAPS",
    sub: "Signature Wraps with Pepsi",
    ico: "i-wrap",
    count: "7 Items",
    rows: [
      {n:"Butter Chicken Wrap + Pepsi",p:"₹565",d:"nv",desc:"Rich butter chicken folded into a soft wrap with pickled onion, served with a Pepsi."},
      {n:"Chicken Malai Tikka Wrap + Pepsi",p:"₹565",d:"nv",desc:"Creamy malai tikka chicken with cashew chutney in a soft wrap, served with a Pepsi."},
      {n:"Chicken Pahadi Wrap + Pepsi",p:"₹565",d:"nv",desc:"Green herb-marinated chicken pahadi wrapped in flatbread, served with a Pepsi."},
      {n:"Chicken Tikka Wrap + Pepsi",p:"₹565",d:"nv",desc:"Char-grilled chicken tikka, onions and mint chutney wrapped in warm flatbread, served with a Pepsi."},
      {n:"Mutton Seekh Wrap + Pepsi",p:"₹565",d:"nv",desc:"Juicy mutton seekh kebab with onions, coriander and spicy mayo wrapped in flatbread, served with a Pepsi."},
      {n:"Paneer Pahadi Wrap + Pepsi",p:"₹565",d:"v",desc:"Herb-marinated paneer with mint chutney and crunchy vegetables wrapped in flatbread, served with a Pepsi."},
      {n:"Paneer Tikka Wrap + Pepsi",p:"₹565",d:"v",desc:"Smoky paneer tikka with peppers and mint mayo wrapped in flatbread, served with a Pepsi."}
    ]
  },
  {
    id: "soup",
    name: "SOUP",
    sub: "Comforting Slow-Simmered Broths",
    ico: "i-soup",
    count: "12 Items",
    rows: [
      {n:"Mutton Paya Soup (All Day)",p:"₹455",d:"nv",desc:"Slow-simmered paya (trotters) gravy with rich traditional seasonings."},
      {n:"Chicken Clear Soup",p:"₹325",d:"nv",desc:"A clean, delicate chicken consommé."},
      {n:"Chicken Soup",p:"₹325",d:"nv",desc:"Comforting chicken broth with herbs and vegetables."},
      {n:"Hot & Sour Chicken Soup",p:"₹325",d:"nv",desc:"Fiery and tangy, loaded with chicken and bamboo shoots."},
      {n:"Hot & Sour Veg. Soup",p:"₹325",d:"v",desc:"A punchy, tangy vegetable soup with a fiery finish."},
      {n:"Manchow Chicken Soup",p:"₹325",d:"nv",desc:"Spiced chicken manchow soup with crispy noodle topping."},
      {n:"Manchow Veg. Soup",p:"₹325",d:"v",desc:"Indo-Chinese classic vegetable soup with crispy noodles."},
      {n:"Mutton Soup",p:"₹325",d:"nv",desc:"Rich mutton broth with ginger, pepper and fresh coriander."},
      {n:"Sweet Corn Chicken Soup",p:"₹325",d:"nv",desc:"Sweet corn and shredded chicken in a silky soup."},
      {n:"Tomato Soup",p:"₹325",d:"v",desc:"Velvety roasted tomato soup with a hint of basil cream."},
      {n:"Veg. Sweet Corn Soup",p:"₹325",d:"v",desc:"Creamy sweet corn soup with shredded vegetables."},
      {n:"Vegetable Clear Soup",p:"₹325",d:"v",desc:"A light, delicate broth with garden vegetables."}
    ]
  },
  {
    id: "veg-starter",
    name: "VEG STARTER",
    sub: "Crispy Vegetarian Starters",
    ico: "i-vegstar",
    count: "9 Items",
    rows: [
      {n:"Gobhi 65 (Dry / Gravy)",p:"₹405",d:"v",desc:"Crispy fried cauliflower florets marinated in southern-style hot spices."},
      {n:"Gobhi Manchurian (Dry / Gravy)",p:"₹405",d:"v",desc:"Cauliflower florets tossed in a classic, tangy Manchurian sauce."},
      {n:"Mushroom 65 (Dry / Gravy)",p:"₹405",d:"v",desc:"Crispy deep-fried mushrooms tossed in a spicy, southern-style curry leaf marinade."},
      {n:"Mushroom Butter Garlic",p:"₹405",d:"v",desc:"Fresh button mushrooms tossed with garlic, butter, and herbs."},
      {n:"Paneer Butter Garlic",p:"₹405",d:"v",desc:"Cottage cheese cubes tossed in a rich, velvety sauce of butter, cream, and sautéed garlic."},
      {n:"Paneer Chilli (Dry / Gravy)",p:"₹405",d:"v",desc:"Crispy paneer cubes tossed with green chillies, bell peppers, onions, soy, and chilli paste."},
      {n:"Paneer Manchurian (Dry / Gravy)",p:"₹405",d:"v",desc:"Deep-fried paneer cubes tossed in a dark, tangy, and sweet Manchurian sauce."},
      {n:"Veg. Manchurian (Dry / Gravy)",p:"₹405",d:"v",desc:"Deep-fried mixed vegetable dumplings tossed in a savory, tangy Manchurian sauce."},
      {n:"Veg. Spring Roll (6 pcs)",p:"₹405",d:"v",desc:"Crispy pastry wraps filled with seasoned stir-fried julienne vegetables."}
    ]
  },
  {
    id: "veg-chinese-noodles-rice",
    name: "VEG CHINESE NOODLES & RICE",
    sub: "Veg Chinese Favorites",
    ico: "i-vcn",
    count: "6 Items",
    rows: [
      {n:"Veg. Chowmein",p:"₹450",d:"v",desc:"Classic stir-fried noodles with crisp vegetables and Chinese sauces."},
      {n:"Veg. Schezwan Fried Rice",p:"₹450",d:"v",desc:"Fluffy rice stir-fried with vegetables and coated in a spicy, red Schezwan sauce."},
      {n:"Veg. Schezwan Hakka Noodles",p:"₹450",d:"v",desc:"Stir-fried noodles tossed with fresh vegetables and fiery Schezwan sauce."},
      {n:"Veg. American Chopsuey",p:"₹440",d:"v",desc:"Crispy noodles served with sweet and sour vegetable gravy."},
      {n:"Veg. Fried Rice",p:"₹440",d:"v",desc:"Wok-tossed basmati rice with finely chopped vegetables and aromatic seasoning."},
      {n:"Veg. Hakka Noodles",p:"₹440",d:"v",desc:"Classic stir-fried noodles cooked with crunchy vegetables and light soy in a wok."}
    ]
  },
  {
    id: "non-veg-starter",
    name: "NON-VEG STARTER",
    sub: "Classic Chicken Appetizers",
    ico: "i-nvstar",
    count: "10 Items",
    rows: [
      {n:"Chicken Shashlik",p:"₹560",d:"nv",desc:"Juicy chicken cubes skewered with vegetables, grilled and glazed in a sweet-sour sauce."},
      {n:"Mix Butter Garlic (Vegetable Mix)",p:"₹555",d:"nv",desc:"Non-veg starter mix in butter garlic sauce."},
      {n:"Butter Garlic Chicken",p:"₹545",d:"nv",desc:"Juicy chicken chunks sautéed in butter with chopped garlic, black pepper, and herbs."},
      {n:"Hot & Sweet Chicken",p:"₹540",d:"nv",desc:"Crispy chicken bites tossed in a sweet-spicy dark soy glaze."},
      {n:"Chicken 65",p:"₹530",d:"nv",desc:"Crispy, deep-fried chicken chunks marinated in red chillies, yogurt, and aromatic spices."},
      {n:"Chicken Manchurian",p:"₹530",d:"nv",desc:"Golden fried chicken bites simmered in a dark, sweet, sour, and spicy Manchurian sauce."},
      {n:"Hot Wings",p:"₹530",d:"nv",desc:"Spicy chicken wings coated in a fiery hot sauce, grilled for a perfect char."},
      {n:"Soya Chicken Chilli Fry",p:"₹530",d:"nv",desc:"Chicken stir-fried with green chillies, capsicum, and soy sauce."},
      {n:"Chicken Lollypop",p:"₹525",d:"nv",desc:"Classic crispy chicken drumettes marinated in spices and deep-fried, served with Schezwan sauce."},
      {n:"Ginger Chicken",p:"₹525",d:"nv",desc:"Chicken stir-fried with ginger shreds, green chillies, garlic, and light soy."}
    ]
  },
  {
    id: "nonveg-chinese-noodles",
    name: "NONVEG CHINESE NOODLES",
    sub: "Wok-Fried Chicken Noodles",
    ico: "i-nvnd",
    count: "4 Items",
    rows: [
      {n:"Chicken Schezwan Noodles",p:"₹550",d:"nv",desc:"Wok-tossed noodles with chicken strips, eggs, vegetables, and spicy Schezwan sauce."},
      {n:"Chicken American Chopsuey",p:"₹545",d:"nv",desc:"Crispy fried noodles served with a sweet and sour chicken-vegetable gravy and a fried egg."},
      {n:"Chicken Chowmein",p:"₹545",d:"nv",desc:"Traditional Chinese stir-fried noodles loaded with shredded chicken and mixed vegetables."},
      {n:"Chicken Hakka Noodles",p:"₹545",d:"nv",desc:"Stir-fried noodles with chicken, scrambled egg, and vegetables, lightly seasoned with soy."}
    ]
  },
  {
    id: "nonveg-chinese-rice",
    name: "NONVEG CHINESE RICE",
    sub: "Fragrant Wok Fried Rice",
    ico: "i-nvrice",
    count: "8 Items",
    rows: [
      {n:"Mixed Schezwan Fried Rice",p:"₹560",d:"nv",desc:"Wok-fried rice containing chicken, prawns, egg, vegetables, and spicy Schezwan sauce."},
      {n:"Mixed Fried Rice",p:"₹555",d:"nv",desc:"Fragrant rice stir-fried with a mix of chicken, prawns, egg, and crisp vegetables."},
      {n:"Fish Schezwan Fried Rice",p:"₹550",d:"nv",desc:"Fluffy rice tossed with fish cubes and a spicy Schezwan spice blend."},
      {n:"Prawns Schezwan Fried Rice",p:"₹550",d:"nv",desc:"Spicy stir-fried rice loaded with fresh prawns, chopped vegetables, and Schezwan sauce."},
      {n:"Chicken Fried Rice",p:"₹540",d:"nv",desc:"Classic stir-fried rice with juicy chicken chunks, scrambled eggs, and vegetables."},
      {n:"Chicken Schezwan Fried Rice",p:"₹540",d:"nv",desc:"Stir-fried rice with shredded chicken, scrambled eggs, and spicy Schezwan sauce."},
      {n:"Fish Fried Rice",p:"₹540",d:"nv",desc:"Wok-fried rice with seasoned fish chunks, eggs, and green scallions."},
      {n:"Prawns Fried Rice",p:"₹540",d:"nv",desc:"Fluffy rice stir-fried with juicy prawns, scallions, and soy sauce."}
    ]
  },
  {
    id: "desserts",
    name: "DESSERTS",
    sub: "Sweet Finales & Pastries",
    ico: "i-dessert",
    count: "14 Items",
    rows: [
      {n:"Caramel Custard with Ice Cream & Jelly",p:"₹390",d:"v",desc:"Velvety caramel custard served with ice cream and fruit jelly."},
      {n:"Fruit Salad with Ice Cream & Jelly",p:"₹390",d:"v",desc:"Mixed fresh fruit salad topped with a scoop of ice cream and sweet jelly."},
      {n:"Fruit Salad with Ice Cream",p:"₹375",d:"v",desc:"Vibrant mixed fresh fruit salad topped with ice cream."},
      {n:"Fruit Salad with Jelly",p:"₹375",d:"v",desc:"Mixed fresh fruits mixed with sweet flavored jelly cubes."},
      {n:"Falooda with Ice Cream",p:"₹365",d:"v",desc:"Rich and creamy falooda drink with vermicelli, sweet basil, syrup, and ice cream."},
      {n:"Gulab Jamun with Ice Cream",p:"₹345",d:"v",desc:"Hot, syrup-soaked gulab jamuns served with cold vanilla ice cream."},
      {n:"Brownie with Ice Cream",p:"₹340",d:"v",desc:"Rich chocolate brownie served with a scoop of vanilla ice cream."},
      {n:"Caramel Custard with Ice Cream",p:"₹340",d:"v",desc:"Sleek caramel custard served alongside a scoop of vanilla ice cream."},
      {n:"Caramel Custard with Jelly",p:"₹340",d:"v",desc:"Classic caramel custard accompanied by flavored sweet jelly."},
      {n:"Fruit Salad",p:"₹340",d:"v",desc:"A healthy portion of chopped fresh seasonal fruits."},
      {n:"Jelly with Ice Cream",p:"₹330",d:"v",desc:"Sweet flavored jelly served with vanilla ice cream."},
      {n:"Gulab Jamun",p:"₹290",d:"v",desc:"Classic warm, syrup-soaked dumplings scented with cardamom."},
      {n:"Caramel Custard",p:"₹285",d:"v",desc:"Smooth house-baked custard with a caramelized sugar glaze."},
      {n:"Jelly",p:"₹270",d:"v",desc:"Simple portion of sweet, flavored gelatin jelly."}
    ]
  },
  {
    id: "ice-shakes",
    name: "ICE SHAKES",
    sub: "Creamy Milkshakes with Ice Cream",
    ico: "i-shake",
    count: "4 Items",
    rows: [
      {n:"Chocolate Shake with Ice Cream",p:"₹370",d:"v",desc:"Decadent chocolate milkshake topped with a scoop of ice cream."},
      {n:"Mango Shake with Ice Cream",p:"₹370",d:"v",desc:"Rich mango pulp blended milkshake with a scoop of ice cream."},
      {n:"Strawberry Shake with Ice Cream",p:"₹370",d:"v",desc:"Chilled strawberry shake crowned with a scoop of vanilla ice cream."},
      {n:"Vanilla Shake with Ice Cream",p:"₹370",d:"v",desc:"Smooth classic vanilla shake topped with a scoop of vanilla ice cream."}
    ]
  },
  {
    id: "ice-creams",
    name: "ICE CREAMS",
    sub: "Premium Ice Cream Flavors",
    ico: "i-icecream",
    count: "6 Items",
    rows: [
      {n:"Cassata",p:"₹280",d:"v",desc:"Traditional layered cassata ice cream slice with nuts and cake."},
      {n:"Butterscotch",p:"₹260",d:"v",desc:"Crunchy butterscotch ice cream."},
      {n:"Chocolate",p:"₹260",d:"v",desc:"Rich and creamy chocolate ice cream."},
      {n:"Mango",p:"₹260",d:"v",desc:"Vibrant alphonso mango flavored ice cream scoop."},
      {n:"Strawberry",p:"₹260",d:"v",desc:"Sweet strawberry ice cream scoop."},
      {n:"Vanilla",p:"₹260",d:"v",desc:"Classic vanilla bean flavored ice cream scoop."}
    ]
  },
  {
    id: "kulfi",
    name: "KULFI",
    sub: "Traditional Indian Kulfis",
    ico: "i-kulfi",
    count: "4 Items",
    rows: [
      {n:"Kulfi Falooda",p:"₹315",d:"v",desc:"Kulfi slices served with falooda vermicelli, rose syrup, and sweet basil."},
      {n:"Kesar Pista (Kulfi)",p:"₹280",d:"v",desc:"Classic kulfi rich in saffron and loaded with crunchy pistachios."},
      {n:"Mango (Kulfi)",p:"₹270",d:"v",desc:"Traditional mango kulfi frozen into creamy blocks."},
      {n:"Malai Kulfi",p:"₹250",d:"v",desc:"Traditional sweet, condensed milk kulfi flavored with cardamom."}
    ]
  },
  {
    id: "baklava",
    name: "BAKLAVA",
    sub: "Fine Turkish Baklavas",
    ico: "i-baklava",
    count: "2 Items",
    rows: [
      {n:"Baklava with Ice Cream",p:"₹375",d:"v",desc:"Crispy layered phyllo pastry with sweet syrup served with vanilla ice cream."},
      {n:"Baklava (3 Pcs)",p:"₹325",d:"v",desc:"Traditional baked sweet phyllo pastry with chopped nuts and syrup."}
    ]
  },
  {
    id: "hot-cold-sips",
    name: "HOT AND COLD SIPS",
    sub: "Refreshing Beverages & Lassis",
    ico: "i-drink",
    count: "10 Items",
    rows: [
      {n:"Cold Coffee",p:"₹180",d:"v",desc:"Creamy, chilled coffee blended with milk and sugar."},
      {n:"Fresh Lime Soda",p:"₹160",d:"v",desc:"Fizzy lime soda served sweet, salted, or mixed."},
      {n:"Mango Lassi",p:"₹160",d:"v",desc:"Creamy lassi blended with rich mango pulp."},
      {n:"Masala Soda",p:"₹160",d:"v",desc:"Fizzy soda mixed with tangy spices and black salt."},
      {n:"Lassi (Sweet / Salty)",p:"₹150",d:"v",desc:"Traditional thick, churned yogurt drink served sweet or salted."},
      {n:"Solkadhi",p:"₹150",d:"v",desc:"Traditional digestive drink made from kokum fruit and coconut milk."},
      {n:"Fresh Lime Water",p:"₹145",d:"v",desc:"Refreshing freshly squeezed lime juice with water."},
      {n:"Diet Coke",p:"₹80",d:"v",desc:"Sugar-free Coca-Cola beverage."},
      {n:"Soft Drinks",p:"₹80",d:"v",desc:"Chilled canned soft drinks (Coke, Pepsi, Sprite, etc.)"},
      {n:"Mineral Water",p:"₹50",d:"v",desc:"Packaged drinking mineral water bottle."}
    ]
  },
  {
    id: "bakery-pack",
    name: "BAKERY PACK",
    sub: "Fresh from the Oven",
    ico: "i-bakery",
    count: "17 Items",
    rows: [
      {n:"Baklava Box",p:"₹665",d:"v",desc:"Freshly baked traditional baklava."},
      {n:"Roat",p:"₹260",d:"v",desc:"Crispy traditional baked biscuit."},
      {n:"Plum Cake",p:"₹195",d:"v",desc:"Rich and moist plum cake slice."},
      {n:"Pineapple Roll",p:"₹195",d:"v",desc:"Sweet pineapple filled pastry roll."},
      {n:"Marble Cake",p:"₹195",d:"v",desc:"Classic marble cake slice."},
      {n:"Mawa Cake",p:"₹190",d:"v",desc:"Rich mawa infused cake."},
      {n:"Jam Roll Cake",p:"₹190",d:"v",desc:"Soft sponge cake rolled with fruit jam."},
      {n:"Sugar Free Biscuits",p:"₹175",d:"v",desc:"Diet-friendly crispy biscuits."},
      {n:"Honey Complex Biscuits",p:"₹155",d:"v",desc:"Crunchy biscuits with honey flavor."},
      {n:"Shrewsbury Biscuits",p:"₹145",d:"v",desc:"Classic buttery shortbread biscuits."},
      {n:"Brazil Nut Biscuits",p:"₹145",d:"v",desc:"Crispy biscuits baked with Brazil nuts."},
      {n:"Makroom",p:"₹135",d:"v",desc:"Sweet and chewy macaroon drops."},
      {n:"Fine Khari",p:"₹95",d:"v",desc:"Delicate, extra-flaky puff pastry."},
      {n:"Khari",p:"₹85",d:"v",desc:"Traditional flaky puff pastry biscuit."},
      {n:"Jeera Batar",p:"₹85",d:"v",desc:"Crispy cumin-flavored butter biscuit."},
      {n:"Toast",p:"₹85",d:"v",desc:"Crunchy baked milk toast slices."},
      {n:"White Bread",p:"₹33",d:"v",desc:"Freshly baked soft white bread loaf."}
    ]
  }
];
// Supabase config
const SUPABASE_URL = 'https://hcgangjurvsisqdrwkqo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZ2FuZ2p1cnZzaXNxZHJ3a3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjA4ODMsImV4cCI6MjEwMTU5Njg4M30.Ipq0PSp2dbRVA9Ik8xQtscozPL4qz9rGoCS6NaFmHu8';
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



/* ═══════════════════════════════
   BUILD NAVIGATION PILLS
═══════════════════════════════ */
function buildPills(){
  const nav = document.getElementById('pillNav');
  D.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'pill-btn';
    btn.innerHTML = `<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><use href="#${c.ico}"/></svg> ${c.name}`;
    btn.addEventListener('click', () => {
      openCategoryModal(c.id);
    });
    nav.appendChild(btn);
  });
}

/* ═══════════════════════════════
   BUILD BENTO GRID
═══════════════════════════════ */
function buildBento(){
  const g=document.getElementById('bento');
  const fragment = document.createDocumentFragment();
  D.forEach((c,i)=>{
    const el=document.createElement('div');
    el.className='card'+(c.feat?' card-feat':'');
    el.id='card-'+c.id;
    el.tabIndex=0;el.setAttribute('role','button');

    el.innerHTML=`
      <div class="card-num">${String(i+1).padStart(2,'0')}</div>
      <div class="card-ico"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><use href="#${c.ico}"/></svg></div>
      <div class="card-name">${c.name}</div>
      <div class="card-desc">${c.sub}</div>
      <div class="card-foot">
        <span class="card-count">${c.count}</span>
        <span class="card-btn"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></span>
      </div>`;
    el.addEventListener('click',()=>openCategoryModal(c.id));
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCategoryModal(c.id);}});
    fragment.appendChild(el);
  });
  g.appendChild(fragment);
}

/* ═══════════════════════════════
   MODAL 1: CATEGORY POPUP
═══════════════════════════════ */
const OL=document.getElementById('overlay');
const pIco=document.getElementById('pIco');
const pTitle=document.getElementById('pTitle');
const pSub=document.getElementById('pSub');
const pBody=document.getElementById('pBody');
// Safe global store so base64 images never corrupt onclick attributes
let _currentCatRows = [];

document.getElementById('pClose').addEventListener('click',closeCategoryModal);
OL.addEventListener('click',e=>{if(e.target===OL)closeCategoryModal();});

// Track which category is currently open so we can re-render after Supabase loads
let _openCatId = null;

function openCategoryModal(id){
  _openCatId = id;
  const c=D.find(x=>x.id===id);if(!c)return;
  pTitle.textContent=c.name;
  pSub.textContent=c.sub;
  pIco.innerHTML=`<svg style="width:22px;height:22px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><use href="#${c.ico}"/></svg>`;
  pBody.innerHTML='';

  if(c.kind==='hero') renderHero(c);
  else if(c.kind==='flat') renderFlat(c);
  else if(c.kind==='ask') renderAsk(c);
  else renderList(c);

  // Toggle active class on navigation pills
  const pills = document.querySelectorAll('.pill-btn');
  pills.forEach(p => {
    if (p.textContent.trim() === c.name.trim()) p.classList.add('active');
    else p.classList.remove('active');
  });

  OL.classList.add('on');
  document.body.style.overflow='hidden';
}

function closeCategoryModal(){
  _openCatId = null;
  OL.classList.remove('on');
  document.body.style.overflow='';
  // Remove active class from pills
  const pills = document.querySelectorAll('.pill-btn');
  pills.forEach(p => p.classList.remove('active'));
}

function renderHero(c){
  const it=c.item;
  pBody.innerHTML=`
    <div class="irow" style="background:var(--g8);border:1.5px solid var(--g4);padding:16px;" onclick="openDishPopup('${(it.name||'').replace(/'/g, "\\'")}', '${it.price||''}', '${it.d||'v'}', '${(it.note||'Full Portion').replace(/'/g, "\\'")}', '${(it.desc||'').replace(/'/g, "\\'")}', '${it.img||''}')">
      <span class="ndot"></span>
      <div style="flex:1">
        <span class="iname" style="font-size:1.15rem">${it.name}</span>
        <span class="ivariant">${it.note} · Tap for dish photo & details</span>
      </div>
      <span class="iprice" style="font-size:1.2rem">${it.price}</span>
      <span class="click-hint-icon">➔</span>
    </div>`;
}

function renderFlat(c){
  const rows=c.rows.map(r=>`
    <div class="irow" onclick="openDishPopup('${(r.n||'').replace(/'/g, "\\'")}', '${c.flatP}', '${r.d||'v'}', 'Single Portion', '${(r.desc||'Authentic dish').replace(/'/g, "\\'")}', '${r.img||''}')">
      ${r.d==='v'?'<span class="vdot"></span>':'<span class="ndot"></span>'}
      <span class="iname">${r.n}</span>
      <span class="iprice">${c.flatP}</span>
      <span class="click-hint-icon">➔</span>
    </div>`).join('');
  pBody.innerHTML=`<div style="background:var(--g8);padding:10px 16px;border-radius:10px;margin-bottom:12px;font-size:0.85rem;color:var(--g1);font-weight:600">All Chinese Dishes Flat ${c.flatP}</div><div class="items-grid">${rows}</div>`;
}

function renderAsk(c){
  const chips=c.chips.map(ch=>`<span style="background:var(--g7);padding:6px 14px;border-radius:20px;font-size:0.8rem;font-weight:600;color:var(--g1)">${ch}</span>`).join('');
  pBody.innerHTML=`<div style="text-align:center;padding:30px 10px;">
    <h3 style="font-family:var(--serif);font-size:1.4rem;color:var(--g1);margin-bottom:12px">Counter Selection</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:16px">${chips}</div>
    <p style="font-size:0.85rem;color:var(--ink3)">Ask your server for today's fresh availability and prices.</p>
  </div>`;
}

function renderList(c){
  _currentCatRows = c.rows || [];
  // Sort items by price descending (high to low)
  _currentCatRows.sort((a, b) => {
    const priceA = Number(a.p.replace(/[^0-9]/g, ''));
    const priceB = Number(b.p.replace(/[^0-9]/g, ''));
    return priceB - priceA;
  });
  const rows = _currentCatRows.map((r, i) => `
    <div class="irow" onclick="_openRow(${i})">
      ${r.d==='v'?'<span class="vdot"></span>':'<span class="ndot"></span>'}
      <span class="iname">${r.n}</span>
      <span class="ileader"></span>
      <span class="iprice">${r.p}</span>
      <span class="click-hint-icon">&#10148;</span>
    </div>`).join('');
  pBody.innerHTML=`<div class="items-grid">${rows}</div>`;
}

function _openRow(i){
  const r = _currentCatRows[i];
  if(!r) return;
  openDishPopup(r.n||'', r.p||'', r.d||'v', r.v||'Standard Portion', r.desc||'Signature preparation', r.img||'');
}

/* ═══════════════════════════════
   MODAL 2: DISH DETAIL POPUP WITH PHOTO SPACE
═══════════════════════════════ */
const dishOverlay = document.getElementById('dishOverlay');
const dTitle = document.getElementById('dTitle');
const dDietBadge = document.getElementById('dDietBadge');
const dPortionBadge = document.getElementById('dPortionBadge');
const dDesc = document.getElementById('dDesc');
const dPrice = document.getElementById('dPrice');

document.getElementById('dishCloseBtn').addEventListener('click', closeDishPopup);
dishOverlay.addEventListener('click', (e) => { if(e.target === dishOverlay) closeDishPopup(); });

function openDishPopup(name, price, diet, portion, desc, img){
  dTitle.textContent = name;
  dPrice.textContent = price;
  dPortionBadge.textContent = portion || 'Standard Portion';
  dDesc.textContent = desc || "Authentic preparation made with traditional spices in Blue Nile's heritage kitchen.";

  if(diet === 'v'){
    dDietBadge.className = 'dish-type-badge v';
    dDietBadge.innerHTML = '<span class="vdot"></span> Vegetarian';
  } else {
    dDietBadge.className = 'dish-type-badge nv';
    dDietBadge.innerHTML = '<span class="ndot"></span> Non-Vegetarian';
  }
  
  const dishPhotoArea = document.getElementById('dishPhotoArea');
  if(img) {
    dishPhotoArea.style.display = '';
    dishPhotoArea.style.position = 'relative';
    dishPhotoArea.style.overflow = 'hidden';
    dishPhotoArea.style.borderRadius = '14px';
    dishPhotoArea.style.background = 'var(--surface-color)';
    dishPhotoArea.style.cursor = 'zoom-in';
    dishPhotoArea.onclick = () => openFullImg(img);
    dishPhotoArea.innerHTML = `
      <img src="${img}" alt="${name}" style="width:100%;height:100%;object-fit:cover;pointer-events:none;">
    `;

  } else {
    dishPhotoArea.style.display = '';
    dishPhotoArea.innerHTML = `<svg viewBox="0 0 100 100" class="dish-cloche-svg" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <!-- Steam lines -->
        <path class="steam steam-1" d="M42 20 Q44 15 42 10" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
        <path class="steam steam-2" d="M50 18 Q52 12 50 7" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
        <path class="steam steam-3" d="M58 20 Q60 15 58 10" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
        <!-- Cloche Handle -->
        <circle cx="50" cy="24" r="3.5" stroke-width="2"/>
        <!-- Cloche Dome -->
        <path d="M22 56 C22 34 32 28 50 28 C68 28 78 34 78 56" stroke-width="2" stroke-linecap="round"/>
        <!-- Cloche Base -->
        <path d="M16 56 L84 56 C86.2 56 88 57.8 88 60 L88 62 L12 62 L12 60 C12 57.8 13.8 56 16 56 Z" stroke-width="2" stroke-linejoin="round"/>
        <!-- Plate Line -->
        <path d="M24 62 L76 62" stroke-width="2"/>
        <!-- Subtle shadow -->
        <ellipse cx="50" cy="74" rx="34" ry="4" fill="currentColor" fill-opacity="0.06" stroke="none"/>
      </svg>`;
    dishPhotoArea.style.background = '';
    dishPhotoArea.style.borderRadius = '';
  }

  dishOverlay.classList.add('on');
}

function closeDishPopup(){
  dishOverlay.classList.remove('on');
}

/* Fullscreen image lightbox */
function openFullImg(src) {
  let lb = document.getElementById('imgLightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'imgLightbox';
    lb.style.cssText = `
      position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);
      display:flex;align-items:center;justify-content:center;cursor:zoom-out;
      opacity:0;transition:opacity 0.2s ease;
    `;
    lb.innerHTML = `<img id="imgLightboxImg" style="max-width:95vw;max-height:90vh;object-fit:contain;border-radius:10px;box-shadow:0 0 60px rgba(0,0,0,0.8);">
      <button onclick="closeFullImg()" style="position:fixed;top:16px;right:16px;background:rgba(255,255,255,0.15);border:none;color:#fff;border-radius:50%;width:40px;height:40px;font-size:1.4rem;cursor:pointer;backdrop-filter:blur(4px);">✕</button>`;
    lb.addEventListener('click', (e) => { if (e.target === lb) closeFullImg(); });
    document.body.appendChild(lb);
  }
  document.getElementById('imgLightboxImg').src = src;
  lb.style.display = 'flex';
  requestAnimationFrame(() => lb.style.opacity = '1');
}
function closeFullImg() {
  const lb = document.getElementById('imgLightbox');
  if (lb) { lb.style.opacity = '0'; setTimeout(() => lb.style.display = 'none', 200); }
}

/* ESC key handling */
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    if(document.getElementById('imgLightbox')?.style.display === 'flex') closeFullImg();
    else if(dishOverlay.classList.contains('on')) closeDishPopup();
    else if(OL.classList.contains('on')) closeCategoryModal();
  }
});

// Separate sorting function to sort data synchronously
function sortMenuData() {
  function parsePrice(p) {
    if (!p) return 0;
    const match = p.replace(/,/g, '').match(/[\d]+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  }
  D.forEach(cat => {
    if (cat.rows && Array.isArray(cat.rows)) {
      cat.rows.sort((a, b) => parsePrice(b.p) - parsePrice(a.p));
    }
  });
}

async function loadMenuFromSupabase() {
  try {
    const { data, error } = await _supabase.from('global_menu').select('data').eq('id', 1).single();
    if (error) throw error;
    if (data && Array.isArray(data.data) && data.data.length > 0) {
      D = data.data;
      sortMenuData();
    }
  } catch(e) {
    console.warn('Could not load menu from Supabase, using defaults:', e.message);
  }
}

/* INIT */
window.addEventListener('DOMContentLoaded', () => {
  // 1. Immediately sort and render the preloaded D array (Lightning fast!)
  sortMenuData();
  buildPills();
  buildBento();

  // 2. Fetch the latest from Supabase in the background
  loadMenuFromSupabase().then(() => {
    // 3. Clear existing UI and Re-render with latest data smoothly
    const nav = document.getElementById('pillNav');
    const bento = document.getElementById('bento');
    if(nav) nav.innerHTML = '';
    if(bento) bento.innerHTML = '';
    buildPills();
    buildBento();
    // 4. If a category modal is open, re-render it with fresh data (so images appear)
    if(_openCatId) openCategoryModal(_openCatId);
  });
});