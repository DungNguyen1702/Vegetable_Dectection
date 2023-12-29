"use strict";
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Admin2",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701792778/PBL4/dobwx0jvixqbqolexib3.jpg",
                    account: "admin2",
                    password: hashHelper.hash("12345678"),
                },
                {
                    name: "Admin3",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701792778/PBL4/dobwx0jvixqbqolexib3.jpg",
                    account: "admin3",
                    password: hashHelper.hash("12345678"),
                },
                {
                    name: "Admin",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701792778/PBL4/dobwx0jvixqbqolexib3.jpg",
                    account: "admin",
                    password: hashHelper.hash("12345678"),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
