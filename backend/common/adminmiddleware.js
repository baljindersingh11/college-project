const jwt = require("jsonwebtoken")
const secretkey = 'baliproject#101@'

module.exports = (req,res,next)=>{
    const token = req.headers['authorization'];
    // console.log(token)
    if(token)
    {
        jwt.verify(token,secretkey,function(err,decoded){
            if(err)
            {
                res.json({
                    'status':403,
                    'success':false,
                    'message':'Unauthorised User'
                })
            }
            else{
                // console.log(decoded)
                req.decoded = decoded
                next()
            }
        })
    }
    else{
        res.json({
            'status':403,
            'success':false,
            'message':'Unauthorised User'
        })
    }
}