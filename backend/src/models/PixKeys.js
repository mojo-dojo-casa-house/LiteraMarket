const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const PixKeys = sequelize.define('PixKeys', {
    type: {
        type: DataTypes.STRING,
    },
    key:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
});

PixKeys.associate = (models) => {
    PixKeys.belongsTo(models.Users);
}

module.exports = PixKeys;