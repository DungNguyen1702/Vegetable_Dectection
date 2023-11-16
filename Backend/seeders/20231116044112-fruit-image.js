"use strict";
require('dotenv').config()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        const FruitImageArray = [];

        const englishFruits = [
            "Apple",
            "Banana",
            "Bean",
            "Bitter Gourd",
            "Bottle Gourd",
            "Brinjal",
            "Broccoli",
            "Cabbage",
            "Capsicum",
            "Carrots",
            "Cauliflower",
            "Chilli",
            "Coconut",
            "Cucumber",
            "Custard Apple",
            "Dates",
            "Dragon Fruit",
            "Egg",
            "Garlic",
            "Grape",
            "Green Lemon",
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
            "Star Fruit",
            "Strawberry",
            "Sweet Potato",
            "Tomato",
            "Watermelon",
            "White Mushroom"
        ];

        for(let i = 0; i < englishFruits.length ; i ++ )
        {
            for(let j = 1; j <=4; j ++)
            {
                FruitImageArray.push({
                    fruit_id : i+1,
                    image : process.env.DEPLOY_URL + "/Public/Test/" + englishFruits[i] + `/${j}.jpg`
                })
            }
        }

        await queryInterface.bulkInsert(
            "FruitImages",
            FruitImageArray,
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("FruitImages", null, {});
    },
};
