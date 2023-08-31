const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Addresses = sequelize.define('Addresses', {
    cep:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /\d{8}/
        }
    },
    street:{
        type: DataTypes.STRING,
    },
    number:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
        }
    },
    complement: {
        type: DataTypes.STRING,
    }
})

Addresses.associate = (models) => {
    Addresses.belongsTo(models.Users);
}

module.exports = Addresses;