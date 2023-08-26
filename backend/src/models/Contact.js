const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Contact = sequelize.define('Contact', {
    codCountry:{
        type: DataTypes.INTEGER,
        defaultValue: 55,
        validate: {
            isInt: true,
        }
    },
    codArea:{
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
        }
    },
    number:{
        type: DataTypes.STRING,
        validate: {
            isNumeric: true,
        }
    }
})

Contact.associate = (models) => {
    Contact.belongsTo(models.Users);
}

module.exports = Contact;