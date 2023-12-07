require('dotenv').config();

const { getLikeDish, createLikeDish, destroyLikeDish} = require('../CRUD/like.dish');
const { getLikeFruit, createLikeFruit, destroyLikeFruit} = require('../CRUD/like.fruit');

async function showLikeDish(request,response)
{
    try {
        const id = request.params.id

        const queryResult = await getLikeDish(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showLikeFruit(request,response)
{
    try {
        const id = request.params.id

        const queryResult = await getLikeFruit(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function addLikeFruit(request,response)
{
    try {
        const user_id = request.query.user_id
        const fruit_id = request.query.fruit_id

        await createLikeFruit({user_id : user_id, fruit_id : fruit_id});

        return response.status(200).json({
            message : "create like fruit successfully"
        });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function addLikeDish(request,response)
{
    try {
        const user_id = request.query.user_id
        const dish_id = request.query.dish_id

        await createLikeDish({user_id : user_id, dish_id : dish_id});

        return response.status(200).json({
            message : "create like dish successfully"
        });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function removeLikeFruit(request,response)
{
    try {
        const user_id = request.query.user_id
        const fruit_id = request.query.fruit_id

        await destroyLikeFruit(user_id, fruit_id);

        return response.status(200).json({
            message : "delete like fruit successfully"
        });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function removeLikeDish(request,response)
{
    try {
        const user_id = request.query.user_id
        const dish_id = request.query.dish_id

        await destroyLikeDish(user_id, dish_id);

        return response.status(200).json({
            message : "delete like dish successfully"
        });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}


module.exports = {
    showLikeDish : showLikeDish,
    showLikeFruit : showLikeFruit,
    addLikeDish : addLikeDish,
    addLikeFruit : addLikeFruit,
    removeLikeDish : removeLikeDish,
    removeLikeFruit : removeLikeFruit
}