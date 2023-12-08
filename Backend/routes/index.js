const auth = require('./auth.route')
const fruit = require('./fruit.route')
const user = require('./user.route')
const ui = require('./ui.route')
const history = require('./history.route')
const like = require("./like.route")

module.exports = {
    auth : auth,
    fruit : fruit,
    user : user,
    ui : ui,
    history : history,
    like : like
}
