//Database setup for PostgreSQL

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URI, {       
  dialect: 'postgres',
  logging: false, // Disable logging (for cleaner output)
});

module.exports = sequelize;
