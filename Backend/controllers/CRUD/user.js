const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

async function showUserByAccount(account) {
    return models.User.findOne({
        where: { account: account },
    });
}

async function showUserByID(id) {
    return models.User.findOne({
        where: { id: id },
    });
}

async function index(startIndex, limit) {
    return models.User.findAndCountAll(
        objectCleaner.clean({
            // include: include,
            offset: Number.isNaN(startIndex) ? null : startIndex,
            limit: Number.isNaN(limit) ? null : limit,
            order: [["id", "ASC"]],
        })
    );
}

async function create(user) {
    return models.User.create(user);
}

async function update(user, id) {
    return models.User.update(user,{
        where : {id : id}
    });
}

module.exports = {
    getUserByAccount: showUserByAccount,
    getUserByID : showUserByID,
    getAll: index,
    create : create,
    update : update,
};
