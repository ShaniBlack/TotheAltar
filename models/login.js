'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Login.belongsTo(models.User)
    }
  };
Login.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
      }, {
    sequelize,
    modelName: 'Login',
  });
  return Login;
};