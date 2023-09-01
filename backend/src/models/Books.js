const DataType = require('sequelize');
const sequelize = require('../config/sequelize');

const Books = sequelize.define("Books", {
        value:
        {
            type: DataType.FLOAT,
        },

        name:
        {
            type: DataType.STRING,
            //allowNull: false
        },

        year:
        {
            type: DataType.INTEGER,
            //YEAR gerava uma mensagem de erro, pois não era um tipo reconhecido no sequelize
            //allowNull: false
        },

        author:
        {
            type: DataType.STRING,
            //allowNull: false
        },

        image:
        {
            type: DataType.BLOB,
            //allowNull: false
            //comentei allowNull para facilitar os testes enquanto não integramos o multer
        },

        genre:
        {
            type: DataType.STRING,
            //allowNull: false
        }
    })

Books.associate = (models) => {
    //Relação Deseja
    Books.belongsToMany(models.Users, {
        through: "Wish",
        as: "ProductCart",
        foreignKey: 'ProductId'
    })

    //Relação Favorita
    Books.belongsToMany(models.Users, {
        through: "Favorites",
        as: "ProductFavorited",
        foreignKey: 'ProductId'
    })

    Books.belongsToMany(models.Users, {
        through: 'Comments',
        as: 'Commented',
        foreignKey: 'BookId',
    });
}

module.exports = Books;