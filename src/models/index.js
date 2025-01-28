const sequelize = require('../config/database');
const User = require('./user');
const Gadget = require('./gadget');

const db = {
  sequelize,
  User,
  Gadget,
};

User.init(sequelize);
Gadget.init(sequelize);

module.exports = db;
