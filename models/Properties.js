const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Properties = new Schema({
    image: String,
    rate: Number,
    location: String,
    dates: String,
    description: String
})






module.exports = mongoose.model('Properties', Properties)