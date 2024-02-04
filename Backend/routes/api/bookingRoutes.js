const express = require("express");
const passport = require("passport");
const {
  addBooking,
  getAllBookings,
  updateBooking,
  deleteBooking,
  uploadNic
} = require("../../controllers/bookingController");

const router = express.Router();

//@route POST api/booking/
//@desc Add booking to database
//@access private
//@developer Lahiru Srimal


//@route GET api/booking/
//@desc Get all bookings from database
//@access private
//@developer Malitha Chamikara

router.get('/getAllBookings', getAllBookings);

//@route PUT api/booking/
//@desc update a booking in the database
//@access private
//@developer Malitha Chamikara
router.put('/updateBooking/:bookingId',
  passport.authenticate("jwt", { session: false }),
  updateBooking)

//@route DELETE api/booking/
//@desc delete a booking from the database
//@access private
//@developer Malitha Chamikara

router.delete('/deleteBooking/:bookingId',
  passport.authenticate("jwt", { session: false }),
  deleteBooking)

//@route POST api/booking/
//@desc upload NIC to the database
//@access private
//@developer Malitha Chamikara
router.post('/uploadNic/:bookingId',
  passport.authenticate("jwt", { session: false }),
  uploadNic
)

module.exports = router;
