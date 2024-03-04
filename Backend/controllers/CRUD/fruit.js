const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.FruitImage,
        attributes: ["image"],
    },
];

const include2 = [
    {
        model: models.FruitImage,
        attributes: ["image"],
    },
    {
        model : models.Dish,
        require : false,
        include : [
            {
                model : models.DishImage,
                attributes : ["image"],
            }
        ]
    },
];

async function index(txt_search) {

    const conditions = txt_search ? {
        [Op.or]: [
            { name: { [Op.like]: `%${txt_search}%` } },
        ],
    } : null

    return models.Fruit.findAndCountAll(
        objectCleaner.clean({
            include: include,
            where: conditions,
            order: [["id", "ASC"]],
        })
    );
}

async function showById(id) {
    return models.Fruit.findByPk(id, {
        include : include2,
    });
}

module.exports = {
    getAllFruit: index,
    getById : showById,
};
