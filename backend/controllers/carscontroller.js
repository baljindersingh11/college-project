const Car = require('../model/carsmodel')

function addcar(req, res) {
    console.log(req.body)
    validate = ""
    if (req.body.car_names == '' || req.body.car_names == undefined) {
        validate += 'car name is required'
    }
    // if(req.body.brand_id == '' || req.body.brand_id == undefined )
    // {
    //      validate += 'brand_id is required'
    // }

    if (req.body.description == '' || req.body.description == undefined) {
        validate += 'description is required'
    }
    // if(req.body.status == '' || req.body.status == undefined )
    // {
    //     validate += 'status is required'
    // }

    if (!!validate) {
        res.json({
            'status': 404,
            'success': false,
            'message': validate
        })
    }
    //getting the data 
    else {
        let carobj = new Car()
        carobj.brand_id = req.body.brand_id
        carobj.car_names = req.body.car_names
        carobj.description = req.body.description
        if (req.file) {
            carobj.image = 'car_images/' + req.file.filename

        }
        carobj.hourly_rent = req.body.hourly_rent
        carobj.original_price = req.body.original_price
        carobj.status = req.body.status

        carobj.save()

        res.json({
            'status': 200,
            'success': true,
            'message': "car added"
        })
    }
}
function getallcar(req, res) {
    Car.find(req.body)
    .populate('brand_id')
        .then(data => {
            res.json({
                'status': 200,
                'success': true,
                'message': 'Brand Loaded',
                'data': data
            })
        })
        .catch(err => {
            res.json({
                'status': 500,
                'success': false,
                'message': String(err)
            })
        })
}
function getsinglecar(req, res) {
    validate = ""
    if (req.body._id == '' || req.body._id == undefined) {
        validate += '_id  is required'
    }



    if (!!validate) {
        res.json({
            'status': 404,
            'success': false,
            'message': validate
        })
    }
    else {
        Car.findOne({ '_id': req.body._id }).exec()
            .then(data => {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'car Loaded',
                    'data': data
                })
            })
            .catch(err => {
                res.json({
                    'status': 500,
                    'success': false,
                    'message': String(err)
                })
            })
    }
}

function updatecar(req, res) {
    // console.log(req.body)
    // console.log(req.file)

    validate = ''
    if (req.body._id == '' || req.body._id == undefined) {
        validate += 'id is required'
    }


    if (!!validate) {
        res.json({
            'status': 409,
            'success': false,
            'message': validate
        })
    }
    else {
        Car.findOne({ '_id': req.body._id }).exec()
            .then(data => {
                // console.log(data)
                if (data == null) {
                    res.json({
                        'status': 404,
                        'success': false,
                        'message': 'Car not found',
                    })
                }
                else {
                    data.car_names = req.body.car_names
                    data.brand_id = req.body.brand_id
                    data.description = req.body.description
                    data.original_price = req.body.original_price
                    data.hourly_rent = req.body.hourly_rent
                    data.status = req.body.status
                    if (req.file) {
                        data.image = 'car_images/' + req.file.filename

                    }
                    data.save()
                    res.json({
                        'status': 200,
                        'success': true,
                        'message': 'Car updated',
                        'data': data
                    })
                }
            })
            .catch(err => {
                res.json({
                    'status': 500,
                    'success': false,
                    'message': String(err)
                })
            })
    }
}
function cartempdel(req, res) {
    // console.log(req.body)
    validate = ''
    if (req.body._id == '' || req.body._id == undefined) {
        validate += 'id is required'
    }

    if (!!validate) {
        res.json({
            'status': 409,
            'success': false,
            'message': validate
        })
    }
    else {
        Car.findOne({ '_id': req.body._id }).exec()
            .then(data => {

                if (data == null) {
                    res.json({
                        'status': 404,
                        'success': false,
                        'message': 'Car not found',
                    })
                }
                else {
                    data.isBlocked = true
                    data.save()
                    res.json({
                        'status': 200,
                        'success': true,
                        'message': 'Car deleted',
                    })
                }
            })
            .catch(err => {
                res.json({
                    'status': 500,
                    'success': false,
                    'message': String(err)
                })
            })
    }
}
module.exports = {
    addcar,
    getallcar,
    getsinglecar,
    updatecar,
    cartempdel
}