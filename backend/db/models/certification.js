'use strict';
module.exports = (sequelize, DataTypes) => {
  const Certification = sequelize.define('Certification', {
    name: DataTypes.STRING
  }, {});
  Certification.associate = function(models) {
    // associations can be defined here
  };
  return Certification;
};