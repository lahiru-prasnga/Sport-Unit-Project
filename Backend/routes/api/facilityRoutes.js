const express = require("express");
const passport = require("passport");
const {
  addFacility,
  getSingleFacilty,
  getAllfacilities,
  deleteSingleFacility,
  deleteAllFacilities,
  updateFacility,
} = require("../../controllers/faciltyControllers");

const router = express.Router();

//@route POST api/facility/
//@desc Add facility to database
//@access private
//@developer Lahiru Srimal
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  addFacility
);

//@route GET api/getFacility/:id
//@desc Get single facility
//@access public
//@developer Vimukthi Nuwan
router.get("/getFacility/:id", getSingleFacilty);

//@route GET api/getFacilities
//@desc Get single facilities
//@access public
//@developer Vimukthi Nuwan
router.get("/getAllFacilities", getAllfacilities);

//@route DELETE api/deleteSingleFacilities
//@desc delete single facilities
//@access public
//@developer Vimukthi Nuwan
router.delete("/deleteSingleFacility/:id", deleteSingleFacility);

//@route DELETE api/deleteAllFacilities
//@desc delete all facilities
//@access public
//@developer Vimukthi Nuwan
router.delete("/deleteAllFacilities", deleteAllFacilities);


//@route POST api/updateFacility/:id
//@desc update single facility
//@access private
//@developer Primalsha Chamodi
router.post(
    "/updateFacility/:id",
    passport.authenticate("jwt", { session: false }),
    updateFacility
  );

module.exports = router;
