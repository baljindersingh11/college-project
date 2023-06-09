const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({

    'user_id' :  { type : mongoose.Schema.Types.ObjectId,ref:'user',default : ''},
    'brand_id' :  { type :mongoose.Schema.Types.ObjectId,ref:'brand',default : ''},
    'car_id' : { type :mongoose.Schema.Types.ObjectId,ref:'car',default : ''},
    'reservation_date' : { type : Date ,default : Date.now()},
    'start_time' : { type : String,default : '' },
    'reservation_status' : { type : String,default : 'Pending' },
    'pickup_description' : { type : String,default : ''},
    'pickup_date' : { type : Date,default : null },
    'pickup_time' : { type : String,default : '' },
    'hours_booked' : { type : String ,default : '' },
    'price_per_hour' : { type : Number,default : 0 },
    'total_price' : { type : Number,default : 0 },
    'damage_cost' : { type : Number,default : 0 },
    'status' : { type : String,default : 'Active' },
    'created_at' : {type:Date,default : Date.now()},
    'isBlocked' : {type:Boolean,default:false}   
})

module.exports = new mongoose.model('reservation',reservationSchema)
