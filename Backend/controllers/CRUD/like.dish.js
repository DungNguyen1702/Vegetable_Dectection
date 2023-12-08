const models = require(process.cwd() + "/models");

const include = [
    {
        model : models.Dish,
        required : true,
        include : [
            {
                model : models.Fruit,
                required : true
            },
            {
                model : models.DishImage,
                attributes : ['image']
            }
        ]
    }
]

async function getLikeDish(fruit_id, user_id) {
    return models.LikeDish.findAll({
        include : include,
        where: { 
            user_id: user_id,
            "$Dish.Fruit.id$" : fruit_id,
        },
    });
}

async function getLikeDishByUserID(user_id) {
    return models.LikeDish.findAll({
        include : include,
        where: { 
            user_id: user_id,
        },
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
    getLikeDish : getLikeDish,
    getLikeDishByUserID : getLikeDishByUserID
};
