'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Aircraft', [
        {
        year: 2015,
        make: 'Cessna',
        model: '152',
        tailNumber: 'N4852P',
        ifr: false,
        multiEngine: false,
        imageUrl1: 'https://compote.slate.com/images/222e0b84-f164-4fb1-90e7-d20bc27acd8c.jpg?width=1600',
        imageUrl2: '../../images/aircraft-images/plane-1-image-2',
        imageUrl3: '../../images/aircraft-images/plane-1-image-3',
        imageUrl4: '../../images/aircraft-images/plane-1-image-4',
        currentLocationId: 6,
        homeAirportId: 1,
        userId: null,
        ownerId: null
      },
      {
          year: 1972,
          make: 'Smith',
          model: 'Cub',
          tailNumber: 'N3141Y',
          ifr: false,
          multiEngine: false,
          imageUrl1: '../../images/aircraft-images/plane-2/plane-2-image-1.jpg',
          imageUrl2: '../../images/aircraft-images/plane-2-image-2',
          imageUrl3: '../../images/aircraft-images/plane-2-image-3',
          imageUrl4: '../../images/aircraft-images/plane-2-image-4',
          currentLocationId: 3,
          homeAirportId: 2,
          userId: null,
          ownerId: null
        },
        {
          year: 2003,
          make: 'Diamond',
          model: 'DA40',
          tailNumber: 'N333WF',
          ifr: true,
          multiEngine: false,
          imageUrl1: '../../images/aircraft-images/plane-3/plane-3-image-1.jpg',
          imageUrl2: './images/test',
          imageUrl3: './images/test',
          imageUrl4: './imeges/test',
          currentLocationId: 7,
          homeAirportId: 3,
          userId: null,
          ownerId: 2
        },
        {
          year: 2003,
          make: 'Cirrus',
          model: 'SR22',
          tailNumber: 'N75MG',
          ifr: true,
          multiEngine: false,
          imageUrl1: '../../images/aircraft-images/plane-4/plane-4-image-1.jpg',
          imageUrl2: './images/test',
          imageUrl3: './images/test',
          imageUrl4: './images/test',
          currentLocationId: 8,
          homeAirportId: 4,
          userId: null,
          ownerId: 2
        },
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
