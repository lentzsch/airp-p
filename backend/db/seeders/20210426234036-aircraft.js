'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Aircraft', [
        {
        year: 1972,
        make: 'Cessna',
        model: '152',
        tailNumber: 'N704UT',
        ifr: false,
        multiEngine: false,
        currentLocationId: 1,
        homeAirportId: 1,
        userId: null
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
