const Location = require('../models/Location')
const Properties = require('../models/Properties')

const propertiesController = {
     index: (req,res) => {
         var locationId = req.params.locationId 
         Location.findById(locationId).populate('properties')
         .then((location) =>{
             res.send(location.properties)
         })
     }
}


module.exports = propertiesController