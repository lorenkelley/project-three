const express = require('express')
const router = express.Router()


// User Routes
router.get('/users', userController.index)
router.post('users/' ,userController.create)
router.get('/users/:userId', userController.show)
router.patch('/users/:userId' , userController.update)
router.delete('users/:userId', userController.delete)
// Location Routes

module.exports = router