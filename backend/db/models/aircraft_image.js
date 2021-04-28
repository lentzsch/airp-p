'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aircraft_image = sequelize.define('Aircraft_image', {
    aircraftId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Aircraft_image.associate = function(models) {
    // associations can be defined here
  };
  return Aircraft_image;
};