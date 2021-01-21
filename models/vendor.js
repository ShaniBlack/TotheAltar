'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.belongsTo(models.event)
    }
  };
  Vendor.init({
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_name: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        len: [1, 50],
      },
    },
    address: {
        type: DataTypes.STRING,
    },
    projected_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actual_cost: {
      type: DataTypes.INTEGER,
    },
    contract: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};