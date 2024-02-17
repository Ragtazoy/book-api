"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "title does not Empty" },
          notEmpty: { msg: "title does not Empty" },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "author does not Empty" },
          notEmpty: { msg: "author does not Empty" },
        },
      },
      publishedYear: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { msg: "publishedYear must be Integer" },
        },
      },
      genre: DataTypes.STRING,
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { msg: "quantity must be Integer" },
        },
      },
    },
    {
      sequelize,
      tableName: "books",
      modelName: "Book",
    }
  );
  return Book;
};
