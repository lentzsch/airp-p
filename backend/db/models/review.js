'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    aircraftId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};