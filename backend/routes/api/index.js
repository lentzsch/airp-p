// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const aircraftRegistrationRouter = require('./aircraftRegistration')
const galleryRouter = require('./gallery')
const aircraftRouter = require('./aircraft')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/aircraftRegistration', aircraftRegistrationRouter);
router.use('/gallery', galleryRouter);
router.use('/aircraft', aircraftRouter);

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;