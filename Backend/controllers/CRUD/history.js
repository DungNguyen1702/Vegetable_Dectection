const models = require(process.cwd() + "/models");

const include = [
    {
        model : models.Fruit,
        required : true
    }
]

async function getHistoryByUserId(userID) {
    return models.History.findAndCountAll({
        include : include,
        where: { user_id: userID },
    });
}

async function createHistory(history) {
    return models.History.create(history);
}


module.exports = {
    showHistoryByUserId: getHistoryByUserId,
    createHistory : createHistory,
};
