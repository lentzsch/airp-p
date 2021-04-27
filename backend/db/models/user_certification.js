'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_certification = sequelize.define('User_certification', {
    userId: DataTypes.INTEGER,
    certificationId: DataTypes.INTEGER
  }, {});
  User_certification.associate = function(models) {
    // associations can be defined here
  };
  return User_certification;
};