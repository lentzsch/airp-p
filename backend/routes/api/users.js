// backend/routes/api/user.js
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

/****************** VALIDATIONS  ******************/
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('First Name')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Please provide a first name with at least 2 characters.'),
    check('firstName')
        .not()
        .isEmail()
        .withMessage('First name cannot be an email.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Please provide a lat name with at least 2 characters.'),
    check('lastName')
        .not()
        .isEmail()
        .withMessage('Last name cannot be an email.'),
    check('pplNumber')
        .exists({checkFalsey: true})
        .isLength({min: 7, max: 7})
        .withMessage('Certificate number must be 7 numbers'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
]

/******************* SIGN UP **********************/
router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { firstName, lastName, email, pplNumber, hours, password } = req.body;
        const user = await User.signup({ firstName, lastName, email, pplNumber, hours, password });
        consol.log(user);
        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;