const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Users = sequelize.define('Users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Users.associate = (models) => {
    Users.hasMany(models.Addresses);
    Users.hasMany(models.Contact);
    Users.hasMany(models.PaymentCard);
    Users.hasOne(models.Auth);
    Users.hasMany(models.PixKeys);

    Users.belongsToMany(models.Users, {
        through: 'Avaliations',
        as: 'Avaliator',
        foreignKey: 'avaliatorId'
    })
    Users.belongsToMany(models.Users, {
        through: 'Avaliations',
        as: 'Avalied',
        foreignKey: 'availedId'
    })

    Users.hasMany(models.Books, {
        as: 'Seller',
        foreignKey: 'SellerId',
    });
    Users.hasMany(models.Books, {
        as: 'Buy',
        foreignKey: 'BuyerId'
    });

    Users.belongsToMany(models.Books, {
        through: 'Wish',
        as: 'UserCart',
        foreignKey: 'UserId'
    });
    Users.belongsToMany(models.Books, {
        through: 'Favorites',
        as: 'UserFavorite',
        foreignKey: 'UserId'
    });
    Users.hasMany(models.Comments);
}

module.exports = Users;