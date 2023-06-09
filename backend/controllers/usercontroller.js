const User = require('../model/usermodel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secretkey = 'baliproject#101@'
login = (req, res) => {          

    validate = ""
    // if (req.body.name == '' || req.body.name == undefined) {
    //     validate += ' name is required'
    // }

    if (req.body.email == '' || req.body.email == undefined) {
        validate += 'email is required'
    }
    if (req.body.password == '' || req.body.password == undefined) {
        validate += 'password is required'
    }

    if (!!validate) {
        res.json({
            'status': 404,
            'success': false,
            'message': validate
        })
    }
    else {
        User.findOne({ 'email': req.body.email }).exec()
            .then(userdata => {
                if (userdata == null) {
                    res.json({
                        'status': 404,
                        'success': false,
                        'message': 'User not found'
                    })
                }
                else {
                    bcrypt.compare(req.body.password, userdata.password)
                        .then(data => {
                            if (data) {
                                payload = {
                                    '_id': userdata._id,
                                    'name': userdata.name,
                                    'email': userdata.email,
                                    'userType': userdata.userType,
                                }

                                var token = jwt.sign(payload, secretkey)

                                res.json({
                                    'status': 200,
                                    'success': true,
                                    'message': 'Login Successfully',
                                    'data': userdata,
                                    'token': token
                                })
                            }
                            else {
                                res.json({
                                    'status': 200,
                                    'success': false,
                                    'message': 'Password is Invalid'
                                })
                            }
                        })
                        .catch(err => {
                            res.json({
                                'status': 200,
                                'success': false,
                                'message': 'Password Invalid'
                            })
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

function adduser(req,res){
    valid = ''
    if(req.body.name == '' || req.body.name == undefined)
    {
        valid += 'first name is required \n'
    }
       
    if(req.body.email == '' || req.body.email == undefined)
    {
        valid += 'Email is required'
    }    
    // if(req.body.contact == '' || req.body.contact == undefined)
    // {
    //     valid += 'contact is required'
    // }
    if(req.body.password == '' || req.body.password == undefined)
    {
        valid += 'password is required'
    }

    if(!!valid){
        res.json({
            'status':409,
            'success':false,
            'msg' : valid
        })
    }
    else{
        let userObj = new User()
        userObj.name = req.body.name
        userObj.email = req.body.email
        userObj.contact = req.body.contact
        userObj.password = req.body.password
        hashpassword = bcrypt.hashSync(req.body.password,saltRounds)
        userObj.password = hashpassword
        userObj.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'user registered'
        })

    }
}

function getall(req,res){
    User.find(req.body).exec()
    .then(data=>{
        res.json({
            'status':200,
            'success':true,
            'message':'User Loaded',
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


function getsingle(req,res){
    vallidators = ''
    if(req.body._id == '' || req.body._id == undefined)
    {
        vallidators += '_id is required'
    }

    if(!!vallidators)
    {
        res.json({
            'status':409,
            'success':false,
            'message':vallidators
        })
    }
    else{

        User.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            res.json({
                'status':200,
                'success':true,
                'message':'user Loaded',
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


module.exports = {
    login,
    adduser,
    getall,
    getsingle
}