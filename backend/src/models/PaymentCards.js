const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const PaymentCard = sequelize.define('PaymentCard', {
    accountNumber: {
        type: DataTypes.STRING,
        validate: {
            isCreditCard: true,
        }
    },
    valid:{
        type: DataTypes.STRING,
        validate: {
            is: /0[1-9]|1[0-2]\/\d{2}/
        }
    },
    flag:{
        type: DataTypes.STRING,
    },
    securityCode: {
        type: DataTypes.INTEGER,
        validate: {
            is: /\d{3}/
        }
    }
})

PaymentCard.associate = (models) => {
    PaymentCard.belongsTo(models.Users);
}

module.exports = PaymentCard;