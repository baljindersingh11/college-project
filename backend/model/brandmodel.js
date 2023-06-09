const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({

    'brand_name' :  { type : String,default : ''},
    'brand_logo' : { type : String,default : ''},
    'status' : { type : String,default : '' },
    'created_at' : {type:Date,default : Date.now()},
    'isBlocked' : {type:Boolean,default:false}   
})

//schema
module.exports = new mongoose.model('brand',brandSchema)