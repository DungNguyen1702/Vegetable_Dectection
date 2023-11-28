const auth = require('./auth.route')
const fruit = require('./fruit.route')
const user = require('./user.route')
const ui = require('./ui.route')

module.exports = {
    auth : auth,
    fruit : fruit,
    user : user,
    ui : ui,
}
