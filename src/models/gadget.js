const { Model, DataTypes } = require('sequelize');

//Setting up model class for Gadgets Table
class Gadget extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          defaultValue: 'Available',
          validate: {                                                               //Setting default value to Available and validating other values
            isIn: [['Available', 'Deployed', 'Destroyed', 'Decommissioned']],
          },
        },
        decommissionedAt: {
          type: DataTypes.DATE,
        },
        successProbability: {
          type: DataTypes.INTEGER,
          defaultValue: Math.floor(Math.random() * 100),
        },
      },
      { sequelize, modelName: 'gadget' }
    );
  }
}

module.exports = Gadget;
