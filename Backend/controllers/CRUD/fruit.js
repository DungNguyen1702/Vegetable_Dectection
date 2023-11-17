const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.FruitImage,
        attributes: ["image"],
        // as: "Images",
    },
];

async function index(startIndex, limit, params) {
    return models.Fruit.findAndCountAll(
        objectCleaner.clean({
            include: include,
            offset: Number.isNaN(startIndex) ? null : startIndex,
            limit: Number.isNaN(limit) ? null : limit,
            order: [["id", "ASC"]],
            logging: console.log, // Bật log để xem câu truy vấn SQL
        })
    );
}

module.exports = {
    getAllFruit: index,
};
