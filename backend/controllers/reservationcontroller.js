const Reservation = require('../model/reservationmodel')

function addreservation(req,res)
{
    validate = ""
// if(req.body.user_id == '' || req.body.user_id == undefined )
// {
//      validate += 'user  Id is required'
// }

// if(req.body.brand_id == '' || req.body.brand_id == undefined )
// {
//     validate += 'brand_id is required'
// }
// if(req.body.car_id == '' || req.body.car_id == undefined )
// {
//     validate += 'car id required'
// }
if(req.body.reservation_date == '' || req.body.reservation_date == undefined )
{
    validate += 'reservation_date required'
}
if(req.body.pickup_description == '' || req.body.pickup_description == undefined )
{
    validate += 'pickup description required'
}
// if(req.body.pickup_date == '' || req.body.pickup_description == undefined )
// {
//     validate += 'pickup date required'
// }
if(req.body.pickup_time == '' || req.body.pickup_description == undefined )
{
    validate += 'pickup time required'
}
// if(req.body.hours_booked == '' || req.body.hours_booked == undefined )
// {
//     validate += 'hours Booked required'
// }
// if(req.body.price_per_hour == '' || req.body.price_per_hour == undefined )
// {
//     validate += ' Price Each hours Booked required'
// }
// if(req.body.total_price == '' || req.body.total_price == undefined )
// {
//     validate += 'Total Price required'
// }
if(req.body.total_price == '' || req.body.total_price == undefined )
{
    validate += 'Total Price required'
}
// if(req.body.damage_cost == '' || req.body.damage_cost == undefined )
// {
//     validate += 'Damage Cost Of Vehicle required'
// }
// if(req.body.status == '' || req.body.status == undefined )
// {
//     validate += ' status of Booking required'
// }


if(!!validate){ 
    res.json({
       'status' : 404,
        'success' : false,
        'message' : validate
    })
}
//getting the data 
else{
    let ResObj = new Reservation()
        ResObj.user_id = req.body.user_id
        ResObj.brand_id = req.body.brand_id
        ResObj.car_id = req.body.car_id
        ResObj.reservation_date =req.body.reservation_date
        ResObj.start_time  = req.body.start_time
        ResObj.reservation_status = req.body.reservation_status
        ResObj.pickup_description  = req.body.pickup_description
        ResObj.pickup_date  = req.body.pickup_date
        ResObj.pickup_time  = req.body.pickup_time
        ResObj.hours_booked  = req.body.hours_booked
        ResObj.price_per_hour  = req.body.price_per_hour
        ResObj.total_price  = req.body.total_price
        ResObj.damage_cost  = req.body.damage_cost
        // ResObj.status  = req.body.status

    ResObj.save()

res.json({
        'status' : 200,
        'success' : true,
        'message' : "car reserved"
})
}

}

function getallreservations(req,res)
{
    Reservation.find(req.body)
    .populate('user_id')
    .populate('brand_id')
    .populate('car_id')
    .then(data=>{
        res.json({
            'status':200,
            'success':true,
            'message':'reservation Loaded',
            'data':data
        })
    })
    .catch(error=>{
        res.json({
            'status':500,
            'success':false,
            'message':String(error)
        })
    })
}

function getsinglereservation(req,res){

    validate = ""
    if(req.body._id == '' || req.body._id == undefined )
    {
        validate += 'id  is required'
    }
    
   
    
    if(!!validate){ 
        res.json({
           'status' : 404,
            'success' : false,
            'message' : validate
        })
    }
    else{
        Reservation.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            res.json({
                'status':200,
                'success':true,
                'message':'Reservation details',
                'data':data
            })
        })
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':String(err)
            })
        })
    }
}

function updatereservation(req,res){
    validate = ''
    if(req.body._id == '' || req.body._id == undefined)
    {
        validate += 'id is required'
    }
    if(req.body.reservation_status == '' || req.body.reservation_status == undefined)
    {
        validate += 'reservation_status required'
    }
  

    if(!!validate)
    {
        res.json({
            'status':409,
            'success':false,
            'message':validate
        })
    }
    else{
        Reservation.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            // console.log(data)
            if(data == null)
            {
                res.json({
                    'status':404,
                    'success':false,
                    'message':' reservation not found',
                })
            }
            else{
                data.reservation_status = req.body.reservation_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'reservation status updated',
                })
            }   
        })
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':String(err)
            })
        })
    }
}

function tempdelReservation(req,res){
    validate = ''
    if(req.body._id == '' || req.body._id == undefined)
    {
        validate += 'id is required'
    }

    if(!!validate)
    {
        res.json({
            'status':409,
            'success':false,
            'message':validate
        })
    }
    else{
        Reservation.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            
            if(data == null)
            {
                res.json({
                    'status':404,
                    'success':false,
                    'message':'Reservation not found',
                })
            }
            else{
                data.isBlocked = true
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'reservaqtion deleted',
                })
            }   
        })
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':String(err)
            })
        })
    }
}  

module.exports = {
    addreservation,
    getallreservations,
    getsinglereservation,
    updatereservation,
    tempdelReservation

}