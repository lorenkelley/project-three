const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const locationController = require('../controllers/locationController')
const propertiesController = require('../controllers/propertiesController')

// User Routes
router.get('/api/users', userController.index)
// users by id 
router.post('/api/users' ,userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId' , userController.update)
router.delete('/api/users/:userId', userController.delete)
// ---------------
// Location Routes
router.get('/api/location' , locationController.index)
//  location homepage : display all locations
router.get('/api/location/:locationId', locationController.show)
//  when you select a location take you to that specific location id
// ----------------
// Properties Routes
router.get('/api/location/:locationId/properties' , propertiesController.index )







module.exports = router