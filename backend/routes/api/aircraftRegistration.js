// backend/routs/api/aircraftRegistration.js
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { aircraft } = require('../../db/models');
const router = express.Router();

/***************** VALIDATIONS  *******************/
const validateAircraft = [
    check('year')
        .exists({ checkFalsy: true })
        .isLength({ min: 4, max: 4})
        .withMessage('Please provide a valid year'),
    check('make')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid make for your aircraft.'),
    check('model')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid model for your aircraft.'),
    check('tailNum')
        .exists({ checkFalsy: true })
        .isLength({ min: 6, max: 6 })
        .withMessage('Please provide a valid 6 character tail number'),
    check('homeAirport')
        .exists({ checkFalsy: true })
        .isLength({ min: 3, max: 4})
        .withMessage('Please provide a valid 3 or 4 character airport code'),
    handleValidationErrors,
]

/***************** REGISTER AIRCRAFT ******************/
router.post(
    '',
    validateAircraft,
    asyncHandler(async (req, res) => {
        const {
            year,
            make,
            model,
            tailNum,
            ifr,
            multiEngine,
            homeAirport,
            userId,
            ownerId,
        } = req.body
        const aircraft =await Aircraft.registration(
            {
                year,
                make,
                model,
                tailNum,
                ifr,
                multiEngine,
                homeAirport,
                userId,
                ownerId,
            }
        )

        return res.json({
            aircraft,
        });
    }),
);

module.exports = router;