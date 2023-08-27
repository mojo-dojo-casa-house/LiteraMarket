const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Auth = sequelize.define('Auth', {
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Auth.associate = (models) => {
    Auth.belongsTo(models.Users);
}

module.exports = Auth;
