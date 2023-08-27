const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Avaliation = sequelize.define('Avaliations', {
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 5,
            isNumeric: true
        }
    }
})

module.exports = Avaliation;