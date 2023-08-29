const DataType = require('sequelize');
const sequelize = require('../config/sequelize');

const Books = sequelize.define("Books",
{
    id:
    {
        type : DataType.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false
    },

    value:
    {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            is: /^(?=.*\d)\d*(?:\.\d{1,2})?$/
        }
    },

    name:
    {
        type: DataType.STRING,
        allowNull: false
    },

    year:
    {
        type: DataType.YEAR,
        allowNull: false
    },

    author:
    {
        type: DataType.STRING,
        allowNull: false
    },

    image:
    {
        type: DataType.BLOB,
        allowNull: false
    },

    genre:
    {
        type: DataType.STRING,
        allowNull: false
    }
})

Books.associate = function(models)
{
    //Relação Vende
    Books.belongsTo(models.Users, {as: "Sell", foreignKey: 'UserSellFK'})

    //Relação Deseja
    Books.belongsToMany(models.Users,{through: "UserWish", as: "Wish"})

    //Relação Favorita
    Books.belongsToMany(models.Users, {through: "UserWish", as: "Favorite"})

    //Relação Comenta
    Books.belongsToMany(models.Users, {through: "UserComment", as: "Comment"})

    //Relação Compra
    Books.belongsTo(models.Users, {as: "Buy", foreignKey: 'UserBuyFK'})
}