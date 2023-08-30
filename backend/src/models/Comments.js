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
        allowNull: false,
    }
});

Comments.associate = (models)=>{
    Comments.hasOne(models.Users);
    Comments.hasOne(models.Books);
}

module.exports = Comments