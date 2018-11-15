const User = require('../models/User')
const Location = require('../models/User')
const Properties = require('../models/User')
const mongoose = require('./connection')

// Property Data For First Location
const propertyOne = new Properties({
    image: '',
    rate: '',
    location: '',
    dates: '',
    description: ''
})
const propertyTwo = new Properties({
    image: '',
    rate: '',
    location: '',
    dates: '',
    description: ''
})
const propertyThree = new Properties({
    image: '',
    rate: '',
    location: '',
    dates: '',
    description: ''
})
const propertyFour = new Properties({
    image: '',
    rate: '',
    location: '',
    dates: '',
    description: ''
})
const propertyFive = new Properties({
    image: '',
    rate: '',
    location: '',
    dates: '',
    description: ''
})
// Location One
const georgia = new Location({
    city: 'Atlanta',
    country: 'United States',
    properties: [propertyOne, propertyTwo, propertyThree, propertyFour, propertyFive]
})
// --------
// User Data
const john = new User({
    username: 'john-doe',
    password: 'abc123',
    locations: [georgia]
})

User.remove({})
    .then(() => Location.remove({}))
    .then(() => Location.insertMany([georgia]))
    .then(() => john.save())
    .then(() => console.log('Saved Sucessfully'))
    .then(() => mongoose.connection.close())