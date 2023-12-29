'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Fruit extends Model {
        static associate(models) {
            Fruit.hasMany(models.FruitImage, {foreignKey : 'fruit_id'})
            Fruit.hasMany(models.Dish, {foreignKey : 'fruit_id'})
            Fruit.hasMany(models.LikeFruit, {foreignKey : 'fruit_id'})
            Fruit.hasMany(models.History, {foreignKey : "fruit_id"} )
        }
    }
    Fruit.init(
        {
            name: DataTypes.STRING,
            origin : DataTypes.STRING,
            taste : DataTypes.STRING,
            nutrition: DataTypes.STRING,
            color : DataTypes.STRING,
            season : DataTypes.STRING,
            medical : DataTypes.STRING,
            star: DataTypes.FLOAT,
            updatedAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('createdAt')) {
                        return toLocaleString(this.getDataValue('createdAt'))
                    }
                    return null
                },
            },
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
            modelName: 'Fruit',
        },
    )
    return Fruit
}
