'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Airports', [
        {
        iataCode: 'SZP',
        name: 'Santa Paula Airport',
        city: 'Santa Paula',
        state: 'California',
        },
        {
          iataCode: 'ADS',
          name: 'Addison Airport',
          city: 'Addison',
          state: 'Texas',
        },
        {
          iataCode: 'WHP',
          name: 'Whitman Airport',
          city: 'Pacioma',
          state: 'California',
        },
        {
          iataCode: 'GLS',
          name: 'Scholes International Airport',
          city: 'Galviston',
          state: 'Texas',
        },
        {
          iataCode: 'VNY',
          name: 'Van Nuys Airport',
          city: 'Van Nuys',
          state: 'California',
        },
        {
          iataCode: 'FGU',
          name: 'Collegedale Municipal Airport',
          city: 'Apison',
          state: 'Tennessee'
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
