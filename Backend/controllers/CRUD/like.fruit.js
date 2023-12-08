const models = require(process.cwd() + "/models");

async function getLikeFruit(id) {
    return models.LikeFruit.findAll({
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
