const express = require('express')
const passport = require('passport')
const { 
    addFacility ,
    getSingleFacilty,
    updateFacility
} = require('../../controllers/faciltyControllers')

const router = express.Router()

//@route POST api/facility/
//@desc Add facility to database
//@access private
//@developer Lahiru Srimal
router.post(
    '/register',
    passport.authenticate('jwt', { session: false }),
    addFacility)

//@route GET api/getFacility/:id
//@desc Get single facility
//@access public
//@developer Vimukthi Nuwan
router.get(
    '/getFacility/:id',
    getSingleFacilty)

//@route POST api/updateFacility/:id
//@desc update facility in the database
//@access private
//@developer Primalsha Chamodi

router.post(
    '/updateFacility/:id',
    passport.authenticate('jwt', { session: false }),
    updateFacility
)

module.exports = router