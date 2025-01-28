//Database setup for PostgreSQL

const { Sequelize } = require('sequelize');
require('dotenv').config();
const db ="postgresql://postgres:iszpjuuypYXiUQXmWVsuVpkLscrMAkqG@roundhouse.proxy.rlwy.net:29476/imf_gadgets"
// const sequelize = new Sequelize(process.env.DB_URI, {    
const sequelize = new Sequelize(db, {      
  dialect: 'postgres',
  logging: false, // Disable logging (for cleaner output)
});

module.exports = sequelize;
