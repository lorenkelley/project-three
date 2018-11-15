const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Location = new Schema({
   city: String,
   country: String,
   properties: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Properties'
    }
   ]

})






module.exports = mongoose.model('Location', Location)