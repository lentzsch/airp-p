// backend/routs/api/gallery.js
const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const { User, Aircraft, Airport } = require('../../db/models')

/***************** GET ALL AIRCRAFT ****************/
router.get('', asyncHandler(async (req, res) => {
    const aircraft = await Aircraft.findAll({
        where: {
            userId: null,
        },
        include: Airport
    })
    // console.log('aircraft ------------>',aircraft)
    return res.json(
        aircraft,
    )
}))

/****************** GET AIRPORTS ******************/
router.get('/airports', asyncHandler(async (req, res) => {
    const airports = await Airport.findAll()

    return res.json(
        airports,
    )
}))

/************** GET FILTERED AIRCRAFT *************/
router.get('/:airportId(\\d)', asyncHandler(async (req, res) => {
    const airportId = parseInt(req.params.airportId, 10)

    const filteredAircraft = await Aircraft.findAll({
        where: {
            currentLocationId: airportId
        }
    })

    return res.json(
        filteredAircraft,
    );
}));

module.exports = router;