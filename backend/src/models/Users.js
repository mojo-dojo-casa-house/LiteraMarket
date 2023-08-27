const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Users = sequelize.define('Users', {
    salt:{
        type: DataTypes.STRING
    },
    hash:{
        type: DataTypes.STRING
    },
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
    Users.hasMany(models.Address);
    Users.hasMany(models.Contact);
    Users.hasMany(models.PaymentMethod);
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
}

module.exports = Users;