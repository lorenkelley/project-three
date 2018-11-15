const User = require('../models/User')
const Location = require('../models/User')
const Properties = require('../models/User')
const mongoose = require('./connections')

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



const atlanta = new Location({
   city: 'Atlanta',
   country: 'United States',
   properties: [ propertyOne, propertyTwo, propertyThree , propertyFour, propertyFive]
})


const john = new User({
    username: 'john-doe',
    password: 'abc123',
})

