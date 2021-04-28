'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    iataCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 4]
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Airport.associate = function(models) {
    // associations can be defined here
  };
  return Airport;
};