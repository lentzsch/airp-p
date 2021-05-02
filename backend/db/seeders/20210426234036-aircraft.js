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
        imageUrl1: 'https://dsgiipnwy1jd8.cloudfront.net/eyJidWNrZXQiOiJ0YXAtYXNzZXRzMSIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJhbHBoYSI6MSwiciI6MjU1LCJiIjoyNTUsImciOjI1NX19LCJzbWFydE92ZXJsYXkiOnsiYnVja2V0IjoidGFwLWFzc2V0czEiLCJrZXkiOiJ3YXRlcm1hcmsucG5nIn19LCJrZXkiOiI3NjU0MDEuanBnIn0=',
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
          imageUrl1: 'https://dsgiipnwy1jd8.cloudfront.net/eyJidWNrZXQiOiJ0YXAtYXNzZXRzMSIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJhbHBoYSI6MSwiciI6MjU1LCJiIjoyNTUsImciOjI1NX19LCJzbWFydE92ZXJsYXkiOnsiYnVja2V0IjoidGFwLWFzc2V0czEiLCJrZXkiOiJ3YXRlcm1hcmsucG5nIn19LCJrZXkiOiI3ODQ4NTkuanBnIn0=',
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
          imageUrl1: 'https://dsgiipnwy1jd8.cloudfront.net/eyJidWNrZXQiOiJ0YXAtYXNzZXRzMSIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJhbHBoYSI6MSwiciI6MjU1LCJiIjoyNTUsImciOjI1NX19LCJzbWFydE92ZXJsYXkiOnsiYnVja2V0IjoidGFwLWFzc2V0czEiLCJrZXkiOiJ3YXRlcm1hcmsucG5nIn19LCJrZXkiOiI3ODgwODQuanBnIn0=',
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
          imageUrl1: 'https://dsgiipnwy1jd8.cloudfront.net/eyJidWNrZXQiOiJ0YXAtYXNzZXRzMSIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJhbHBoYSI6MSwiciI6MjU1LCJiIjoyNTUsImciOjI1NX19LCJzbWFydE92ZXJsYXkiOnsiYnVja2V0IjoidGFwLWFzc2V0czEiLCJrZXkiOiJ3YXRlcm1hcmsucG5nIn19LCJrZXkiOiI3ODU2NzIuanBnIn0=',
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
