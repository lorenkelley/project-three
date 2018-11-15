const express = require('express')
const router = express.Router()


// User Routes
router.get('/users', userController.index)
// users by id 
router.post('users/' ,userController.create)
router.get('/users/:userId', userController.show)
router.patch('/users/:userId' , userController.update)
router.delete('users/:userId', userController.delete)
// ---------------
// Location Routes
router.get('/location' , locationController.index)
//  location homepage : display all locations
router.get('/location/:locationId', locationController.show)
//  when you select a location take you to that specific location id
// ----------------
// Properties Routes
router.get('/location/:locationId/properties' , propertiesController.index )







module.exports = router