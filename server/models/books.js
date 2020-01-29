'use strict';
module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        publisher: DataTypes.STRING,
        year: DataTypes.INTEGER,
        imgURL: DataTypes.STRING
    }, {});
    Books.associate = function (models) {
        // associations can be defined here
    };
    return Books;
};