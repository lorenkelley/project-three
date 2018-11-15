const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Location = new Schema({
   city: String,
   country: String

})






module.exports = mongoose.model('Location', Location)