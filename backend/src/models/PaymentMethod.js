const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const PaymentMethod = sequelize.define('PaymentMethod', {
    accountNumber: {
        type: DataTypes.STRING,
        validate: {
            isCreditCard: true,
        }
    },
    agency:{
        type: DataTypes.STRING,
    },
    pixKey:{
        type: DataTypes.STRING,
    },
    bank:{
        type: DataTypes.STRING,
    }
})

PaymentMethod.associate = (models) => {
    PaymentMethod.belongsTo(models.Users);
}

module.exports = PaymentMethod;