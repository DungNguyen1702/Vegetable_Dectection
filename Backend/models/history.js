'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
            History.belongsTo(models.User, { foreignKey: 'user_id' })
            History.belongsTo(models.Fruit, { foreignKey: 'fruit_id' })
        }
    }
    History.init(
        {
            fruit_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            image : DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('createdAt')) {
                        return toLocaleString(this.getDataValue('createdAt'))
                    }
                    return null
                },
            },
        },
        {
            sequelize,
            modelName: 'History',
        },
    )
    return History
}
