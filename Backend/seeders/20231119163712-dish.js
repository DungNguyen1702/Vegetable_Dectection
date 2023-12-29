'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dishes",
      [
          // 1-3 Apple
          {
            name: "Apple Salad with Pumpkin Seeds and Apple Cider Vinegar Dressing",
            ingredients: `
              - Sliced apples
              - Pumpkin seeds
              - Fresh greens (lettuce, other vegetables)
              - Apple cider vinegar
            `,
            nutrition: `
              - Provides vitamin C, fiber, and minerals from vegetables
              - Apple cider vinegar, rich in acetic acid, may support digestion
            `,
            fruit_id: 1
          },
          {
            name: "Baked Apple Pie with Honey and Cinnamon",
            ingredients: `
              - Sliced apples
              - Apple pie crust
              - Honey
              - Cinnamon powder
            `,
            nutrition: `
              - Apples provide vitamin C and fiber
              - Honey contains various minerals and has antibacterial properties
            `,
            fruit_id: 1
          },
          {
            name: "Apple Juice with Ginger",
            ingredients: `
              - Sliced apples
              - Fresh ginger
              - Sugar or honey (optional)
            `,
            nutrition: `
              - Apple juice is a source of vitamins and minerals
              - Ginger has anti-inflammatory properties and supports digestion
            `,
            fruit_id: 1
          },
          // 4- 6 Banana
          {
            name: "Coconut Steamed Banana",
            ingredients:
              `
              - Ripe bananas
              - Coconut milk
              `,
            nutrition:
              `
              - Provides potassium, vitamin C from bananas
              - Coconut milk contains healthy fatty acids
              `,
            fruit_id: 2
          },
          {
            name: "Crispy Fried Banana Cake",
            ingredients:
              `
              - Ripe bananas
              - Crispy frying flour
              - Sugar
              `,
            nutrition:
              `
              - Bananas are a source of potassium and vitamin B6
              - Crispy frying flour provides energy
              `,
            fruit_id: 2
          },
          {
            name: "Stir-Fried Banana with Coconut",
            ingredients:
              `
              - Ripe bananas
              - Cornstarch
              - Coconut milk
              `,
            nutrition:
              `
              - Coconut milk contains healthy fatty acids
              - Bananas provide vitamins and minerals
              `,
            fruit_id: 2
          },
          // 7-9 Bean
          {
            name: "Stir-Fried Noodles with Tofu and Vegetables",
            ingredients: `
              - Noodles
              - Tofu
              - Vegetables (carrots, cabbage, bell peppers...)
            `,
            nutrition: `
              - Protein from tofu
              - Vitamins and minerals from vegetables
            `,
            fruit_id: 3
          },
          {
            name: "Sesame Seed Salad (Five-Spice Tofu)",
            ingredients: `
              - Sesame seeds (five-spice tofu)
              - White sesame seeds
              - Fresh greens (lettuce, carrots)
            `,
            nutrition: `
              - Sesame seeds provide ample protein and minerals
              - White sesame seeds offer healthy fats
            `,
            fruit_id: 3
          },
          {
            name: "Coconut Soup with Tofu",
            ingredients: `
              - Tofu
              - Coconut water
              - Carrots, mushrooms, onions
            `,
            nutrition: `
              - Tofu provides protein and calcium
              - Coconut water contains healthy fatty acids
            `,
            fruit_id: 3
          },
          // 10-12 Bitter Gourd
          {
            name: "Bitter Gourd Soup with Shrimp",
            ingredients: `
              - Bitter gourd
              - Shrimp
              - Tomatoes, onions, garlic
            `,
            nutrition: `
              - Bitter gourd is rich in vitamins and minerals
              - Shrimp is a good source of protein and various minerals
            `,
            fruit_id: 4
          },
          {
            name: "Stir-Fried Bitter Gourd with Chicken",
            ingredients: `
              - Bitter gourd
              - Chicken
              - Chili, onions, garlic
            `,
            nutrition: `
              - Bitter gourd helps control blood sugar and enhances digestion
              - Chicken is a lean source of protein
            `,
            fruit_id: 4
          },
          {
            name: "Stir-Fried Bitter Gourd with Eggs",
            ingredients: `
              - Bitter gourd
              - Eggs
              - Olive oil
            `,
            nutrition: `
              - Bitter gourd has antioxidant properties
              - Eggs provide a rich source of protein
            `,
            fruit_id: 4
          },
          // 13- 15 Bottle Gourd
          {
            name: "Bottle Gourd Soup with Shrimp",
            ingredients:
              `
              - Sliced bottle gourd
              - Fresh shrimp
              - Cilantro, green onions
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Bottle gourd is a source of minerals and good for blood sugar
              - Shrimp provides protein, vitamin B12, and minerals such as iron
              `,
            fruit_id: 5
          },
          {
            name: "Stir-Fried Bottle Gourd with Garlic",
            ingredients:
              `
              - Julienned bottle gourd
              - Minced garlic
              - Cooking oil
              - Seasonings: Salt, pepper
              `,
            nutrition:
              `
              - Bottle gourd may aid in weight loss and provide hydration
              - Garlic has antibacterial properties and helps reduce cholesterol
              `,
            fruit_id: 5
          },
          {
            name: "Bottle Gourd Soup with Soft-Boiled Quail Eggs",
            ingredients:
              `
              - Cooked green bottle gourd
              - Soft-boiled quail eggs
              `,
            nutrition:
              `
              - Bottle gourd is hydrating and provides essential minerals
              - Soft-boiled quail eggs offer a range of nutrients
              `,
            fruit_id: 5
          },
          // 16-18 Brinjal
          {
            name: "Eggplant Stir-Fry with Beef",
            ingredients: `
              - Long-cut eggplant
              - Stir-fried beef
              - Chili, garlic, black pepper
              - Seasonings: Soy sauce, cooking oil
            `,
            nutrition: `
              - Eggplant contains anti-pollution compounds and vitamin C
              - Beef provides protein, iron, and zinc
            `,
            fruit_id: 6
          },
          {
            name: "Thinly Sliced Eggplant",
            ingredients: `
              - Spring onion oil
              - Seasonings: Salt, black pepper
            `,
            nutrition: `
              - Eggplant is rich in anti-pollution compounds and vitamin A
              - Spring onion oil enhances flavor and nutrition
            `,
            fruit_id: 6
          },
          {
            name: "Crispy Garlic Eggplant",
            ingredients: `
              - Square-cut eggplant
              - Fragrant fried garlic
              - Cooking oil
              - Seasonings: Salt, black pepper
            `,
            nutrition: `
              - Eggplant contains anti-pollution compounds and vitamin C
              - Garlic has antibacterial properties and supports digestion
            `,
            fruit_id: 6
          },
          // 19-21 Broccoli
          {
            name: "Chicken Broccoli Carrot Soup",
            ingredients: `
              - Small-cut broccoli
              - Julienned carrots
              - Boiled chicken
              - Seasonings: Salt, black pepper, bouillon cubes
            `,
            nutrition: `
              - Broccoli provides plenty of vitamin C, K, and fiber
              - Chicken is a high-quality protein source
            `,
            fruit_id: 7
          },
          {
            name: "Broccoli Salad with Balsamic Vinegar Dressing",
            ingredients: `
              - Small-cut broccoli
              - Fresh greens (lettuce, arugula)
              - Balsamic vinegar
              - Sunflower seeds
            `,
            nutrition: `
              - Broccoli is a source of fiber and vitamin C
              - Balsamic vinegar has antioxidant properties
            `,
            fruit_id: 7
          },
          {
            name: "Stir-Fried Broccoli with Beef",
            ingredients: `
              - Small-cut broccoli
              - Beef sirloin
            `,
            nutrition: `
              - Broccoli is a source of fiber and vitamin C
              - Beef adds protein and amino acids
            `,
            fruit_id: 7
          },
          // 22- 24 Cabbage
          {
            name: "Boiled Cabbage with Mixed Fish Sauce and Eggs",
            ingredients:
              `
              - Soft-boiled cabbage
              - Mixed fish sauce and chili
              - Boiled eggs
              `,
            nutrition:
              `
              - Cabbage is a source of fiber and vitamin K
              - Mixed fish sauce and chili provide a distinctive flavor
              - Eggs offer abundant protein
              `,
            fruit_id: 8
          },
          {
            name: "Stir-Fried Green Cabbage with Beef",
            ingredients:
              `
              - Julienned green cabbage
              - Stir-fried beef
              - Chili, garlic, pepper
              - Seasonings: Soy sauce, cooking oil
              `,
            nutrition:
              `
              - Green cabbage contains many antioxidants and vitamin C
              - Beef provides protein, iron, and zinc
              `,
            fruit_id: 8
          },
          {
            name: "Green Cabbage Salad with Special Seasonings",
            ingredients:
              `
              - Julienned green cabbage
              - Raw vegetables (carrots, other raw greens)
              - Seasonings: Salt, pepper, olive oil
              `,
            nutrition:
              `
              - Green cabbage provides many vitamins and fiber
              - Olive oil may support digestion and enhance flavor
              `,
            fruit_id: 8
          },
          //25- 27 Capsicum
          {
            name: "Bell Pepper Salad with Feta and Olive Oil",
            ingredients:
              `
              - Sliced red and yellow bell peppers
              - Feta cheese
              - Sliced tomatoes
              - Olive oil
              `,
            nutrition:
              `
              - Bell peppers are rich in vitamin C and A
              - Feta provides calcium and protein
              `,
            fruit_id: 9
          },
          {
            name: "Stuffed Bell Peppers with Minced Pork and Vegetables",
            ingredients:
              `
              - Red bell peppers
              - Minced pork
              - Vegetables such as carrots, celery
              - Seasonings: Pepper, garlic
              `,
            nutrition:
              `
              - Bell peppers contain many antioxidants and vitamin C
              - Pork provides protein and essential minerals
              `,
            fruit_id: 9
          },
          {
            name: "Stir-Fried Beef and Pineapple with Bell Peppers",
            ingredients:
              `
              - Green and red bell peppers
              - Lean beef
              - Pineapple chunks
              `,
            nutrition:
              `
              - Bell peppers are a source of fiber and vitamin A
              - Beef provides protein
              - Pineapple offers vitamins B6 and C
              `,
            fruit_id: 9
          },
          // 28-30 Carrot
          {
            name: "Stir-Fried Carrots with Eggs",
            ingredients: `
              - Julienned carrots
              - Fragrant sautéed garlic
              - Scrambled eggs
            `,
            nutrition: `
              - Carrots contain a high level of beta-carotene, promoting eye health
              - Garlic has antibacterial properties and helps reduce cholesterol
              - Eggs provide a rich source of protein
            `,
            fruit_id: 10
          },
          {
            name: "Carrot Salad with Flax Seeds and Sesame Oil",
            ingredients: `
              - Shredded carrots
              - Flax seeds
              - Raw vegetables such as greens, tomatoes
              - Sesame oil
            `,
            nutrition: `
              - Carrots are a source of vitamin A and fiber
              - Flax seeds supply omega-3 fatty acids and fiber
            `,
            fruit_id: 10
          },
          {
            name: "Sticky Rice with Carrots and Chinese Cabbage",
            ingredients: `
              - Cooked carrots and Chinese cabbage
              - Glutinous rice
              - Coconut oil
              - Seasonings: Salt, black pepper
            `,
            nutrition: `
              - Carrots and Chinese cabbage provide essential vitamins and fiber
              - Glutinous rice is a good source of carbohydrates and energy
            `,
            fruit_id: 10
          },
          // 31-33 Cauliflower
          {
            name: "Garlic and Spicy Chili Cauliflower Stir-Fry",
            ingredients: `
              - Separated cauliflower florets
              - Fragrant sautéed garlic
              - Sliced hot chili peppers
              - Seasonings: Salt, black pepper, cooking oil
            `,
            nutrition: `
              - Cauliflower is a source of vitamin C and fiber
              - Garlic has antibacterial properties and helps reduce cholesterol
            `,
            fruit_id: 11
          },
          {
            name: "Cauliflower Soup with Oyster Sauce",
            ingredients: `
              - Small cauliflower florets
              - Seasonings: Oyster sauce, black pepper, fish sauce
              - Spring onions and cilantro
            `,
            nutrition: `
              - Cauliflower provides various vitamins and minerals
              - Oyster sauce enhances flavor and provides healthy fats
            `,
            fruit_id: 11
          },
          {
            name: "Fried Rice with Cauliflower and Onions",
            ingredients: `
              - Small cauliflower florets
              - Cooked rice
              - Sautéed onions
              - Seasonings: Salt, black pepper, cooking oil
            `,
            nutrition: `
              - Cauliflower offers plenty of fiber and vitamins
              - Onions are a source of vitamin C and anti-pollution compounds
            `,
            fruit_id: 11
          },
          // 34-36 Chili
          {
            name: "Spicy Squid Stir-Fry",
            ingredients: `
              - Fresh squid
              - Red chili peppers
              - Onions, garlic
              - Seasonings: Salt, black pepper, fish sauce
            `,
            nutrition: `
              - Spicy chili contains capsaicin, stimulating digestion
              - Squid is a high-quality protein source with essential minerals
            `,
            fruit_id: 12
          },
          {
            name: "Tomato and Chili Soup with Onions and Tofu",
            ingredients: `
              - Red and green chili peppers, julienned
              - Sliced red tomatoes
              - Sautéed onions
              - Julienned tofu
            `,
            nutrition: `
              - Chili peppers provide vitamin C and aid digestion
              - Tofu is a plant-based protein source with fiber
            `,
            fruit_id: 12
          },
          {
            name: "Chicken and Raw Vegetables Salad with Spicy Chili Sauce",
            ingredients: `
              - Boiled chicken, shredded
              - Raw vegetables such as cucumber, carrots
              - Spicy chili sauce
              - Seasonings: Salt, black pepper, vinegar
            `,
            nutrition: `
              - Spicy chili may enhance stimulation and have antibacterial properties
              - Chicken is a high-quality protein source with essential minerals
            `,
            fruit_id: 12
          },
          //37- 39 Coconut
          {
            name: "Refreshing Chilled Coconut Water",
            ingredients:
              `
              - Fresh coconut water
              - Ice cubes
              - Cooking oil
              - Sugar (optional)
              `,
            nutrition:
              `
              - Coconut water is a natural source of minerals
              - Can provide energy and electrolytes
              `,
            fruit_id: 13
          },
          {
            name: "Banana Leaf Steamed Coconut Jelly Cake",
            ingredients:
              `
              - Grated coconut
              - Baking powder
              - Sugar
              - Banana leaf-wrapped jelly cake
              `,
            nutrition:
              `
              - Coconut contains lauric acid with antibacterial properties
              - Jelly cake supplies energy from carbohydrates
              `,
            fruit_id: 13
          },
          {
            name: "Coconut Jam",
            ingredients:
              `
              - Coconut meat
              - Vanilla
              - Unsweetened condensed milk
              `,
            nutrition:
              `
              - Coconut water can be a substitute for broth, providing a distinctive flavor
              - Coconut meat and vanilla add richness and contribute to 60% of daily manganese intake
              `,
            fruit_id: 13
          },
          //40- 42 Cucumber
          {
            name: "Cucumber Salad with Mixed Fish Sauce and Soybean Seeds",
            ingredients:
              `
              - Sliced cucumber
              - Soybean seeds
              - Raw vegetables such as carrots, greens
              - Seasonings: Salt, pepper
              - Mixed fish sauce
              `,
            nutrition:
              `
              - Cucumber is a source of water and vitamin K
              - Soybean seeds provide protein and fiber
              `,
            fruit_id: 14
          },
          {
            name: "Stir-Fried Cucumber with Shrimp",
            ingredients:
              `
              - Julienned cucumber
              - Fresh shrimp
              - Small red chilies, finely chopped
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Cucumber provides plenty of water and fiber
              - Shrimp is a high-quality protein source and supplies essential minerals
              `,
            fruit_id: 14
          },
          {
            name: "Cucumber Kimchi",
            ingredients:
              `
              - Julienned cucumber
              - Seasonings: Chili powder, minced garlic, salt, sugar
              - Mixed fish sauce
              `,
            nutrition:
              `
              - Cucumber is a source of minerals and vitamin C
              - Kimchi may help balance gut bacteria
              `,
            fruit_id: 14
          },
          //43- 45 Custard apple
          {
            name: "Custard Apple and Coconut Milk Smoothie",
            ingredients:
              `
              - Peeled custard apple
              - Fresh coconut milk
              - Sugar (optional)
              - Custard apple provides abundant vitamin C and fiber
              `,
            nutrition:
              `
              - Coconut milk is a source of healthy fats and water
              - Custard apple offers plenty of vitamin C and fiber
              `,
            fruit_id: 15
          },
          {
            name: "Custard Apple Jam",
            ingredients:
              `
              - 1 ripe custard apple
              - Jam-wrapping paper
              - Sugar
              `,
            nutrition:
              `
              - Custard apple provides plenty of fiber and vitamins
              - Supplements vitamin B and C
              `,
            fruit_id: 15
          },
          {
            name: "Custard Apple Sago Sweet Soup",
            ingredients:
              `
              - Peeled custard apple
              - White rock sugar
              - Coconut milk
              - Roasted peanuts
              `,
            nutrition:
              `
              - Custard apple contains a lot of fiber and vitamins
              - Coconut milk is a source of healthy fats and has a delightful flavor
              `,
            fruit_id: 15
          },
          // 46-48 Dates (Chà Là)
          {
            name: "Cashew Date Bars with Honey",
            ingredients: `
              - Date paste
              - Cashews
              - Honey
              - Seasonings: Salt, black pepper
            `,
            nutrition: `
              - Dates are rich in fiber and minerals like potassium
              - Cashews provide healthy fats and protein
            `,
            fruit_id: 16
          },
          {
            name: "Date Smoothie with Watermelon and Banana",
            ingredients: `
              - Date paste
              - Sliced watermelon
              - Ripe banana
              - Coconut water
            `,
            nutrition: `
              - Dates offer natural energy from sugars
              - Watermelon and banana provide hydration and fiber
            `,
            fruit_id: 16
          },
          {
            name: "Sprout Salad with Dates and Chicken",
            ingredients: `
              - Sprouts like mung beans, celery
              - Date paste
              - Boiled chicken, shredded
              - Seasonings: Salt, black pepper, diluted fish sauce
            `,
            nutrition: `
              - Dates provide minerals and energy
              - Chicken is a high-quality protein source with essential minerals
            `,
            fruit_id: 16
          },
          // 49-51 Dragon Fruit (Thanh Long)
          {
            name: "Dragon Fruit Salad with Shrimp and Raw Vegetables",
            ingredients: `
              - Sliced dragon fruit
              - 300g scallops
            `,
            nutrition: `
              - Dragon fruit is a source of vitamin C and fiber
              - Scallops provide protein and essential minerals
            `,
            fruit_id: 17
          },
          {
            name: "Dragon Fruit and Banana Smoothie",
            ingredients: `
              - Seedless dragon fruit
              - Ripe banana
              - Fresh milk
              - Sugar (optional)
            `,
            nutrition: `
              - Dragon fruit contains anti-pollution compounds and vitamin C
              - Banana is a source of energy and fiber
            `,
            fruit_id: 17
          },
          {
            name: "Dragon Fruit and Coconut Water Sweet Soup",
            ingredients: `
              - Seedless dragon fruit
              - Coconut water
              - White sugar
              - Basil seeds
            `,
            nutrition: `
              - Dragon fruit provides water and vitamin C
              - Coconut water is a source of healthy fats and has a pleasant flavor
            `,
            fruit_id: 17
          },
          // 52-54 Egg (Trứng)
          {
            name: "Fried Eggs with Fermented Shrimp Paste",
            ingredients: `
              - Chicken eggs
              - Fermented shrimp paste
              - Cooking oil
            `,
            nutrition: `
              - Eggs are a high-quality protein source and contain choline for brain health
              - Fermented shrimp paste provides minerals and a distinctive flavor
            `,
            fruit_id: 18
          },
          {
            name: "Egg Sandwich with Fresh Vegetables",
            ingredients: `
              - Fried chicken eggs
              - Toasted bread
              - Raw vegetables like carrots, greens
              - Mayonnaise
            `,
            nutrition: `
              - Eggs supply protein and vitamins like B12
              - Raw vegetables are a source of fiber and minerals
            `,
            fruit_id: 18
          },
          {
            name: "Tomato and Egg Soup",
            ingredients: `
              - Hard-boiled chicken eggs
              - Sliced tomatoes
              - Spring onions, bean sprouts
            `,
            nutrition: `
              - Eggs are a high-quality protein source with various vitamins
              - Tomatoes provide water and vitamin C
            `,
            fruit_id: 18
          },
          //55- 57 Garlic
          {
            name: "Stir-Fried Chicken with Chili and Garlic",
            ingredients:
              `
              - Shredded boiled chicken
              - Finely chopped red chili
              - Minced garlic
              - Seasonings: Salt, pepper, cooking oil
              `,
            nutrition:
              `
              - Garlic has antibacterial properties and can reduce cholesterol
              - Chicken is a high-quality protein source and provides essential minerals
              `,
            fruit_id: 19
          },
          {
            name: "Garlic Fried Rice with Vegetables",
            ingredients:
              `
              - Cooked rice
              - Vegetables such as carrots, cabbage
              - Fragrant sautéed garlic
              - Seasonings: Salt, pepper, cooking oil
              `,
            nutrition:
              `
              - Garlic has anti-inflammatory effects and can lower blood pressure
              - Vegetables provide plenty of fiber and vitamins
              `,
            fruit_id: 19
          },
          {
            name: "Garlic Chicken Quang Noodle",
            ingredients:
              `
              - Shredded boiled chicken
              - Quang noodle
              - Fragrant sautéed garlic
              - Raw vegetables such as greens, bean sprouts
              `,
            nutrition:
              `
              - Garlic is a source of pollution-resistant compounds and aids digestion
              - Chicken is a high-quality protein source and provides essential minerals
              `,
            fruit_id: 19
          },
          //58- 60 Grape
          {
            name: "Grape Salad with Gouda Cheese and Soft Seeds",
            ingredients:
              `
              - Halved grapes
              - Gouda cheese
              - Soft seeds
              - Balsamic vinegar
              `,
            nutrition:
              `
              - Grapes contain many pollution-resistant compounds and vitamin C
              - Gouda cheese provides calcium and protein
              `,
            fruit_id: 20
          },
          {
            name: "Grape Wine",
            ingredients:
              `
              - Purple or red or green grapes
              - Granulated sugar
              - Filter bag
              `,
            nutrition:
              `
              - Grapes are a source of vitamins and fiber
              - Chicken is a high-quality protein source and provides essential minerals
              `,
            fruit_id: 20
          },
          {
            name: "Grape Muffins with Vanilla Ice Cream",
            ingredients:
              `
              - Halved grapes
              - Sweet muffins such as muffins
              - Vanilla ice cream
              - Soft seeds (optional)
              `,
            nutrition:
              `
              - Grapes provide plenty of pollution-resistant compounds and fiber
              - Antioxidant and immune-boosting properties, reduces stroke risk
              `,
            fruit_id: 20
          },
          //61- 63 Green lemon
          {
            name: "Refreshing Green Lemon Coconut Water",
            ingredients:
              `
              - Green lemon juice
              - Fresh coconut water
              - Ice cubes
              - Sugar (optional)
              `,
            nutrition:
              `
              - Green lemon juice provides vitamin C and pollution-resistant compounds
              - Coconut water is a natural source of water and minerals
              `,
            fruit_id: 21
          },
          {
            name: "Spicy Green Lemon Condensed Milk",
            ingredients:
              `
              - Sliced green lemons
              - Condensed milk
              - Salt, chili
              `,
            nutrition:
              `
              - Green lemons are a source of vitamin C and fiber
              - Provides nutrients such as fat, vitamin A, and C
              `,
            fruit_id: 21
          },
          {
            name: "Ginger Chicken with Green Lemon",
            ingredients:
              `
              - Shredded boiled chicken
              - Finely chopped fresh ginger
              - Sliced green lemon
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Green lemon provides vitamin C and pollution-resistant compounds
              - Chicken is a high-quality protein source and provides essential minerals
              `,
            fruit_id: 21
          },
          // 64-66 Jackfruit (Mít)
          {
            name: "Baked Jackfruit Cake with Coconut Oil",
            ingredients: `
              - Seedless jackfruit
              - Coconut oil
              - Sugar (optional)
              - Wheat flour
            `,
            nutrition: `
              - Jackfruit is a source of vitamins and minerals like potassium
              - Coconut oil provides healthy fats and a delightful aroma
            `,
            fruit_id: 22
          },
          {
            name: "Jackfruit Soup with Coconut Milk",
            ingredients: `
              - Seedless jackfruit
              - Coconut milk
              - Cooked rice
              - Seasonings: Salt, black pepper, fish sauce
            `,
            nutrition: `
              - Jackfruit offers fiber and vitamins
              - Coconut milk is a source of healthy fats and a distinctive flavor
            `,
            fruit_id: 22
          },
          {
            name: "Jackfruit and Cucumber Salad",
            ingredients: `
              - Seedless jackfruit
              - Julienned cucumber
              - Raw vegetables like greens, tomatoes
              - Diluted fish sauce
            `,
            nutrition: `
              - Jackfruit is a source of vitamins and fiber
              - Cucumber provides water and fiber
            `,
            fruit_id: 22
          },
          // 67-69 Kiwi
          {
            name: "Kiwi Smoothie with Watermelon",
            ingredients: `
              - Peeled and sliced kiwi
              - Sliced watermelon
              - Fresh milk
              - Sugar (optional)
            `,
            nutrition: `
              - Kiwi is a source of vitamin C and fiber
              - Watermelon provides hydration and vitamin A
            `,
            fruit_id: 23
          },
          {
            name: "Sprout Salad with Kiwi and Pumpkin Seeds",
            ingredients: `
              - Peeled and julienned kiwi
              - Sprouts like mung beans, celery
              - Pumpkin seeds
              - Balsamic vinegar
            `,
            nutrition: `
              - Kiwi contains anti-pollution compounds and fiber
              - Sprouts offer various vitamins and minerals
            `,
            fruit_id: 23
          },
          {
            name: "Kiwi and Honey Ice Cream",
            ingredients: `
              - Peeled and sliced kiwi
              - Vanilla ice cream
              - Honey
              - Tapioca pearls (optional)
            `,
            nutrition: `
              - Kiwi is a source of vitamin C and fiber
              - Vanilla ice cream provides calcium and healthy fats
            `,
            fruit_id: 23
          },
          // 70-72 Mango
          {
            name: "Mango and Coconut Water Smoothie",
            ingredients: `
              - Peeled and sliced mango
              - Fresh coconut water
              - Sugar (optional)
              - Ice cubes
            `,
            nutrition: `
              - Mango is a source of vitamins A and C, offering natural sugar energy
              - Coconut water is a source of healthy fats and a delightful flavor
            `,
            fruit_id: 24
          },
          {
            name: "Mango and Shrimp Salad",
            ingredients: `
              - Peeled and julienned mango
              - Fresh shrimp
              - Diluted fish sauce
              - Raw vegetables like carrots, greens
            `,
            nutrition: `
              - Mango provides fiber and vitamins
              - Shrimp is a high-quality protein source with essential minerals
            `,
            fruit_id: 24
          },
          {
            name: "Mango Sticky Rice",
            ingredients: `
              - Peeled and diced mango
              - Sticky rice, steamed
              - Sesame seeds
              - White sugar
            `,
            nutrition: `
              - Mango is a source of vitamin C and fiber
              - Sticky rice supplies energy from starch
            `,
            fruit_id: 24
          },
          //73- 75 Okra
          {
            name: "Okra and Shrimp Stir-Fry",
            ingredients:
              `
              - Green okra
              - Fresh shrimp
              - Sliced tomatoes
              - Chopped onions
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Okra is a source of fiber and vitamin C
              - Shrimp provides protein and essential minerals
              `,
            fruit_id: 25
          },
          {
            name: "Stir-Fried Okra with Garlic and Chili",
            ingredients:
              `
              - Green okra
              - Fresh shrimp
              - Sliced tomatoes
              - Chopped onions
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Okra is a source of fiber and vitamin C
              - Shrimp provides protein and essential minerals
              `,
            fruit_id: 25
          },
          {
            name: "Okra Salad",
            ingredients:
              `
              - Boiled ripe okra
              - Red bell pepper
              - Boiled eggs
              `,
            nutrition:
              `
              - Okra provides fiber and vitamin C
              - Bell pepper is a source of beta-carotene and vitamin A
              - Eggs provide rich protein
              `,
            fruit_id: 25
          },
          //76- 78 Onion
          {
            name: "Chicken Stir-Fry with Onions",
            ingredients:
              `
              - Sliced boiled chicken
              - Julienned onions
              - Finely chopped red chili
              - Cooking oil
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Onions contain many pollution-resistant compounds and have anti-inflammatory effects
              - Chicken is a high-quality protein source and provides essential minerals
              `,
            fruit_id: 26
          },
          {
            name: "Hamburger with Caramelized Onions",
            ingredients:
              `
              - Hamburger buns
              - Ground beef
              - Caramelized onions
              - Mayonnaise
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Onions provide vitamin C and fiber
              - Ground beef is a source of high-quality protein and healthy fats
              `,
            fruit_id: 26
          },
          {
            name: "Chicken Curry with Onions and Carrots",
            ingredients:
              `
              - Sliced boiled chicken
              - Julienned onions
              - Sliced green carrots
              - Coconut milk
              `,
            nutrition:
              `
              - Onions provide fiber and essential minerals
              - Chicken is a high-quality protein source and healthy fats
              `,
            fruit_id: 26
          },
          //79- 81 Orange
          {
            name: "Orange and Strawberry Smoothie",
            ingredients:
              `
              - Freshly squeezed orange juice
              - Fresh strawberries
              - Fresh milk
              - Sugar (optional)
              `,
            nutrition:
              `
              - Oranges are a source of vitamin C and pollution-resistant compounds
              - Strawberries provide fiber and vitamins
              `,
            fruit_id: 27
          },
          {
            name: "Orange and Raw Vegetable Salad",
            ingredients:
              `
              - Orange slices
              - Raw vegetables like greens, tomatoes
              - Pumpkin seeds
              - Fish sauce dressing
              `,
            nutrition:
              `
              - Oranges provide vitamin C and fiber
              - Raw vegetables are a source of fiber and vitamins
              `,
            fruit_id: 27
          },
          {
            name: "Chicken Braised with Orange and Honey",
            ingredients:
              `
              - Sliced boiled chicken
              - Orange slices
              - Honey
              - Chopped onions
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Oranges are a source of vitamin C and pollution-resistant compounds
              - Chicken is a high-quality protein source and provides essential minerals
              `,
            fruit_id: 27
          },
          // 82-84 Papaya
          {
            name: "Papaya and Tuna Salad",
            ingredients: `
              - Julienned papaya
              - Fresh tuna
              - Raw vegetables like greens, tomatoes
              - Diluted fish sauce
              - Seasonings: Salt, black pepper, fish sauce
            `,
            nutrition: `
              - Papaya is a source of fiber and vitamin A
              - Tuna provides protein and omega-3 fatty acids
            `,
            fruit_id: 28
          },
          {
            name: "Papaya and Banana Smoothie",
            ingredients: `
              - Seedless papaya
              - Ripe banana
              - Fresh milk
              - Sugar (optional)
            `,
            nutrition: `
              - Papaya provides vitamin C and fiber
              - Banana is a source of energy and fiber
            `,
            fruit_id: 28
          },
          {
            name: "Papaya and Coconut Jelly Dessert",
            ingredients: `
              - Julienned papaya
              - Coconut jelly
              - White sugar
              - Tapioca pearls (optional)
            `,
            nutrition: `
              - Papaya is a source of fiber and vitamin C
              - Coconut jelly provides water and healthy fats
            `,
            fruit_id: 28
          },
          // 85-87 Peanut
          {
            name: "Roasted Peanuts with Olive Oil",
            ingredients: `
              - Roasted peanuts
              - Olive oil
              - Salt and pepper
              - Chopped onions
            `,
            nutrition: `
              - Peanuts are a source of heart-healthy fats
              - Olive oil is rich in monounsaturated fatty acids
            `,
            fruit_id: 29
          },
          {
            name: "Garlic Chili Roasted Peanuts",
            ingredients: `
              - Fish sauce
              - Roasted peanuts
              - Garlic and chili
              - Sugar
            `,
            nutrition: `
              - Peanuts provide protein and healthy fats
            `,
            fruit_id: 29
          },
          {
            name: "Chicken Salad with Peanut Sauce",
            ingredients: `
              - Grilled chicken
              - Raw vegetables (lettuce, carrots)
              - Peanut sauce
              - Chopped onions
            `,
            nutrition: `
              - Peanuts are a source of protein and fiber
              - Salad provides various vitamins and minerals
            `,
            fruit_id: 29
          },
          // 88-90 Pineapple
          {
            name: "Pineapple and Coconut Water Smoothie",
            ingredients: `
              - Fresh pineapple
              - Fresh coconut water
              - Crushed ice
            `,
            nutrition: `
              - Pineapple provides vitamin C and manganese
              - Coconut water helps hydrate and provides minerals
            `,
            fruit_id: 30
          },
          {
            name: "Stir-Fried Pineapple with Shrimp",
            ingredients: `
              - Ripe pineapple
              - Fresh shrimp
              - Raw vegetables (chili, onions)
              - Chopped onions
            `,
            nutrition: `
              - Pineapple is rich in antioxidants
              - Shrimp provides protein and essential minerals
            `,
            fruit_id: 30
          },
          {
            name: "Pineapple and Chicken Salad",
            ingredients: `
              - Ripe pineapple
              - Grilled chicken
              - Sliced tomatoes
              - Raw vegetables (lettuce, carrots)
            `,
            nutrition: `
              - Pineapple provides vitamins and digestive enzymes
              - Chicken is a source of high-quality protein
            `,
            fruit_id: 30
          },
          //91- 93 Pomegranate
          {
            name: "Pomegranate and Strawberry Smoothie",
            ingredients:
              `
              - Pomegranate seeds
              - Fresh strawberries
              - Water
              - Chopped onions
              `,
            nutrition:
              `
              - Pomegranate contains many antioxidants
              - Strawberries are rich in vitamin C and fiber
              `,
            fruit_id: 31
          },
          {
            name: "Sprout Salad with Pomegranate Seeds",
            ingredients:
              `
              - Sprouts (kale, soybean)
              - Pomegranate seeds
              - Balsamic vinaigrette
              `,
            nutrition:
              `
              - Pomegranate helps improve cardiovascular health
              - Sprouts are a source of fiber and vitamins
              `,
            fruit_id: 31
          },
          {
            name: "Pomegranate Dessert Soup",
            ingredients:
              `
              - Pomegranate seeds
              - Black sugar
              - Coconut milk
              `,
            nutrition:
              `
              - Pomegranate dessert soup provides energy and antioxidants
              `,
            fruit_id: 31
          },
          //94- 96 Potato
          {
            name: "Baked Potatoes with Cheese",
            ingredients:
              `
              - Potatoes
              - Cheese
              - Olive oil
              `,
            nutrition:
              `
              - Potatoes provide carbohydrates and vitamin C
              - Cheese is a source of calcium
              `,
            fruit_id: 32
          },
          {
            name: "Potato Soup with Chicken",
            ingredients:
              `
              - Potatoes
              - Chicken meat
              - Raw vegetables (carrots, celery)
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Potatoes are rich in potassium and vitamin B6
              - Chicken provides protein and healthy fats
              `,
            fruit_id: 32
          },
          {
            name: "Stir-Fried Potatoes with Bell Peppers and Onions",
            ingredients:
              `
              - Potatoes
              - Bell peppers
              - Onions
              - Chopped onions
              `,
            nutrition:
              `
              - Potatoes provide energy and fiber
              - Raw vegetables are rich in vitamins and minerals
              `,
            fruit_id: 32
          },
          //97- 99 Pumpkin
          {
            name: "Honey-Roasted Pumpkin",
            ingredients:
              `
              - Pumpkin
              - Honey
              - Flaxseeds
              `,
            nutrition:
              `
              - Pumpkin is a good source of beta-carotene for vision health
              - Honey contains various minerals and has antibacterial properties
              `,
            fruit_id: 33
          },
          {
            name: "Pumpkin Soup with Shrimp",
            ingredients:
              `
              - Pumpkin
              - Shrimp
              - Onions, garlic, mushrooms
              `,
            nutrition:
              `
              - Pumpkin provides vitamin C and potassium
              - Shrimp provides protein and essential minerals
              `,
            fruit_id: 33
          },
          {
            name: "Braised Chicken with Red Pumpkin",
            ingredients:
              `
              - Pumpkin
              - Chicken meat
              - Onions, pepper
              `,
            nutrition:
              `
              - Pumpkin is rich in antioxidants
              - Chicken provides protein with low fat content
              `,
            fruit_id: 33
          },
          // 100-102 Radish
          {
            name: "Radish Salad with Vinegar and Pumpkin Seeds",
            ingredients: `
              - White and red radish
              - Pumpkin seeds
              - Vinegar
              - Chopped onions
            `,
            nutrition: `
              - Radish is rich in vitamin C and fiber
              - Pumpkin seeds provide healthy non-oil fats
            `,
            fruit_id: 34
          },
          {
            name: "Coconut Water Radish Soup",
            ingredients: `
              - White radish
              - Coconut water
              - Chopped onions
            `,
            nutrition: `
              - Radish is rich in potassium and calcium
              - Coconut water is a source of water and minerals
            `,
            fruit_id: 34
          },
          {
            name: "Stir-Fried Radish with Beef",
            ingredients: `
              - White radish
              - Beef
              - Onions, garlic, chili
            `,
            nutrition: `
              - Radish provides various vitamins and minerals
              - Beef is a source of high-quality protein
            `,
            fruit_id: 34
          },
          // 103-105 Star Fruit
          {
            name: "Star Fruit and Watermelon Smoothie",
            ingredients: `
              - Star fruit
              - Watermelon
              - Soy milk
            `,
            nutrition: `
              - Star fruit is a source of vitamin C and antioxidants
              - Watermelon helps hydrate and provides minerals
            `,
            fruit_id: 35
          },
          {
            name: "Sweet Pork Intestine Salad with Star Fruit",
            ingredients: `
              - Pork intestines
              - Raw vegetables (lettuce, carrots)
              - White wine, ginger, vinegar
              - Star fruit
            `,
            nutrition: `
              - Star fruit supports the digestive system
              - Provides antioxidants, protein, and energy for the body
            `,
            fruit_id: 35
          },
          {
            name: "Stir-Fried Star Fruit with Buffalo Meat",
            ingredients: `
              - Star fruit
              - Buffalo meat
              - Onions, garlic, chili
            `,
            nutrition: `
              - Star fruit helps reduce pain sensation and inflammation
              - Buffalo meat is a source of protein and calcium
            `,
            fruit_id: 35
          },
          // 106-108 Strawberry
          {
            name: "Fresh Strawberries with Whipped Cream",
            ingredients: `
              - Fresh strawberries
              - Whipped cream
              - White sugar
            `,
            nutrition: `
              - Strawberries are a source of vitamin C and antioxidants
              - Whipped cream provides calcium and protein
            `,
            fruit_id: 36
          },
          {
            name: "Strawberry Chia Seed Smoothie",
            ingredients: `
              - Fresh strawberries
              - Low-sugar milk
              - Chia seeds
            `,
            nutrition: `
              - Strawberries help improve brain function
              - Chia seeds are rich in fiber and omega-3 fatty acids
            `,
            fruit_id: 36
          },
          {
            name: "Stir-Fried Strawberries with Dark Chocolate Sauce",
            ingredients: `
              - Fresh strawberries
              - Dark chocolate
              - Dark sugar
            `,
            nutrition: `
              - Strawberries boost the immune system
              - Dark chocolate contains antioxidants
            `,
            fruit_id: 36
          },
          //109- 111 Sweet potato
          {
            name: "Honey-Roasted Sweet Potatoes",
            ingredients:
              `
              - Sweet potatoes, sliced
              - Honey
              - Olive oil
              - Seasonings: Salt, pepper, black pepper
              `,
            nutrition:
              `
              - Sweet potatoes provide vitamin A, fiber, and energy from starch
              - Honey contains various minerals and has antibacterial properties
              `,
            fruit_id: 37
          },
          {
            name: "Sweet Potato and Chicken Soup",
            ingredients:
              `
              - Sweet potatoes, julienned
              - Chicken meat, sliced
              - Chopped onions
              - Fish sauce dressing
              `,
            nutrition:
              `
              - Sweet potatoes are a source of fiber and vitamin A
              - Chicken is a high-quality protein source with essential minerals
              `,
            fruit_id: 37
          },
          {
            name: "Ginger-Glazed Sweet Potatoes",
            ingredients:
              `
              - Sweet potatoes, boiled until tender
              - Fresh ginger, finely chopped
              - White sugar
              - Sesame seeds
              `,
            nutrition:
              `
              - Sweet potatoes provide vitamin A and fiber
              - Ginger stimulates digestion and has anti-inflammatory effects
              `,
            fruit_id: 37
          },
          //112- 114 Tomato
          {
            name: "Tomato and Cucumber Salad",
            ingredients:
              `
              - Tomato slices
              - Cucumber strips
              - Chopped onions
              - Fish sauce dressing
              `,
            nutrition:
              `
              - Tomatoes are a source of vitamin C and pollution-fighting agents
              - Cucumber provides water and fiber
              `,
            fruit_id: 38
          },
          {
            name: "Chicken and Tomato Soup",
            ingredients:
              `
              - Tomato slices
              - Onion strips
              - Boiled chicken, diced
              - Seasonings: Salt, pepper, fish sauce
              `,
            nutrition:
              `
              - Tomatoes provide vitamin C and fiber
              - Onions are a source of fiber and vitamins
              `,
            fruit_id: 38
          },
          {
            name: "Spaghetti with Tomato Sauce and Ground Beef",
            ingredients:
              `
              - Cooked spaghetti
              - Tomato sauce
              - Ground beef
              - Chopped onions
              `,
            nutrition:
              `
              - Tomatoes provide vitamin C and pollution-fighting agents
              - Ground beef is a high-quality protein source with healthy fats
              `,
            fruit_id: 38
          },
          //115- 117 Watermelon
          {
            name: "Watermelon and Cantaloupe Smoothie",
            ingredients:
              `
              - Watermelon, sliced
              - Cantaloupe, sliced
              - Fresh milk
              - Sugar (optional)
              `,
            nutrition:
              `
              - Watermelon provides water and vitamins A, C
              - Cantaloupe provides water and fiber
              `,
            fruit_id: 39
          },
          {
            name: "Watermelon and Feta Cheese Salad",
            ingredients:
              `
              - Watermelon, sliced
              - Feta cheese
              - Raw vegetables like green leafy vegetables, tomatoes
              - Fish sauce dressing
              `,
            nutrition:
              `
              - Watermelon provides water and vitamins A, C
              - Feta cheese is a source of calcium and protein
              `,
            fruit_id: 39
          },
          {
            name: "Watermelon and Sago Dessert",
            ingredients:
              `
              - Small white pearl sago
              - Watermelon, sliced
              - White sugar
              - Ice cubes
              `,
            nutrition:
              `
              - Watermelon provides water and vitamins A, C
              - Contains essential minerals to maintain body functions
              `,
            fruit_id: 39
          },
          // 118-120 White Mushroom
          {
            name: "Stir-Fried White Mushroom with Bean Sprouts",
            ingredients: `
              - White mushrooms, sliced
              - Bean sprouts, such as mung bean sprouts, celery
              - Fish sauce
              - Chopped onions
            `,
            nutrition: `
              - White mushrooms are a plant-based protein source and rich in minerals like selenium and copper
              - Bean sprouts provide various vitamins and minerals
            `,
            fruit_id: 40
          },
          {
            name: "Mushroom Grilled Sandwich with Fresh Vegetables",
            ingredients: `
              - Sandwich bread
              - Grilled white mushrooms
              - Mayonnaise
              - Fresh vegetables, such as tomatoes, lettuce
            `,
            nutrition: `
              - White mushrooms are a plant-based protein source and rich in minerals
              - Fresh vegetables provide fiber and numerous vitamins
            `,
            fruit_id: 40
          },
          {
            name: "White Mushroom and Root Vegetable Soup",
            ingredients: `
              - White mushrooms, sliced
              - Root vegetables, such as sliced carrots
              - Broth
              - Chopped onions
            `,
            nutrition: `
              - White mushrooms are a plant-based protein source and rich in B vitamins
              - Root vegetables provide fiber and essential minerals
            `,
            fruit_id: 40
          },
      ],
      { batchSize: 120 }
  );
},

async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Dishes", null, { batchSize: 120 });
},
};
