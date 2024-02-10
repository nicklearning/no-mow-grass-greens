// config/database.js
const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

let sequelize;

if (process.env.JAWSDB_URL) {
  // If running on Heroku with JawsDB add-on
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Otherwise, use local MySQL database
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });
}

module.exports = sequelize;
