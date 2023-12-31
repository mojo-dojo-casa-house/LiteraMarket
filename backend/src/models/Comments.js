const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Comments = sequelize.define('Comments', {
    avaliation: {
        type: DataTypes.INTEGER,
        validate :{
            min: 0,
            max: 5
        }
    },
    comment: {
        type: DataTypes.TEXT,
    }
});

Comments.associate = (models) => {
    Comments.hasMany(models.Users); 
    Comments.hasMany(models.Books);
};

module.exports = Comments