const Location = require('../models/Location')


const locationController = {
       index: (req, res) => {
           Location.find({})
           .then((locations) => {
               res.send(locations)
           })
       },
       show: (req,res) => {
           Location.findByIdAndDelete(req.params.locationId).populate('properties')
           .then((location) =>{
               res.send(location)
           })
       }
}

module.exports = locationController