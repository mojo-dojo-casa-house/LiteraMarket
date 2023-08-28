const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const PixKeys = sequelize.define('PixKeys', {
    pixKey:{
        type: DataTypes.STRING,
    },
});

PixKeys.associate = (models) => {
    PixKeys.belongsTo(models.Users);
}

module.exports = PixKeys;