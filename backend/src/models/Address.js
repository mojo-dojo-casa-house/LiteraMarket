const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Address = sequelize.define('Address', {
    cep:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /\d{5}-\d{3}/
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

Address.associate = (models) => {
    Address.belongsTo(models.Users);
}

module.exports = Address;