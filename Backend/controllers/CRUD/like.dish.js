const models = require(process.cwd() + "/models");

async function getLikeDish(id) {
    return models.LikeDish.findAll({
        where: { user_id: id },
    });
}

async function create(data) {
    return models.LikeDish.create(data);
}

async function destroy(userId, dishId) {
    return models.LikeDish.destroy({
        where: {
            user_id: userId,
            dish_id: dishId
        }
    });
}

module.exports = {
    createLikeDish : create,
    destroyLikeDish : destroy,
    getLikeDish : getLikeDish
};
