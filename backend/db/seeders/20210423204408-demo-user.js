'use strict';
const bcrypt = require('bcryptjs');
// const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [
        {
          firstName: 'Demo',
          lastName: 'Lition',
          email: 'demo@user.io',
          pplNumber: 3948441,
          certificationsId: null,
          hours: 500,
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          firstName: 'Owner',
          lastName: 'McPwnd',
          email: 'demo@owner.io',
          pplNumber: 3948442,
          certificationsId: null,
          hours: 501,
          hashedPassword: bcrypt.hashSync('password'),
        },
        // {
        //   username: 'Cpt-Murphy',
        //   email: faker.internet.email(),
        //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
        // },
        // {
        //   username: 'Lil-Marco',
        //   email: 'demo@user.io',
        //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
        // },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete('Users', {
        username: { [Op.in]: ['Demo-lition', 'Cpt-Murphy', 'Lil-Marco'] }
      }, {});
  }
};
