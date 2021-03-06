const { Sequelize, DataTypes } = require('sequelize');

require("dotenv").config()

const sequelize = new Sequelize(`${process.env.database}`, `${process.env.user}`, `${process.env.password}`, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  }
});

module.exports = { sequelize };

