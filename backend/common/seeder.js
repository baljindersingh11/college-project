
const User = require('../model/usermodel')
const bcrypt=require('bcrypt')
const saltRounds=10

adduser = (_req,res)=>{
    User.findOne({'email':'admin@gmail.com'}).exec()
    .then(userdata=>{
        if(userdata == null)
        {
            let userobj = new User()
        
            // userobj.name = "Bali"
            userobj.email = "admin@gmail.com"
            userobj.password = bcrypt.hashSync('admin',saltRounds)
            userobj.userType = 1
            userobj.save()
        
            console.log("admin registed")

        }
        else{
            console.log("User already Exist")

        }
    })
    .catch(err=>{
        // res.json({
        //     'status':500,
        //     'success':false,
        //     'message':String(err)
        // })
    })
}

module.exports={
    adduser
}