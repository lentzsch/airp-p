'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aircraft', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      make: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      tailNumber: {
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: true,
      },
      IFR: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      numOfEngines: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      turbine: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      currentLocationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      homeAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Aircraft');
  }
};