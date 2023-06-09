const mongoose = require('mongoose')

const carSchema = mongoose.Schema({

    'brand_id' :  { type :mongoose.Schema.Types.ObjectId,ref:'brand',default:''},
    'car_names' : { type : String,default : ''},
    'description' : { type : String,default : ''},
    'image' : { type : String,default : '' },
    'hourly_rent' : { type : String,default : '' },
    'original_price' : { type : String,default : '' },
                     
    'status ' : { type : Boolean, default : false }, // false = not reserved, true = reserved

    'created_at' : {type:Date,default : Date.now()},
    'isBlocked' : {type:Boolean,default:false}   
})

module.exports = new mongoose.model('car',carSchema)
