const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    locations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Location'
        }
    ]
})



module.exports = mongoose.model('User', User)