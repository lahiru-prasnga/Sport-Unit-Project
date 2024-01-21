const Facility = require('../model/facilityModel')
//controller addFacilty()
//description add facility to database
//developer Lahiru Srimal
const addFacility = async (req, res) => {
    if(req.user.userType!=='admin'){
        console.log(req.user.userType)
        console.log('user is not admin')
        return res.status(401).send('Unauthrized')
    }
    await Facility.create(req.body)
        .then(newFacility => {
            res.send(newFacility)
        })
        .catch(error => {
            res.send(error)
        })
}

//controller getSingleFacility()
//description get facility data in the database based on id
//developer Vimukthi Nuwan
const getSingleFacilty=(req,res)=>{
    Facility.findById(req.params.id)
        .then(facility=>{
            res.send(facility)
        })
        .catch(error=>{
            res.status(404).send(error)
        })
}

//controller updateFacility()
//description update facility data in the database based on id
//developer primalsha chamodi

const updateFacility=async(req,res)=>{
    try{
        if(req.user.userType!=='admin'){
            console.log(req.user.userType)
            console.log('user is not admin')
            return res.status(401).send('Unauthrized')
        }
    
        {/*await Facility.findByIdAndUpdate(facilityId, updatedData, { 
        new: true, runValidators: true }) */}

        const facilityId = req.params.id;
        const updatedData = req.body; 

        // Update the database
        const updatedFacility = await Facility.findByIdAndUpdate(
            facilityId,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedFacility) {
            return res.status(404).send('Facility not found');
        }

        // Send the updated data to the frontend
        res.send(updatedFacility);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

};
module.exports = {
    addFacility,
    getSingleFacilty,
    updateFacility
};


/* fronend -> two part authontication for update*/