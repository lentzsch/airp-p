'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Aircraft = sequelize.define('Aircraft', {
    year: {
      type:DataTypes.INTEGER,
      allowNull: false,
      Validate: {
        isNumeric: true,
      }
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100]
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100]
      }
    },
    tailNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 6]
      }
    },
    IFR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    multiEngine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    currentLocationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    homeAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER,
    }
  }, {});

  Aircraft.register = async function ({ 
    year,
    make, 
    model, 
    tailNum, 
    ifr, 
    multiEngine, 
    currentLocationId,
    homeAirportId,
    userId,
    onwerId
   }) {

    const aircraft = await Aircraft.create({
      year,
      make,
      model,
      tailNum,
      ifr,
      multiEngine,
      currentLocationId,
      homeAirportId,
      userId,
      onwerId
    });
    return await Aircraft.findByPk(user.id)
  }

  Aircraft.associate = function(models) {
    // associations can be defined here
  };
  return Aircraft;
};