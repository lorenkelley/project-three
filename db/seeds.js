const User = require('../models/User')
const Location = require('../models/Location')
const Properties = require('../models/Properties')
const mongoose = require('./connection')

// Property Data For First Location
const propertyOne = new Properties({
    image: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf1b03e32965fe620418a04acaef217d&auto=format&fit=crop&w=634&q=80',
    rate: '150.00',
    location: 'Atlanta, Georgia',
    dates: '12/20/2018-1/20/2018 ',
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
    .then(() => Properties.remove({}))
    .then(() => Properties.insertMany([propertyOne, propertyTwo, propertyThree, propertyFour, propertyFive]))
    .then(() => Location.insertMany([georgia]))
    .then(() => john.save())
    .then(() => console.log('Saved Sucessfully'))
    .then(() => mongoose.connection.close())