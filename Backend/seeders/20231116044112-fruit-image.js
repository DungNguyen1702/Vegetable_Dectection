"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        const FruitImageArray = [];
        
        () => {

        }

        await queryInterface.bulkInsert(
            "FruitImages",
            FruitImageArray,
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
