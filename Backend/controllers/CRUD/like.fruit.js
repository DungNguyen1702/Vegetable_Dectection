const models = require(process.cwd() + "/models");

const include = [
    {
        model : models.Fruit,
        required : true,
        include : [
            {
                model: models.FruitImage,
                attributes: ["image"],
            },
        ]
    }
]

async function getLikeFruit(id) {
    return models.LikeFruit.findAll({
        include : include,
        where: { user_id: id },
    });
}

async function create(data) {
    return models.LikeFruit.create(data);
}

async function destroy(userId, fruitId) {
    return models.LikeFruit.destroy({
        where: {
            user_id: userId,
            fruit_id: fruitId
        }
    });
}

module.exports = {
    createLikeFruit : create,
    destroyLikeFruit : destroy,
    getLikeFruit : getLikeFruit
};
