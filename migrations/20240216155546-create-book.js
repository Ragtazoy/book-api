"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("books", {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("books");
  },
};
