const Brand = require('../model/brandmodel')

function addbrand(req,res)
{
    // console.log(req.body)
    // console.log(req.file)
    validate = ""
    if(req.body.brand_name == '' || req.body.brand_name == undefined )
    {
    validate += 'brand name is required'
    }

    if(req.body.status == '' || req.body.status == undefined )
    {
    validate += 'status is required'
    }

    if(!!validate){ 
    res.json({
        'status' : 404,
        'success' : false,
        'message' : validate
    })
    }

    else{
    let brandobj = new Brand()
    brandobj.brand_name = req.body.brand_name
    brandobj.status = req.body.status
    if(req.file)
    {
        brandobj.image = 'brand_logo/'+req.file.filename
    }
    brandobj.save()

    res.json({
        'status' : 200,
            'success' : true,
            'message' : "brand added"
    })
    }

}

function getallbrand(req,res)
{
    Brand.find(req.body).exec()
    .then(data=>{
        res.json({
            'status':200,
            'success':true,
            'message':'Brand Loaded',
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

function getsinglebrand(req,res){
validate = ""
if(req.body._id == '' || req.body._id == undefined )
{
    validate += 'Brand Id  is required'
}

// if(req.body.status == '' || req.body.status == undefined )
// {
//     validate += 'status is required'
// }

if(!!validate){ 
    res.json({
       'status' : 404,
        'success' : false,
        'message' : validate
    })
}
else{
    Brand.findOne({'_id':req.body._id}).exec()
    .then(data=>{
        res.json({
            'status':200,
            'success':true,
            'message':'Brand Loaded',
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

function updatebrand(req,res){
    validate = ''
    if(req.body.brand_name == '' || req.body.brand_name == undefined)
    {
        validate += 'brand_name is required ...  '
    }
    if(req.body._id == '' || req.body._id == undefined)
    {
        validate += 'brand id is required'
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
        Brand.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            // console.log(data)AXRD*Q\
            if(data == null)
            {
                res.json({
                    'status':404,
                    'success':false,
                    'message':'Brand not found',
                })
            }
            else{
                data.brand_name = req.body.brand_name
                // data.status = req.body.status
                if(req.file)
                        {
                            brandobj.image = 'brand_logo/'+req.file.filename
        
                        }
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'Brand updated',
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

function tempdel(req,res){
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
        Brand.findOne({'brand_name':req.body.brand_name}).exec()
        .then(data=>{
            
            if(data == null)
            {
                res.json({
                    'status':404,
                    'success':false,
                    'message':'Brand not found',
                })
            }
            else{
                data.isBlocked = true
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'Brand deleted',
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
//


module.exports= {
    addbrand,
    getallbrand,
    getsinglebrand,
    updatebrand,
    tempdel
}