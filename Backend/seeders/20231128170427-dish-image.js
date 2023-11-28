"use strict";
require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const DishImageArray = [];

        const englishFruits = [
            "Apple",
            "Banana",
            "Bean",
            "Bitter_Gourd",
            "Bottle_Gourd",
            "Brinjal",
            "Broccoli",
            "Cabbage",
            "Capsicum",
            "Carrots",
            "Cauliflower",
            "Chilli",
            "Coconut",
            "Cucumber",
            "Custard_Apple",
            "Dates",
            "Dragon_Fruit",
            "Egg",
            "Garlic",
            "Grape",
            "Green_Lemon",
            "Jackfruit",
            "Kiwi",
            "Mango",
            "Okra",
            "Onion",
            "Orange",
            "Papaya",
            "Peanut",
            "Pineapple",
            "Pomegranate",
            "Potato",
            "Pumpkin",
            "Radish",
            "Star_Fruit",
            "Strawberry",
            "Sweet_Potato",
            "Tomato",
            "Watermelon",
            "White_Mushroom",
        ];
        var count = 1;
        for (let i = 0; i < englishFruits.length; i++) {
            for (let j = 1; j <= 3; j++) {
                DishImageArray.push({
                    dish_id: count++,
                    image:
                        process.env.DEPLOY_URL +
                        "/Public/DishImages/" +
                        englishFruits[i] +
                        `\\Dish${j}` +
                        '\\1.jpg',
                });
            }
        }

        await queryInterface.bulkInsert("DishImages", DishImageArray, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("DishImages", null, {});
    },
};
