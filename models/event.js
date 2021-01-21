'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.User)
    }
  };
  Event.init({
    event_name: DataTypes.STRING,
    event_date: DataTypes.DATE,
    bride_groom1: DataTypes.STRING,
    bride_groom2: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    estimated_guest: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};