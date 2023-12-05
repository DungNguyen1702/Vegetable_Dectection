const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

async function showUserByAccount(account) {
    return models.User.findOne({
        where: { account: account },
    });
}

async function updateAvatar(id, avatar) {
    return models.User.update(
        avatar, {
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

module.exports = {
    getUserByAccount: showUserByAccount,
    getAll: index,
    updateAvatar : updateAvatar,
};
