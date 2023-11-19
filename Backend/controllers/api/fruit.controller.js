require('dotenv').config();

const { getAllFruit, getById } = require('../CRUD/fruit');

async function index(request, response) {
    try {
        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;

        const queryResult = await getAllFruit(startIndex, limit);

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getFruitById(request, response)
{
    try {
        
        const id = Number.parseInt(request.params.id)

        const queryResult = await getById(id);
        
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getFruits : index,
    getFruitById : getFruitById,
}