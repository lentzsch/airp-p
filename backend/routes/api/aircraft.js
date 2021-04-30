// backend/routes/api/aircraftPage.js
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Aircraft, Airport } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

/***************** GET AIRCRAFT INFO  *****************/
router.get('/:aircraftId(\\d)', asyncHandler(async (req, res) => {
    const aircraftId = parseInt(req.params.aircraftId, 10)
    // console.log('aircraftId ------------>', aircraftId)
    const aircraft = await Aircraft.findByPk(aircraftId);

    return res.json({
        aircraft,
    });
}));

/****************** BOOK AIRCRAFT ******************/
router.put('/:aircraftId(\\d)/book', restoreUser, asyncHandler(async (req, res) => {
    const aircraftId = parseInt(req.params.aircraftId, 10)
    const userId = req.user.id
    // console.log('userId ------------>', req)
    const aircraft = await Aircraft.findByPk(aircraftId)

    const bookedAircraft = await aircraft.update({ userId })
    
    return res.json({
        bookedAircraft,
    })

}))

module.exports = router;