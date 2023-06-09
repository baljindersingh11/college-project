const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    'name': { type: String, default: '' },
    'email': { type: String, default: '' },
    'contact': { type: Number, default: '' },
    'password': { type: String, default: '' },
    'userType': { type: Number, default: 2 }, //1=admin,2=customer
    'created_at': { type: Date, default: Date.now() },
    'isBlocked': { type: Boolean, default: false }
})

module.exports = new mongoose.model('user', userSchema)