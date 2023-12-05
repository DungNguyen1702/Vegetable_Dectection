"use strict";
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Nguyễn Văn Dũng",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701792778/PBL4/dobwx0jvixqbqolexib3.jpg",
                    account: "dung1702",
                    password: hashHelper.hash("dung123"),
                },
                {
                    name: "Phạm Duy Tin",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701792778/PBL4/dobwx0jvixqbqolexib3.jpg",
                    account: "phamduytin",
                    password: hashHelper.hash("tin123"),
                },
                {
                    name: "Lê Tuấn Nguyên Khôi",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701792778/PBL4/dobwx0jvixqbqolexib3.jpg",
                    account: "letuannguyenkhoi",
                    password: hashHelper.hash("khoi123"),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
