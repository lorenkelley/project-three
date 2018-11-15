const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    userprofile: {
        location: String
    }w
})






module.exports = mongoose.model('User', User)