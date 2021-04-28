'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[3, 256]
      },
    },
    pplNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [7,7]
      }
    },
    certificationsId: {
      type: DataTypes.INTEGER,
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    aircraftId: {
      type: DataTypes.INTEGER,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword']},
      },
      loginUser: {
        attributes: {},
      }
    },
  });

  User.prototype.toSafeObject = function() {
    const { id, firstName, lastName, email, pplNumber, hours } = this;
    return { id, firstName, lastName, email, pplNumber, hours }
  };
  
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  }

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          pplNumber: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, email, pplNumber, hours, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      pplNumber,
      hours,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id)
  }

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};