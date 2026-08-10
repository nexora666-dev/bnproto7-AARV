368-/* ══════════════════════════════════════════
369-   ADMIN PANEL JS
370-══════════════════════════════════════════ */
371-
372-/* ── Default menu data (same as index.html) ── */
373-const DEFAULT_DATA=[
374-  {
375-    id: "make-to-order",
376-    name: "MAKE TO ORDER",
377-    sub: "Signature Sharing Portions",
378-    ico: "i-biryani",
379-    count: "Made to Order",
380-    feat: true,
381-    kind: "hero",
382-    item: {name:"Mutton Raan Biryani (with Potatoes) 1 Kg",note:"Serves 6–8 Guests",price:"₹4,400",d:"nv",desc:"Signature 1 Kg Mutton Raan Biryani served with potatoes, special gravy (750ml), raita (750ml), tandoori salad, lemon, chutney & 4 cold drinks.",tags:["Gravy 750ml","Raita 750ml","Tandoori Salad","4 Cold Drinks"]}
383-  },
384-  {
385-    id: "irani-special",
386-    name: "IRANI SPECIAL",
387-    sub: "Traditional Persian Specialties",
388-    ico: "i-irani",
389-    count: "4 Items",
390-    rows: [
391-      {n:"Irani Mutton Koobideh Kebab with Rice (3 pcs)",p:"₹655",d:"nv",desc:"Traditional Persian-style saffron butter rice served with 3 skewers of juicy mutton Koobideh and a flame-grilled tomato."},
392-      {n:"Chicken Irani Jujeh Kebab with Rice (8 pcs)",p:"₹620",d:"nv",desc:"Our signature Jujeh Kebab served over fragrant saffron basmati rice with grilled lime."},
393-      {n:"Irani Mutton Koobideh Kebab (4 pcs)",p:"₹600",d:"nv",desc:"Minced mutton marinated with saffron, onion & traditional Persian spices, flame-grilled on flat skewers."},
394-      {n:"Chicken Irani Jujeh Kebab (8 pcs)",p:"₹530",d:"nv",desc:"Saffron-marinated chicken skewers, grilled over charcoal with smoked lime and charred tomatoes."}
395-    ]
396-  },
397-  {
398-    id: "blue-nile-chicken-platters",
399-    name: "BLUE NILE CHICKEN PLATTERS",
400-    sub: "Royal Sharing Feasts",
401-    ico: "i-chicken",
402-    count: "3 Items",
403-    rows: [
404-      {n:"Blue Nile Special Platter (6–8 Persons)",p:"₹2,365",d:"nv",desc:"The crown jewel — 4 pcs Chicken Tikka, 4 pcs Chicken Reshmi, 2 pcs Mutton Seekh, 2 pcs Chicken Seekh, 4 pcs Prawns Fry, 2 pcs Fish Fry."},
405-      {n:"Blue Nile Chicken Platter (4–6 Persons)",p:"₹1,620",d:"nv",desc:"Grand spread: 4 pcs Chicken Tikka, 4 pcs Reshmi, 2 pcs Seekh, 4 pcs Pahadi, 4 pcs Malai Tikka."},
406-      {n:"Blue Nile Chicken Platter (2–4 Persons)",p:"₹895",d:"nv",desc:"Sharing platter: 2 pcs Tikka, 2 pcs Reshmi, 1 pc Seekh, 2 pcs Malai Tikka, 2 pcs Pahadi."}
407-    ]
408-  },
409-  {
410-    id: "tandoori-kebabs",
411-    name: "TANDOORI AND KEBABS",
412-    sub: "Clay Oven Charcoal Delicacies",
413-    ico: "i-tandoori",
414-    count: "14 Items",
415-    rows: [
416-      {n:"Rotisserie Chicken (Full) (4 pcs)",p:"₹605",d:"nv",desc:"Whole chicken slowly roasted on a spinning rotisserie."},
417-      {n:"Tandoori Chicken (Full) (4 pcs)",p:"₹605",d:"nv",desc:"Classic spiced whole chicken roasted in clay tandoor."},
418-      {n:"Mutton Seekh Kebab (4 pcs)",p:"₹585",d:"nv",desc:"Spiced minced mutton skewered and charred over open coals."},
419-      {n:"Chicken Malai Tikka (8 pcs)",p:"₹505",d:"nv",desc:"Tender chicken in cream, cheese & subtle cardamom."},
420-      {n:"Chicken Pahadi Kebab (8 pcs)",p:"₹505",d:"nv",desc:"Chicken in fresh mint, coriander & green chilli paste."},
421-      {n:"Chicken Seekh Kebab (4 pcs)",p:"₹500",d:"nv",desc:"Minced chicken kebabs seasoned with fresh herbs."},
422-      {n:"Chicken Tikka (8 pcs)",p:"₹500",d:"nv",desc:"Classic red tikka marinated in spiced yoghurt."},
423-      {n:"Reshmi Kebab (8 pcs)",p:"₹500",d:"nv",desc:"Silky soft chicken kebabs with cashew paste."},
424-      {n:"Special Tangdi Kebab (2 pcs)",p:"₹495",d:"nv",desc:"Stuffed chicken drumsticks roasted in tandoori spices."},
425-      {n:"Chicken Wings (8 pcs)",p:"₹455",d:"nv",desc:"Crispy tandoori style chicken wings."},
426-      {n:"Paneer Pahadi Tikka (6 pcs)",p:"₹450",d:"v",desc:"Cottage cheese in fresh herb marinade and grilled."},
427-      {n:"Paneer Tikka (6 pcs)",p:"₹450",d:"v",desc:"Paneer cubes in spiced yoghurt and tandoori mix."},
428-      {n:"Rotisserie Chicken (Half)",p:"₹440",d:"nv",desc:"Half rotisserie chicken roasted to golden perfection."},
429-      {n:"Tandoori Chicken (Half)",p:"₹440",d:"nv",desc:"Half tandoori chicken grilled in clay oven."}
430-    ]
431-  },
432-  {
433-    id: "chicken",
434-    name: "CHICKEN",
435-    sub: "Rich Gravies & Curries",
436-    ico: "i-chicken",
437-    count: "9 Items",
438-    rows: [
439-      {n:"Blue Nile Chicken",p:"₹560",d:"nv",desc:"House-special rich gravy chicken with secret royal spices."},
440-      {n:"Butter Chicken Boneless",p:"₹555",d:"nv",desc:"Boneless chicken in buttery velvet tomato gravy."},
441-      {n:"Chicken Chilly Fry",p:"₹555",d:"nv",desc:"Spicy sauteed chicken chunks with onions & pepper."},
442-      {n:"Chicken Kolhapuri",p:"₹555",d:"nv",desc:"Fiery Kolhapuri spiced chicken curry."},
443-      {n:"Chicken Masala",p:"₹555",d:"nv",desc:"Thick onion-tomato spiced gravy chicken."},
444-      {n:"Chicken Saagwala",p:"₹555",d:"nv",desc:"Chicken cooked in fresh spinach puree and spices."},
445-      {n:"Chicken Tikka Masala",p:"₹555",d:"nv",desc:"Roasted chicken tikka in rich tomato gravy."},
446-      {n:"Chicken Kheema",p:"₹465",d:"nv",desc:"Minced chicken with peas and aromatic spices."},
447-      {n:"Gravy",p:"₹215",d:"nv",desc:"Side bowl of signature rich curry gravy."}
448-    ]
449-  },
450-  {
451-    id: "fish-prawns",
452-    name: "FISH AND PRAWNS",
453-    sub: "Seafood Specialties",
454-    ico: "i-fish",
455-    count: "10 Items",
456-    rows: [
457-      {n:"Fish Fry with Chips",p:"₹610",d:"nv",desc:"Crispy fried fish served with seasoned potato chips."},
458-      {n:"Fish Masala",p:"₹610",d:"nv",desc:"Fish in aromatic tomato-onion gravy."},
459-      {n:"Prawns Fry with Chips",p:"₹610",d:"nv",desc:"Golden fried prawns with potato chips."},
460-      {n:"Prawns Masala",p:"₹610",d:"nv",desc:"Prawns in semi-dry spiced masala gravy."},
461-      {n:"Tandoori Fish Pomfret (Full)",p:"₹610",d:"nv",desc:"Whole Pomfret in tandoori spices charred in clay tandoor."},
462-      {n:"Prawns Shashlik",p:"₹560",d:"nv",desc:"Skewered marinated prawns grilled with tangy glaze."},
463-      {n:"Hot & Sweet Fish",p:"₹550",d:"nv",desc:"Fish fillets in fiery sweet-and-spicy sauce."},
464-      {n:"Hot & Sweet Prawns",p:"₹550",d:"nv",desc:"Prawns stir-fried in sweet and spicy dark sauce."},
465-      {n:"Prawns Butter Garlic",p:"₹550",d:"nv",desc:"Prawns sautéed with butter, garlic, fresh coriander."},
466-      {n:"Prawns 65",p:"₹535",d:"nv",desc:"Deep-fried prawns in spicy marinade with curry leaves."}
467-    ]
468-  },
469-  {
470-    id: "mutton",
471-    name: "MUTTON",
472-    sub: "Rich Mutton Curries & Delicacies",
473-    ico: "i-irani",
474-    count: "8 Items",
475-    rows: [
476-      {n:"Blue Nile Mutton",p:"₹650",d:"nv",desc:"Signature rich mutton curry with Persian and Indian spices."},
477-      {n:"Mutton Kheema",p:"₹605",d:"nv",desc:"Minced mutton with onions, garlic, and ground spices."},
478-      {n:"Mutton Chilly Fry (Dry / Gravy)",p:"₹595",d:"nv",desc:"Mutton with green chillies, onions, and spices."},
479-      {n:"Mutton Kolhapuri",p:"₹595",d:"nv",desc:"Kolhapuri-style mutton with dry roasted spices."},
480-      {n:"Mutton Masala",p:"₹595",d:"nv",desc:"Traditional mutton curry in onion-tomato gravy."},
481-      {n:"Mutton Dal",p:"₹590",d:"nv",desc:"Mutton with yellow split lentils and tempered spices."},
482-      {n:"Mutton Saagwala",p:"₹590",d:"nv",desc:"Mutton in spiced creamy spinach gravy."},
483-      {n:"Mutton Paya Masala",p:"₹500",d:"nv",desc:"Slow-simmered paya gravy with traditional seasonings."}
484-    ]
485-  },
486-  {
487-    id: "brain-eggs",
488-    name: "BRAIN AND EGGS",
489-    sub: "Traditional Egg & Brain Dishes",
490-    ico: "i-brain",
491-    count: "5 Items",
492-    rows: [
493-      {n:"Brain Fry (Dry)",p:"₹440",d:"nv",desc:"Spiced brain fry sautéed dry with onions and herbs."},
494-      {n:"Brain Fry (Semi Gravy)",p:"₹440",d:"nv",desc:"Brain fry in semi-gravy with onion-tomato masala."},
495-      {n:"Brain Masala",p:"₹440",d:"nv",desc:"Brain in rich spicy onion-tomato gravy."},
496-      {n:"Egg Masala",p:"₹405",d:"nv",desc:"Boiled eggs in spiced tomato-onion curry."},
497-      {n:"Boiled Eggs",p:"₹66",d:"nv",desc:"Freshly boiled eggs, served plain or with pepper salt."}
498-    ]
499-  },
500-  {
501-    id: "rice",
502-    name: "RICE",
503-    sub: "Aromatic Rice & Biryanis",
504-    ico: "i-biryani",
505-    count: "16 Items",
506-    rows: [
507-      {n:"Mutton Chelo Kebab (Mild-spicy) + Pepsi",p:"₹625",d:"nv",desc:"Mutton kebabs over saffron butter rice with a Pepsi."},
508-      {n:"Fish Pulav",p:"₹610",d:"nv",desc:"Basmati rice cooked with fish and light spices."},
509-      {n:"Prawns Pulav",p:"₹610",d:"nv",desc:"Spiced pulao rice with fresh prawns."},
510-      {n:"Mutton Biryani / Pulav",p:"₹605",d:"nv",desc:"Classic mutton biryani layered with basmati."},
511-      {n:"Chicken Tikka Biryani (Boneless)",p:"₹600",d:"nv",desc:"Boneless chicken tikka layered with basmati rice."},
512-      {n:"Mutton Biryani Irani Style (Non-spicy)",p:"₹600",d:"nv",desc:"Irani-style non-spicy mutton biryani with saffron."},
513-      {n:"Chelo Murg (6 Chicken Tikka with Rice) + Pepsi",p:"₹590",d:"nv",desc:"6 chicken tikka with saffron butter rice and Pepsi."},
514-      {n:"Chicken Biryani / Pulav",p:"₹565",d:"nv",desc:"Classic spiced chicken biryani."},
515-      {n:"Chicken Biryani Irani Style (Non-spicy)",p:"₹560",d:"nv",desc:"Non-spicy chicken biryani Irani style."},
516-      {n:"Egg Pulav",p:"₹445",d:"nv",desc:"Mildly spiced pulao with boiled eggs."},
517-      {n:"Paneer Pulav",p:"₹405",d:"v",desc:"Basmati with paneer cubes and mild spices."},
518-      {n:"Veg. Biryani / Pulav",p:"₹405",d:"v",desc:"Mixed vegetable biryani dum style."},
519-      {n:"Green Peas Pulav",p:"₹395",d:"v",desc:"Aromatic basmati with green peas."},
520-      {n:"Jeera Fried Rice",p:"₹325",d:"v",desc:"Rice sautéed with cumin seeds."},
521-      {n:"Biryani Rice",p:"₹320",d:"v",desc:"Plain flavored biryani rice."},
522-      {n:"Plain Rice",p:"₹320",d:"v",desc:"Steamed long-grain basmati rice."}
523-    ]
524-  },
525-  {
526-    id: "papad-raita",
527-    name: "PAPAD AND RAITA",
528-    sub: "Accompaniments & Salads",
529-    ico: "i-papad",
530-    count: "6 Items",
531-    rows: [
532-      {n:"Pineapple Raita",p:"₹130",d:"v",desc:"Yogurt with sweet pineapple and cumin."},
533-      {n:"Curd",p:"₹110",d:"v",desc:"Fresh house-made plain curd."},
534-      {n:"Green Salad",p:"₹110",d:"v",desc:"Freshly sliced onions, cucumbers, tomatoes."},
535-      {n:"Veg. / Boondi Raita",p:"₹110",d:"v",desc:"Yogurt with boondi or chopped veg."},
536-      {n:"Masala Papad",p:"₹70",d:"v",desc:"Crisp papad with spicy onion-tomato mix."},
537-      {n:"Roasted / Fried Papad",p:"₹50",d:"v",desc:"Roasted or fried plain papadum."}
538-    ]
539-  },
540-  {
541-    id: "roti",
542-    name: "ROTI",
543-    sub: "Fresh Tandoori Breads & Bakery Bakes",
544-    ico: "i-roti",
545-    count: "25 Items",
546-    rows: [
547-      {n:"Blue Nile Chocolate Chip Cookie Jar",p:"₹265",d:"v",desc:"Chunky, gooey chocolate chip cookies."},
548-      {n:"Bread Pudding",p:"₹245",d:"v",desc:"Warm custard-soaked brioche with raisins."},
549-      {n:"Garlic Cheese Bread",p:"₹245",d:"v",desc:"Bread with garlic butter and molten mozzarella."},
550-      {n:"Almond Croissant",p:"₹215",d:"v",desc:"Butter croissant with almond frangipane."},
551-      {n:"Banoffee Tartlet",p:"₹195",d:"v",desc:"Banana, toffee and cream in tart shell."},
552-      {n:"Chocolate Croissant",p:"₹195",d:"v",desc:"Flaky croissant with dark chocolate heart."},
553-      {n:"Cinnamon Roll",p:"₹195",d:"v",desc:"Soft swirl of cinnamon and brown sugar."},
554-      {n:"Blue Nile Butter Croissant",p:"₹175",d:"v",desc:"36-layered all-butter croissant."},
555-      {n:"Garlic Cheese Naan",p:"₹166",d:"v",desc:"Naan stuffed with mozzarella, garlic and butter."},
556-      {n:"Garlic Butter Breadsticks",p:"₹165",d:"v",desc:"Crisp sticks with garlic butter and herbs."},
557-      {n:"Garlic Naan",p:"₹149",d:"v",desc:"Classic tandoor flatbread with garlic."},
558-      {n:"Eggless Blueberry Muffin",p:"₹145",d:"v",desc:"Tender muffin with blueberries."},
559-      {n:"Multi-Grain Bread Loaf",p:"₹145",d:"v",desc:"Seven grains, seeds and oats."},
560-      {n:"Palmiers",p:"₹145",d:"v",desc:"Crisp caramelised puff-pastry hearts."},
561-      {n:"Whole Wheat Bread Loaf",p:"₹120",d:"v",desc:"Stone-ground whole wheat loaf."},
562-      {n:"Butter Naan",p:"₹104",d:"v",desc:"Tandoor flatbread brushed with butter."},
563-      {n:"Kerala Butter Paratha",p:"₹104",d:"v",desc:"Multi-layered flaky paratha with butter."},
564-      {n:"Kerala Wheat Butter Paratha",p:"₹104",d:"v",desc:"Whole wheat multi-layered paratha."},
565-      {n:"Butter Roti",p:"₹95",d:"v",desc:"Whole wheat flatbread with butter."},
566-      {n:"Kerala Paratha",p:"₹95",d:"v",desc:"Flaky layered flatbread."},
567-      {n:"Kerala Wheat Paratha",p:"₹95",d:"v",desc:"Whole wheat flaky layered flatbread."},
568-      {n:"Naan",p:"₹95",d:"v",desc:"Plain soft leavened tandoori flatbread."},
569-      {n:"Tandoori Roti",p:"₹88",d:"v",desc:"Whole wheat bread baked in clay tandoor."},
570-      {n:"Blue Nile Signature Pav (4 pcs)",p:"₹85",d:"v",desc:"Legendary soft pav, baked fresh daily."},
571-      {n:"Bread Slice (2 pcs)",p:"₹22",d:"v",desc:"Soft white bread slices."}
572-    ]
573-  },
574-  {
575-    id: "veg",
576-    name: "VEG",
577-    sub: "Vegetarian Curries",
578-    ico: "i-veg",
579-    count: "16 Items",
580-    rows: [
581-      {n:"Paneer Tikka Masala",p:"₹460",d:"v",desc:"Grilled paneer tikka in tomato gravy."},
582-      {n:"Aaloo Mutter / Mutter Masala",p:"₹410",d:"v",desc:"Potatoes & green peas gravy."},
583-      {n:"Aaloo Palak",p:"₹410",d:"v",desc:"Potatoes with spinach puree."},
584-      {n:"Mixed Veg Curry",p:"₹410",d:"v",desc:"Garden vegetables in curry sauce."},
585-      {n:"Mushroom Masala",p:"₹410",d:"v",desc:"Fresh mushrooms in spiced gravy."},
586-      {n:"Mutter Paneer Masala",p:"₹410",d:"v",desc:"Green peas and paneer in gravy."},
587-      {n:"Palak Paneer",p:"₹410",d:"v",desc:"Cottage cheese in spinach gravy."},
588-      {n:"Paneer Makhanwala",p:"₹410",d:"v",desc:"Paneer in creamy tomato gravy."},
589-      {n:"Plain Palak",p:"₹410",d:"v",desc:"Seasoned spinach curry."},
590-      {n:"Vegetable Kolhapuri",p:"₹410",d:"v",desc:"Spicy mixed veg in Kolhapuri paste."},
591-      {n:"Vegetable Makhani",p:"₹410",d:"v",desc:"Mixed vegetables in buttery gravy."},
592-      {n:"Chana Masala",p:"₹405",d:"v",desc:"Traditional chickpea masala."},
593-      {n:"Paneer Bhurji",p:"₹385",d:"v",desc:"Scrambled paneer with onions & spices."},
594-      {n:"Dal Butter Fry",p:"₹365",d:"v",desc:"Tempered yellow dal with butter."},
595-      {n:"Dal Fry",p:"₹360",d:"v",desc:"Yellow lentils with garlic & cumin."},
596-      {n:"French Fries",p:"₹330",d:"v",desc:"Golden salted potato fries."}
597-    ]
598-  },
599-  {
600-    id: "shawarma",
601-    name: "SHAWARMA",
602-    sub: "Traditional Middle-Eastern Shawarmas",
603-    ico: "i-shawarma",
604-    count: "2 Items",
605-    rows: [
606-      {n:"Chicken Shawarma with Cold Drink",p:"₹360",d:"nv",desc:"Spiced chicken in warm flatbread with cold drink."},
607-      {n:"Paneer Shawarma with Cold Drink",p:"₹350",d:"v",desc:"Marinated paneer in warm flatbread with cold drink."}
608-    ]
609-  },
610-  {
611-    id: "wraps",
612-    name: "WRAPS",
613-    sub: "Signature Wraps with Pepsi",
614-    ico: "i-wrap",
615-    count: "7 Items",
616-    rows: [
617-      {n:"Butter Chicken Wrap + Pepsi",p:"₹565",d:"nv",desc:"Rich butter chicken in a soft wrap."},
618-      {n:"Chicken Malai Tikka Wrap + Pepsi",p:"₹565",d:"nv",desc:"Creamy malai tikka in a wrap."},
619-      {n:"Chicken Pahadi Wrap + Pepsi",p:"₹565",d:"nv",desc:"Green herb chicken pahadi wrap."},
620-      {n:"Chicken Tikka Wrap + Pepsi",p:"₹565",d:"nv",desc:"Char-grilled tikka in warm flatbread."},
621-      {n:"Mutton Seekh Wrap + Pepsi",p:"₹565",d:"nv",desc:"Juicy mutton seekh wrap."},
622-      {n:"Paneer Pahadi Wrap + Pepsi",p:"₹565",d:"v",desc:"Herb-marinated paneer wrap."},
623-      {n:"Paneer Tikka Wrap + Pepsi",p:"₹565",d:"v",desc:"Smoky paneer tikka wrap."}
624-    ]
625-  },
626-  {
627-    id: "soup",
628-    name: "SOUP",
629-    sub: "Comforting Slow-Simmered Broths",
630-    ico: "i-soup",
631-    count: "12 Items",
632-    rows: [
633-      {n:"Mutton Paya Soup (All Day)",p:"₹455",d:"nv",desc:"Slow-simmered paya gravy."},
634-      {n:"Chicken Clear Soup",p:"₹325",d:"nv",desc:"Delicate chicken consommé."},
635-      {n:"Chicken Soup",p:"₹325",d:"nv",desc:"Comforting chicken broth."},
636-      {n:"Hot & Sour Chicken Soup",p:"₹325",d:"nv",desc:"Fiery and tangy chicken soup."},
637-      {n:"Hot & Sour Veg. Soup",p:"₹325",d:"v",desc:"Punchy tangy vegetable soup."},
638-      {n:"Manchow Chicken Soup",p:"₹325",d:"nv",desc:"Spiced chicken manchow soup."},
639-      {n:"Manchow Veg. Soup",p:"₹325",d:"v",desc:"Classic vegetable manchow soup."},
640-      {n:"Mutton Soup",p:"₹325",d:"nv",desc:"Rich mutton broth with ginger."},
641-      {n:"Sweet Corn Chicken Soup",p:"₹325",d:"nv",desc:"Sweet corn and chicken soup."},
642-      {n:"Tomato Soup",p:"₹325",d:"v",desc:"Velvety roasted tomato soup."},
643-      {n:"Veg. Sweet Corn Soup",p:"₹325",d:"v",desc:"Creamy sweet corn soup."},
644-      {n:"Vegetable Clear Soup",p:"₹325",d:"v",desc:"Light broth with garden vegetables."}
645-    ]
646-  },
647-  {
648-    id: "veg-starter",
649-    name: "VEG STARTER",
650-    sub: "Crispy Vegetarian Starters",
651-    ico: "i-vegstar",
652-    count: "9 Items",
653-    rows: [
654-      {n:"Gobhi 65 (Dry / Gravy)",p:"₹405",d:"v",desc:"Crispy cauliflower in hot spices."},
655-      {n:"Gobhi Manchurian (Dry / Gravy)",p:"₹405",d:"v",desc:"Cauliflower in Manchurian sauce."},
656-      {n:"Mushroom 65 (Dry / Gravy)",p:"₹405",d:"v",desc:"Deep-fried mushrooms in spicy marinade."},
657-      {n:"Mushroom Butter Garlic",p:"₹405",d:"v",desc:"Mushrooms tossed with garlic and butter."},
658-      {n:"Paneer Butter Garlic",p:"₹405",d:"v",desc:"Paneer in butter, cream, and garlic sauce."},
659-      {n:"Paneer Chilli (Dry / Gravy)",p:"₹405",d:"v",desc:"Crispy paneer with green chillies."},
660-      {n:"Paneer Manchurian (Dry / Gravy)",p:"₹405",d:"v",desc:"Paneer in tangy Manchurian sauce."},
661-      {n:"Veg. Manchurian (Dry / Gravy)",p:"₹405",d:"v",desc:"Veg dumplings in Manchurian sauce."},
662-      {n:"Veg. Spring Roll (6 pcs)",p:"₹405",d:"v",desc:"Crispy wraps with stir-fried vegetables."}
663-    ]
664-  },
665-  {
666-    id: "veg-chinese-noodles-rice",
667-    name: "VEG CHINESE NOODLES & RICE",
668-    sub: "Veg Chinese Favorites",
669-    ico: "i-vcn",
670-    count: "6 Items",
671-    rows: [
672-      {n:"Veg. Chowmein",p:"₹450",d:"v",desc:"Stir-fried noodles with vegetables."},
673-      {n:"Veg. Schezwan Fried Rice",p:"₹450",d:"v",desc:"Rice with vegetables and Schezwan sauce."},
674-      {n:"Veg. Schezwan Hakka Noodles",p:"₹450",d:"v",desc:"Noodles with vegetables and Schezwan sauce."},
675-      {n:"Veg. American Chopsuey",p:"₹440",d:"v",desc:"Crispy noodles with sweet and sour gravy."},
676-      {n:"Veg. Fried Rice",p:"₹440",d:"v",desc:"Wok-tossed rice with vegetables."},
677-      {n:"Veg. Hakka Noodles",p:"₹440",d:"v",desc:"Stir-fried noodles with vegetables and soy."}
678-    ]
679-  },
680-  {
681-    id: "non-veg-starter",
682-    name: "NON-VEG STARTER",
683-    sub: "Classic Chicken Appetizers",
684-    ico: "i-nvstar",
685-    count: "10 Items",
686-    rows: [
687-      {n:"Chicken Shashlik",p:"₹560",d:"nv",desc:"Skewered chicken with vegetables."},
688-      {n:"Mix Butter Garlic (Vegetable Mix)",p:"₹555",d:"nv",desc:"Non-veg starter mix in butter garlic."},
689-      {n:"Butter Garlic Chicken",p:"₹545",d:"nv",desc:"Chicken sautéed in butter and garlic."},
690-      {n:"Hot & Sweet Chicken",p:"₹540",d:"nv",desc:"Crispy chicken in sweet-spicy glaze."},
691-      {n:"Chicken 65",p:"₹530",d:"nv",desc:"Deep-fried chicken in spicy marinade."},
692-      {n:"Chicken Manchurian",p:"₹530",d:"nv",desc:"Chicken in Manchurian sauce."},
693-      {n:"Hot Wings",p:"₹530",d:"nv",desc:"Spicy hot sauce chicken wings."},
694-      {n:"Soya Chicken Chilli Fry",p:"₹530",d:"nv",desc:"Chicken stir-fried with chillies and soy."},
695-      {n:"Chicken Lollypop",p:"₹525",d:"nv",desc:"Crispy chicken drumettes."},
696-      {n:"Ginger Chicken",p:"₹525",d:"nv",desc:"Chicken with ginger and chillies."}
697-    ]
698-  },
699-  {
700-    id: "nonveg-chinese-noodles",
701-    name: "NONVEG CHINESE NOODLES",
702-    sub: "Wok-Fried Chicken Noodles",
703-    ico: "i-nvnd",
704-    count: "4 Items",
705-    rows: [
706-      {n:"Chicken Schezwan Noodles",p:"₹550",d:"nv",desc:"Noodles with chicken and Schezwan sauce."},
707-      {n:"Chicken American Chopsuey",p:"₹545",d:"nv",desc:"Crispy noodles with chicken gravy."},
708-      {n:"Chicken Chowmein",p:"₹545",d:"nv",desc:"Stir-fried noodles with chicken."},
709-      {n:"Chicken Hakka Noodles",p:"₹545",d:"nv",desc:"Noodles with chicken and soy."}
710-    ]
711-  },
712-  {
713-    id: "nonveg-chinese-rice",
714-    name: "NONVEG CHINESE RICE",
715-    sub: "Fragrant Wok Fried Rice",
716-    ico: "i-nvrice",
717-    count: "8 Items",
718-    rows: [
719-      {n:"Mixed Schezwan Fried Rice",p:"₹560",d:"nv",desc:"Rice with chicken, prawns, egg and Schezwan."},
720-      {n:"Mixed Fried Rice",p:"₹555",d:"nv",desc:"Rice with chicken, prawns, egg, and veg."},
721-      {n:"Fish Schezwan Fried Rice",p:"₹550",d:"nv",desc:"Rice with fish and Schezwan."},
722-      {n:"Prawns Schezwan Fried Rice",p:"₹550",d:"nv",desc:"Rice with prawns and Schezwan."},
723-      {n:"Chicken Fried Rice",p:"₹540",d:"nv",desc:"Rice with chicken and eggs."},
724-      {n:"Chicken Schezwan Fried Rice",p:"₹540",d:"nv",desc:"Rice with chicken and Schezwan."},
725-      {n:"Fish Fried Rice",p:"₹540",d:"nv",desc:"Rice with fish and scallions."},
726-      {n:"Prawns Fried Rice",p:"₹540",d:"nv",desc:"Rice with prawns and soy."}
727-    ]
728-  },
729-  {
730-    id: "desserts",
731-    name: "DESSERTS",
732-    sub: "Sweet Finales & Pastries",
733-    ico: "i-dessert",
734-    count: "14 Items",
735-    rows: [
736-      {n:"Caramel Custard with Ice Cream & Jelly",p:"₹390",d:"v",desc:"Caramel custard with ice cream and jelly."},
737-      {n:"Fruit Salad with Ice Cream & Jelly",p:"₹390",d:"v",desc:"Fruit salad with ice cream and jelly."},
738-      {n:"Fruit Salad with Ice Cream",p:"₹375",d:"v",desc:"Fruit salad with ice cream."},
739-      {n:"Fruit Salad with Jelly",p:"₹375",d:"v",desc:"Fruits with sweet jelly cubes."},
740-      {n:"Falooda with Ice Cream",p:"₹365",d:"v",desc:"Rich falooda drink with ice cream."},
741-      {n:"Gulab Jamun with Ice Cream",p:"₹345",d:"v",desc:"Hot gulab jamuns with vanilla ice cream."},
742-      {n:"Brownie with Ice Cream",p:"₹340",d:"v",desc:"Rich brownie with vanilla ice cream."},
743-      {n:"Caramel Custard with Ice Cream",p:"₹340",d:"v",desc:"Caramel custard with ice cream."},
744-      {n:"Caramel Custard with Jelly",p:"₹340",d:"v",desc:"Caramel custard with flavored jelly."},
745-      {n:"Fruit Salad",p:"₹340",d:"v",desc:"Fresh seasonal fruits."},
746-      {n:"Jelly with Ice Cream",p:"₹330",d:"v",desc:"Sweet jelly with vanilla ice cream."},
747-      {n:"Gulab Jamun",p:"₹290",d:"v",desc:"Warm syrup-soaked dumplings."},
748-      {n:"Caramel Custard",p:"₹285",d:"v",desc:"House-baked custard with caramel."},
749-      {n:"Jelly",p:"₹270",d:"v",desc:"Sweet flavored gelatin jelly."}
750-    ]
751-  },
752-  {
753-    id: "ice-shakes",
754-    name: "ICE SHAKES",
755-    sub: "Creamy Milkshakes with Ice Cream",
756-    ico: "i-shake",
757-    count: "4 Items",
758-    rows: [
759-      {n:"Chocolate Shake with Ice Cream",p:"₹370",d:"v",desc:"Chocolate milkshake with ice cream."},
760-      {n:"Mango Shake with Ice Cream",p:"₹370",d:"v",desc:"Mango milkshake with ice cream."},
761-      {n:"Strawberry Shake with Ice Cream",p:"₹370",d:"v",desc:"Strawberry shake with ice cream."},
762-      {n:"Vanilla Shake with Ice Cream",p:"₹370",d:"v",desc:"Vanilla shake with ice cream."}
763-    ]
764-  },
765-  {
766-    id: "ice-creams",
767-    name: "ICE CREAMS",
768-    sub: "Premium Ice Cream Flavors",
769-    ico: "i-icecream",
770-    count: "6 Items",
771-    rows: [
772-      {n:"Cassata",p:"₹280",d:"v",desc:"Layered cassata ice cream."},
773-      {n:"Butterscotch",p:"₹260",d:"v",desc:"Crunchy butterscotch ice cream."},
774-      {n:"Chocolate",p:"₹260",d:"v",desc:"Rich chocolate ice cream."},
775-      {n:"Mango",p:"₹260",d:"v",desc:"Alphonso mango ice cream."},
776-      {n:"Strawberry",p:"₹260",d:"v",desc:"Sweet strawberry ice cream."},
777-      {n:"Vanilla",p:"₹260",d:"v",desc:"Classic vanilla ice cream."}
778-    ]
779-  },
780-  {
781-    id: "kulfi",
782-    name: "KULFI",
783-    sub: "Traditional Indian Kulfis",
784-    ico: "i-kulfi",
785-    count: "4 Items",
786-    rows: [
787-      {n:"Kulfi Falooda",p:"₹315",d:"v",desc:"Kulfi with falooda and rose syrup."},
788-      {n:"Kesar Pista (Kulfi)",p:"₹280",d:"v",desc:"Saffron and pistachio kulfi."},
789-      {n:"Mango (Kulfi)",p:"₹270",d:"v",desc:"Traditional mango kulfi."},
790-      {n:"Malai Kulfi",p:"₹250",d:"v",desc:"Classic condensed milk kulfi."}
791-    ]
792-  },
793-  {
794-    id: "baklava",
795-    name: "BAKLAVA",
796-    sub: "Fine Turkish Baklavas",
797-    ico: "i-baklava",
798-    count: "2 Items",
799-    rows: [
800-      {n:"Baklava with Ice Cream",p:"₹375",d:"v",desc:"Phyllo pastry with ice cream."},
801-      {n:"Baklava (3 Pcs)",p:"₹325",d:"v",desc:"Traditional baked phyllo with nuts and syrup."}
802-    ]
803-  },
804-  {
805-    id: "hot-cold-sips",
806-    name: "HOT AND COLD SIPS",
807-    sub: "Refreshing Beverages & Lassis",
808-    ico: "i-drink",
809-    count: "10 Items",
810-    rows: [
811-      {n:"Cold Coffee",p:"₹180",d:"v",desc:"Chilled coffee blended with milk."},
812-      {n:"Fresh Lime Soda",p:"₹160",d:"v",desc:"Fizzy lime soda."},
813-      {n:"Mango Lassi",p:"₹160",d:"v",desc:"Creamy mango lassi."},
814-      {n:"Masala Soda",p:"₹160",d:"v",desc:"Fizzy soda with tangy spices."},
815-      {n:"Lassi (Sweet / Salty)",p:"₹150",d:"v",desc:"Traditional thick yogurt drink."},
816-      {n:"Solkadhi",p:"₹150",d:"v",desc:"Kokum and coconut milk drink."},
817-      {n:"Fresh Lime Water",p:"₹145",d:"v",desc:"Fresh squeezed lime juice."},
818-      {n:"Diet Coke",p:"₹80",d:"v",desc:"Sugar-free Coca-Cola."},
819-      {n:"Soft Drinks",p:"₹80",d:"v",desc:"Chilled canned soft drinks."},
820-      {n:"Mineral Water",p:"₹50",d:"v",desc:"Packaged drinking water."}
821-    ]
822-  },
823-  {
824-    id: "bakery-pack",
825-    name: "BAKERY PACK",
826-    sub: "Fresh from the Oven",
827-    ico: "i-bakery",
828-    count: "17 Items",
829-    rows: [
830-      {n:"Baklava Box",p:"₹665",d:"v",desc:"Freshly baked traditional baklava."},
831-      {n:"Roat",p:"₹260",d:"v",desc:"Crispy traditional baked biscuit."},
832-      {n:"Plum Cake",p:"₹195",d:"v",desc:"Rich moist plum cake slice."},
833-      {n:"Pineapple Roll",p:"₹195",d:"v",desc:"Sweet pineapple filled pastry roll."},
834-      {n:"Marble Cake",p:"₹195",d:"v",desc:"Classic marble cake slice."},
835-      {n:"Mawa Cake",p:"₹190",d:"v",desc:"Rich mawa infused cake."},
836-      {n:"Jam Roll Cake",p:"₹190",d:"v",desc:"Sponge cake rolled with fruit jam."},
837-      {n:"Sugar Free Biscuits",p:"₹175",d:"v",desc:"Diet-friendly crispy biscuits."},
838-      {n:"Honey Complex Biscuits",p:"₹155",d:"v",desc:"Crunchy honey flavored biscuits."},
839-      {n:"Shrewsbury Biscuits",p:"₹145",d:"v",desc:"Classic buttery shortbread."},
840-      {n:"Brazil Nut Biscuits",p:"₹145",d:"v",desc:"Crispy biscuits with Brazil nuts."},
841-      {n:"Makroom",p:"₹135",d:"v",desc:"Sweet and chewy macaroon drops."},
842-      {n:"Fine Khari",p:"₹95",d:"v",desc:"Delicate extra-flaky puff pastry."},
843-      {n:"Khari",p:"₹85",d:"v",desc:"Traditional flaky puff pastry biscuit."},
844-      {n:"Jeera Batar",p:"₹85",d:"v",desc:"Crispy cumin-flavored butter biscuit."},
845-      {n:"Toast",p:"₹85",d:"v",desc:"Crunchy baked milk toast slices."},
846-      {n:"White Bread",p:"₹33",d:"v",desc:"Freshly baked soft white bread loaf."}
847-    ]
848-  }
849-];
850-
851-/* ── Supabase ── */
852-const SUPABASE_URL = 'https://hcgangjurvsisqdrwkqo.supabase.co';
853-const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZ2FuZ2p1cnZzaXNxZHJ3a3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjA4ODMsImV4cCI6MjEwMTU5Njg4M30.Ipq0PSp2dbRVA9Ik8xQtscozPL4qz9rGoCS6NaFmHu8';
854-// Supabase v2 CDN exposes the client on window.supabase
855-const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
856-
857-/* ── State ── */
858-let menuData = [];
859-let activeCatId = null;
860-let selectedItems = new Set();
861-
862-async function loadData(){
863-  try {
864-    const { data, error } = await _supabase.from('global_menu').select('data').eq('id', 1).single();
865-    if (error) throw new Error(error.message);
866-    if (data && Array.isArray(data.data) && data.data.length > 0) {
867-      menuData = data.data;
868-      return;
869-    }
870-    // Table row exists but is empty — seed defaults
871-    menuData = JSON.parse(JSON.stringify(DEFAULT_DATA));
872-    const { error: upsertErr } = await _supabase.from('global_menu').upsert({ id: 1, data: menuData });
873-    if (upsertErr) throw new Error('Seed failed: ' + upsertErr.message);
874-  } catch(e){
875-    console.error('Supabase error:', e.message);
876-    document.getElementById('sidebar').innerHTML += `<div style="color:red;padding:12px;font-size:0.8rem;">DB Error: ${e.message}</div>`;
877-    menuData = JSON.parse(JSON.stringify(DEFAULT_DATA));
878-  }
879-
880-  // ENFORCE DYNAMIC SORTING HIGH-TO-LOW ON EVERY LOAD
881-  function parsePrice(p) {
882-    if (!p) return 0;
883-    const match = p.replace(/,/g, '').match(/[\d]+(\.\d+)?/);
884-    return match ? parseFloat(match[0]) : 0;
885-  }
886-  menuData.forEach(cat => {
887-    if (cat.rows && Array.isArray(cat.rows)) {
888-      cat.rows.sort((a, b) => parsePrice(b.p) - parsePrice(a.p));
889-    }
890-  });
891-}
892-
893-async function saveData(){
894-  menuData.forEach(cat => {
895-    if(cat.rows) cat.count = cat.rows.length + ' Items';
896-  });
897-  const { error } = await _supabase.from('global_menu').upsert({ id: 1, data: menuData });
898-  if (error) {
899-    showToast('Save failed: ' + error.message, 'error');
900-    console.error('Supabase save error:', error);
901-    return false;
902-  }
903-  return true;
904-}
905-
906-function getRows(cat){
907-  if(cat.rows) return cat.rows;
908-  if(cat.item) return [{ n: cat.item.name, p: cat.item.price, d: cat.item.d, desc: cat.item.desc, img: cat.item.img }];
909-  return [];
910-}
911-function setRows(cat, rows){
912-  if(cat.kind === 'hero' && rows.length > 0){
913-    const r = rows[0];
914-    cat.item = { name: r.n, price: r.p, d: r.d, desc: r.desc, img: r.img, note: cat.item?.note || '', tags: cat.item?.tags || [] };
915-    return;
916-  }
917-  cat.rows = rows;
918-}
919-
920-/* ── Toast ── */
921-function showToast(msg, type='success'){
922-  const t = document.getElementById('toast');
923-  t.textContent = msg;
924-  t.className = 'toast ' + type;
925-  requestAnimationFrame(()=>{ t.classList.add('on'); });
926-  setTimeout(()=>{ t.classList.remove('on'); }, 2400);
927-}
928-
929-/* ── Build Sidebar ── */
930-function buildSidebar(){
931-  const sb = document.getElementById('sidebar');
932-  sb.innerHTML = '<div class="sidebar-title">Categories</div>';
933-  menuData.forEach((cat, idx) => {
934-    const rows = getRows(cat);
935-    const el = document.createElement('div');
936-    el.className = 'cat-item' + (cat.id === activeCatId ? ' active' : '');
937-    el.style.cssText = 'display:flex;align-items:center;gap:4px;padding-right:4px;';
938-    el.innerHTML = `
939-      <span style="flex:1;cursor:pointer;" class="cat-label">${cat.name}</span>
940-      <span class="cat-count">${rows.length}</span>
941-      <button title="Move up" style="background:none;border:none;cursor:pointer;padding:2px 4px;font-size:0.9rem;color:var(--text-light);line-height:1;" data-swap="up" data-idx="${idx}">▲</button>
942-      <button title="Move down" style="background:none;border:none;cursor:pointer;padding:2px 4px;font-size:0.9rem;color:var(--text-light);line-height:1;" data-swap="down" data-idx="${idx}">▼</button>
943-    `;
944-    el.querySelector('.cat-label').addEventListener('click', ()=>{ activeCatId = cat.id; selectedItems.clear(); buildSidebar(); buildContent(); });
945-    el.querySelectorAll('button[data-swap]').forEach(btn => {
946-      btn.addEventListener('click', async (e) => {
947-        e.stopPropagation();
948-        const i = parseInt(btn.dataset.idx);
949-        const dir = btn.dataset.swap;
950-        if (dir === 'up' && i > 0) { [menuData[i-1], menuData[i]] = [menuData[i], menuData[i-1]]; }
951-        else if (dir === 'down' && i < menuData.length - 1) { [menuData[i], menuData[i+1]] = [menuData[i+1], menuData[i]]; }
952-        else return;
953-        await saveData();
954-        buildSidebar();
955-        showToast('Category moved');
956-      });
957-    });
958-    sb.appendChild(el);
959-  });
960-  
961-  const addBtn = document.createElement('div');
962-  addBtn.className = 'cat-item';
963-  addBtn.style = 'justify-content: center; color: var(--primary); font-weight: bold; border-top: 1px solid var(--beige-warm); margin-top: 10px; padding-top: 15px;';
964-  addBtn.innerHTML = `<span>+ Add Category</span>`;
965-  addBtn.addEventListener('click', async () => {
966-    const name = prompt("Enter new category name:");
967-    if(!name || !name.trim()) return;
968-    const id = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
969-    menuData.push({
970-      id: id,
971-      name: name.trim().toUpperCase(),
972-      sub: "New Category",
973-      ico: "i-veg",
974-      count: "0 Items",
975-      rows: []
976-    });
977-    activeCatId = id;
978-    buildSidebar();
979-    buildContent();
980-    await saveData();
981-    showToast("Category created & synced!");
982-  });
983-  sb.appendChild(addBtn);
984-}
985-
986-/* ── Build Content ── */
987-function buildContent(){
988-  const cat = menuData.find(c => c.id === activeCatId);
989-  if(!cat){ document.getElementById('content').innerHTML = '<p style="padding:40px;color:var(--text-light);">Select a category from the sidebar.</p>'; return; }
990-  const rows = getRows(cat);
991-  const header = document.getElementById('contentHeader');
992-  header.innerHTML = `
993-    <div style="flex:1; max-width:400px; display:flex; flex-direction:column; gap:8px;">
994-      <input type="text" id="editCatName" value="${escHtml(cat.name)}" class="field-input" style="font-family:var(--serif); font-size:1.8rem; font-weight:600; padding:4px 8px; border:1px solid transparent; background:transparent; width:100%; border-bottom:1px solid var(--beige-dark);" placeholder="Category Name">
995-      <input type="text" id="editCatSub" value="${escHtml(cat.sub || '')}" class="field-input" style="font-size:0.85rem; color:var(--text-light); padding:4px 8px; border:1px solid transparent; background:transparent; width:100%; border-bottom:1px solid var(--beige-dark);" placeholder="Category Subtitle">
996-    </div>
997-    <div class="toolbar">
998-      <button class="tool-btn" id="btnAddItem">
999-        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
1000-        Add Item
1001-      </button>
1002-      <button class="tool-btn" id="btnMoveSelected">
1003-        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4"/></svg>
1004-        Move Selected
1005-      </button>
1006-      <button class="tool-btn" id="btnDeleteSelected" style="color:var(--danger);">
1007-        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
1008-        Delete Selected
1009-      </button>
1010-      <button class="tool-btn" id="btnDeleteCat" style="color:#fff; background:var(--danger); border:none;">
1011-        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
1012-        Delete Category
1013-      </button>
1014-    </div>
1015-  `;
1016-
1017-  document.getElementById('editCatName').addEventListener('change', async (e) => {
1018-    cat.name = e.target.value;
1019-    await saveData();
1020-    buildSidebar();
1021-  });
1022-
1023-  // ── Category name / subtitle inline editing ──
1024-  document.getElementById('editCatName').addEventListener('change', async (e) => {
1025-    cat.name = e.target.value.trim() || cat.name;
1026-    await saveData();
1027-    buildSidebar();
1028-  });
1029-
1030-  document.getElementById('editCatSub').addEventListener('change', async (e) => {
1031-    cat.sub = e.target.value;
1032-    await saveData();
1033-  });
1034-
1035-  // ── Add Item ──
1036-  document.getElementById('btnAddItem').addEventListener('click', async () => {
1037-    const newRows = getRows(cat);
1038-    newRows.push({ n: 'New Item', p: '₹0', d: 'v', desc: '' });
1039-    // Sort high‑to‑low by price after insertion
1040-    newRows.sort((a, b) => {
1041-      const pa = parseFloat(a.p.replace(/[^\d.]/g, '')) || 0;
1042-      const pb = parseFloat(b.p.replace(/[^\d.]/g, '')) || 0;
1043-      return pb - pa;
1044-    });
1045-    setRows(cat, newRows);
1046-    await saveData();
1047-    buildContent();
1048-    buildSidebar();
1049-    showToast('Item added');
1050-  });
1051-
1052-  // ── Move Selected ──
1053-  document.getElementById('btnMoveSelected').addEventListener('click', () => {
1054-    if(selectedItems.size === 0){ showToast('Select items first', 'error'); return; }
1055-    openMoveModal();
1056-  });
1057-
1058-  // ── Delete Selected Items ──
1059-  document.getElementById('btnDeleteSelected').addEventListener('click', async () => {
1060-    if(selectedItems.size === 0){ showToast('Select items first', 'error'); return; }
1061-    if(!confirm(`Delete ${selectedItems.size} item(s)?`)) return;
1062-    const currentRows = getRows(cat);
1063-    const newRows = currentRows.filter((_, i) => !selectedItems.has(i));
1064-    setRows(cat, newRows);
1065-    selectedItems.clear();
1066-    await saveData();
1067-    buildContent();
1068-    buildSidebar();
1069-    showToast('Items deleted & saved');
1070-  });
1071-
1072-  // ── Delete Entire Category ──
1073-  document.getElementById('btnDeleteCat').addEventListener('click', async () => {
1074-    if(!confirm(`Delete the entire "${cat.name}" category and ALL its items? This cannot be undone.`)) return;
1075-    const idx = menuData.findIndex(c => c.id === activeCatId);
1076-    if(idx !== -1) menuData.splice(idx, 1);
1077-    activeCatId = menuData[0]?.id || null;
1078-    selectedItems.clear();
1079-    await saveData();
1080-    buildSidebar();
1081-    buildContent();
1082-    showToast(`Category "${cat.name}" deleted`);
1083-  });
1084-
1085-  const oldGrid = document.getElementById('itemsGrid');
1086-  const newGrid = oldGrid.cloneNode(false); // clone without children = kills all old listeners
1087-  oldGrid.parentNode.replaceChild(newGrid, oldGrid);
1088-  const grid = newGrid;
1089-
1090-  rows.forEach((item, idx) => {
1091-    const card = document.createElement('div');
1092-    card.className = 'admin-item' + (selectedItems.has(idx) ? ' selected' : '');
1093-
1094-    card.innerHTML = `
1095-      <div class="item-top">
1096-        <div class="item-photo" data-idx="${idx}">
1097-          ${item.img
1098-            ? `<img src="${item.img}" alt="${item.n}">`
1099-            : `<div class="photo-placeholder">
1100-                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
1101-                Upload
1102-               </div>`
1103-          }
1104-          <input type="file" accept="image/*" style="display:none;" data-idx="${idx}">
1105-        </div>
1106-        <div class="item-info">
1107-          <div class="field-row">
1108-            <div class="field-label">Dish Name</div>
1109-            <input class="field-input" type="text" value="${escHtml(item.n || '')}" data-field="n" data-idx="${idx}">
1110-          </div>
1111-          <div class="field-row-inline">
1112-            <div class="field-row">
1113-              <div class="field-label">Price</div>
1114-              <input class="field-input" type="text" value="${escHtml(item.p || '')}" data-field="p" data-idx="${idx}">
1115-            </div>
1116-            <div class="field-row">
1117-              <div class="field-label">Diet</div>
1118-              <select class="field-input" data-field="d" data-idx="${idx}">
1119-                <option value="v" ${item.d==='v'?'selected':''}>🟢 Veg</option>
1120-                <option value="nv" ${item.d==='nv'?'selected':''}>🔴 Non-Veg</option>
1121-              </select>
1122-            </div>
1123-          </div>
1124-        </div>
1125-      </div>
1126-      <div class="field-row">
1127-        <div class="field-label">Description</div>
1128-        <textarea class="field-input" data-field="desc" data-idx="${idx}">${escHtml(item.desc || '')}</textarea>
1129-      </div>
1130-      <div class="item-actions-bar">
1131-        <label class="item-select-cb">
1132-          <input type="checkbox" data-selidx="${idx}" ${selectedItems.has(idx)?'checked':''}>
1133-          <span>Select</span>
1134-        </label>
1135-        <div class="action-btns">
1136-          ${item.img ? `<button class="action-btn danger" title="Delete Image" data-action="delimg" data-idx="${idx}" style="font-size:0.7rem;padding:4px 8px;gap:4px;"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>Del Img</button>` : ''}
1137-          <button class="action-btn" title="Move up" data-action="up" data-idx="${idx}">
1138-            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
1139-          </button>
1140-          <button class="action-btn" title="Move down" data-action="down" data-idx="${idx}">
1141-            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
1142-          </button>
1143-          <button class="action-btn" title="Move to category" data-action="move" data-idx="${idx}">
1144-            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4"/></svg>
1145-          </button>
1146-          <button class="action-btn danger" title="Delete Item" data-action="del" data-idx="${idx}">
1147-            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
1148-          </button>
1149-        </div>
1150-      </div>
1151-    `;
1152-    grid.appendChild(card);
1153-  });
1154-
1155-  // Fresh event listeners — only one set, bound to current cat
1156-  // Debounced auto-save: fires 1.2s after user stops typing
1157-  let saveTimer = null;
1158-  function debouncedSave() {
1159-    clearTimeout(saveTimer);
1160-    saveTimer = setTimeout(() => saveData(), 1200);
1161-  }
1162-
1163-  grid.addEventListener('input', e => {
1164-    const el = e.target;
1165-    if(!el.dataset.field) return;
1166-    const idx = parseInt(el.dataset.idx);
1167-    const r = getRows(cat);
1168-    if(r[idx]) r[idx][el.dataset.field] = el.value;
1169-    setRows(cat, r); // apply changes to hero items
1170-    debouncedSave(); // auto-save every rename/price/desc change
1171-  });
1172-
1173-  grid.addEventListener('change', e => {
1174-    const el = e.target;
1175-    // Checkbox select — no save needed
1176-    if(el.type === 'checkbox' && el.dataset.selidx !== undefined){
1177-      const idx = parseInt(el.dataset.selidx);
1178-      if(el.checked) selectedItems.add(idx); else selectedItems.delete(idx);
1179-      el.closest('.admin-item').classList.toggle('selected', el.checked);
1180-      return;
1181-    }
1182-    // Diet dropdown — save immediately
1183-    if(el.dataset.field === 'd'){
1184-      const idx = parseInt(el.dataset.idx);
1185-      const r = getRows(cat);
1186-      if(r[idx]) r[idx].d = el.value;
1187-      setRows(cat, r);
1188-      saveData().then(() => showToast('Diet updated'));
1189-      return;
1190-    }
1191-    // File input (photo) — Compress before saving to prevent DB bloat/crashes
1192-    if(el.type === 'file' && el.dataset.idx !== undefined){
1193-      const idx = parseInt(el.dataset.idx);
1194-      const file = el.files[0];
1195-      if(!file) return;
1196-
1197-      showToast('Uploading full-HD photo...');
1198-      
1199-      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
1200-      
1201-      try {
1202-        const { data, error } = await _supabase.storage.from('menu-images').upload(fileName, file, {
1203-          cacheControl: '31536000',
1204-          upsert: false
1205-        });
1206-
1207-        if (error) throw error;
1208-
1209-        const { data: publicUrlData } = _supabase.storage.from('menu-images').getPublicUrl(fileName);
1210-        const imageUrl = publicUrlData.publicUrl;
1211-        
1212-        const r = getRows(cat);
1213-        if(r[idx]) r[idx].img = imageUrl;
1214-        setRows(cat, r);
1215-        
1216-        showToast('Saving to menu database...');
1217-        await saveData();
1218-        buildContent();
1219-        showToast('Photo uploaded successfully!');
1220-      } catch(err) {
1221-        showToast('Failed to upload photo', 'error');
1222-        console.error(err);
1223-      }
1224-    }
1225-  });
1226-
1227-  grid.addEventListener('click', e => {
1228-    const btn = e.target.closest('[data-action]');
1229-    if(!btn) {
1230-      const photo = e.target.closest('.item-photo');
1231-      if(photo){ photo.querySelector('input[type="file"]').click(); }
1232-      return;
1233-    }
1234-    const action = btn.dataset.action;
1235-    const idx = parseInt(btn.dataset.idx);
1236-    const r = getRows(cat);
1237-
1238-    if(action === 'del'){
1239-      if(!confirm('Delete this item?')) return;
1240-      r.splice(idx, 1);
1241-      setRows(cat, r);
1242-      selectedItems.clear();
1243-      saveData().then(() => showToast('Item deleted'));
1244-      buildContent(); buildSidebar();
1245-    }
1246-    if(action === 'delimg'){
1247-      if(!confirm('Remove the photo from this item?')) return;
1248-      if(r[idx]) delete r[idx].img;
1249-      setRows(cat, r);
1250-      saveData().then(() => { showToast('Photo removed'); buildContent(); });
1251-    }
1252-    if(action === 'up' && idx > 0){
1253-      [r[idx-1], r[idx]] = [r[idx], r[idx-1]];
1254-      setRows(cat, r);
1255-      selectedItems.clear();
1256-      saveData();
1257-      buildContent();
1258-    }
1259-    if(action === 'down' && idx < r.length - 1){
1260-      [r[idx], r[idx+1]] = [r[idx+1], r[idx]];
1261-      setRows(cat, r);
1262-      selectedItems.clear();
1263-      saveData();
1264-      buildContent();
1265-    }
1266-    if(action === 'move'){
1267-      selectedItems.clear();
1268-      selectedItems.add(idx);
1269-      openMoveModal();
1270-    }
1271-  });
1272-}
1273-
1274-function escHtml(s){
1275-  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
1276-}
1277-
1278-/* ── Move Modal ── */
1279-function openMoveModal(){
1280-  const modal = document.getElementById('moveModal');
1281-  const body = document.getElementById('moveModalBody');
1282-  const count = selectedItems.size;
1283-  document.getElementById('moveModalTitle').textContent = `Move ${count} item(s) to…`;
1284-  body.innerHTML = '';
1285-  menuData.forEach(cat => {
1286-    if(cat.id === activeCatId) return;
1287-    const opt = document.createElement('div');
1288-    opt.className = 'modal-cat-option';
1289-    opt.textContent = cat.name;
1290-    opt.addEventListener('click', async () => {
1291-      const srcCat = menuData.find(c => c.id === activeCatId);
1292-      const srcRows = getRows(srcCat);
1293-      const targetRows = getRows(cat);
1294-      const sortedIdxs = [...selectedItems].sort((a,b) => b - a);
1295-      sortedIdxs.forEach(i => {
1296-        targetRows.push(srcRows[i]);
1297-        srcRows.splice(i, 1);
1298-      });
1299-      setRows(srcCat, srcRows);
1300-      setRows(cat, targetRows);
1301-      selectedItems.clear();
1302-      closeMoveModal();
1303-      await saveData();
1304-      buildSidebar();
1305-      buildContent();
1306-      showToast(`Moved to ${cat.name}`);
1307-    });
1308-    body.appendChild(opt);
1309-  });
1310-  modal.classList.add('on');
1311-}
1312-function closeMoveModal(){
1313-  document.getElementById('moveModal').classList.remove('on');
1314-}
1315-document.getElementById('moveModalClose').addEventListener('click', closeMoveModal);
1316-document.getElementById('moveModal').addEventListener('click', e => { if(e.target === e.currentTarget) closeMoveModal(); });
1317-
1318-/* ── Sort All Categories High → Low ── */
1319-function parsePrice(p) {
1320-  if (!p) return 0;
1321-  // Extract first number from strings like "₹4,400", "₹85", "₹165/- Per Glass"
1322-  const match = p.replace(/,/g, '').match(/[\d]+(\.\d+)?/);
1323-  return match ? parseFloat(match[0]) : 0;
1324-}
1325-
1326-/* ── Migrate Base64 Images to Supabase Storage ── */
1327-document.getElementById('migrateBtn').addEventListener('click', async () => {
1328-  if (!confirm('This will upload all existing Base64 photos to cloud storage and replace them with fast URLs. Continue?')) return;
1329-  let total = 0, done = 0;
1330-  // Count items with base64 images
1331-  menuData.forEach(cat => {
1332-    const rows = getRows(cat);
1333-    rows.forEach(r => { if (r.img && r.img.startsWith('data:')) total++; });
1334-    if (cat.item && cat.item.img && cat.item.img.startsWith('data:')) total++;
1335-  });
1336-  if (total === 0) { showToast('No Base64 images found — already migrated!'); return; }
1337-  showToast(`Migrating ${total} images...`);
1338-  for (const cat of menuData) {
1339-    const rows = getRows(cat);
1340-    for (const r of rows) {
1341-      if (r.img && r.img.startsWith('data:')) {
1342-        try {
1343-          // Convert base64 to blob
1344-          const res = await fetch(r.img);
1345-          const blob = await res.blob();
1346-          const ext = blob.type.split('/')[1] || 'jpg';
1347-          const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
1348-          const { error } = await _supabase.storage.from('menu-images').upload(fileName, blob, { cacheControl: '31536000' });
1349-          if (!error) {
1350-            const { data: pub } = _supabase.storage.from('menu-images').getPublicUrl(fileName);
1351-            r.img = pub.publicUrl;
1352-            done++;
1353-            showToast(`Uploading... ${done}/${total}`);
1354-          }
1355-        } catch(e) { console.error('Failed item:', r.n, e); }
1356-      }
1357-    }
1358-    setRows(cat, rows);
1359-    if (cat.item && cat.item.img && cat.item.img.startsWith('data:')) {
1360-      try {
1361-        const res = await fetch(cat.item.img);
1362-        const blob = await res.blob();
1363-        const ext = blob.type.split('/')[1] || 'jpg';
1364-        const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
1365-        const { error } = await _supabase.storage.from('menu-images').upload(fileName, blob, { cacheControl: '31536000' });
1366-        if (!error) {
1367-          const { data: pub } = _supabase.storage.from('menu-images').getPublicUrl(fileName);
1368-          cat.item.img = pub.publicUrl;
1369-          done++;
1370-          showToast(`Uploading... ${done}/${total}`);
1371-        }
1372-      } catch(e) { console.error('Failed hero:', cat.name, e); }
1373-    }
1374-  }
1375-  await saveData();
1376-  buildSidebar();
1377-  buildContent();
1378-  showToast(`✅ Done! ${done}/${total} images migrated to fast CDN!`);
1379-});
1380-
1381-document.getElementById('sortAllBtn').addEventListener('click', async () => {
1382-  if (!confirm('Sort ALL items in ALL categories by price high to low? This will rearrange every item.')) return;
1383-  menuData.forEach(cat => {
1384-    const rows = getRows(cat);
1385-    rows.sort((a, b) => parsePrice(b.p) - parsePrice(a.p));
1386-    setRows(cat, rows);
1387-  });
1388-  await saveData();
1389-  buildSidebar();
1390-  buildContent();
1391-  showToast('✓ All categories sorted High → Low!');
1392-});
1393-
1394-/* ── Save / Reset ── */
1395-document.getElementById('saveBtn').addEventListener('click', async ()=>{
1396-  await saveData();
1397-  showToast('✓ Saved & synced globally!');
1398-});
1399-document.getElementById('resetBtn').addEventListener('click', async ()=>{
1400-  if(!confirm('Reset ALL menu data to the original defaults? This cannot be undone.')) return;
1401-  menuData = JSON.parse(JSON.stringify(DEFAULT_DATA));
1402-  await saveData();
1403-  activeCatId = menuData[0].id;
1404-  selectedItems.clear();
1405-  buildSidebar();
1406-  buildContent();
1407-  showToast('Menu reset & synced globally');
1408-});
1409-
1410-/* ── ESC Key ── */
1411-document.addEventListener('keydown', e => {
1412-  if(e.key === 'Escape') closeMoveModal();
1413-});
1414-
1415-/* ── Init ── */
1416-(async () => {
1417-  await loadData();
1418-  activeCatId = menuData[0]?.id || null;
1419-  buildSidebar();
1420-  buildContent();
1421-})();
1422-</script>
1423-</body>
