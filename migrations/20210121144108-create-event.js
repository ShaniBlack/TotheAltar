'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING
      },
      event - date: {
        type: Sequelize.DATE
      },
      bride_groom1: {
        type: Sequelize.STRING
      },
      bride_groom2: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      estimated_guest: {
        type: Sequelize.INTEGER
      },
      estimated_guest: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};