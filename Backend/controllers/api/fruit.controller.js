require('dotenv').config();

const { getAllFruit } = require('../CRUD/fruit');

async function index(request, response) {
    try {
        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;
        
        const params = {}

        const queryResult = await getAllFruit(startIndex, limit, params);

        queryResult.count = queryResult.rows.length
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
    
}