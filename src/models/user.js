const { Model, DataTypes } = require('sequelize');

//Model class for User Table
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { sequelize, modelName: 'user' }
    );
  }
}

module.exports = User;
