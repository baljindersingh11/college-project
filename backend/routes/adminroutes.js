const router = require('express').Router()
const brandcontroller = require('../controllers/brandcontroller')
const userController = require('../controllers/usercontroller')
const carscontroller = require('../controllers/carscontroller') 
const reservationController = require('../controllers/reservationcontroller')

const multer = require('multer')

//--------------car image multer-----------------------
const addcar_image = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(file)
      cb(null, './public/car_images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   console.log(uniqueSuffix)
    //   console.log(file.fieldname + '-' + uniqueSuffix)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const addcar_logo = multer({ storage: addcar_image })

  const updatecar_image = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(file)
      cb(null, './public/car_images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   console.log(uniqueSuffix)
    //   console.log(file.fieldname + '-' + uniqueSuffix)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const updatecar_logo = multer({ storage: updatecar_image })
  





//--------------brand logo multer---------------------
  const addbrand_image = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(file)
      cb(null, './public/brand_logo')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   console.log(uniqueSuffix)
    //   console.log(file.fieldname + '-' + uniqueSuffix)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const addbrand_logo = multer({ storage: addbrand_image })

  


  //--------------------multer ends---------------
router.post('/login',userController.login)
router.post('/adduser',userController.adduser)
router.post('/getall',userController.getall)
router.post('/getsingle',userController.getsingle)

router.post('/getallcar',carscontroller.getallcar)
router.post('/getallbrand',brandcontroller.getallbrand)

router.use(require('../common/adminmiddleware'))
router.post('/addbrand',addbrand_logo.single('brand_logo'),brandcontroller.addbrand)
router.post('/getsinglebrand',brandcontroller.getsinglebrand)
router.post('/updatebrand',addbrand_logo.single('brand_logo'),brandcontroller.updatebrand)
router.post('/tempdel',brandcontroller.tempdel)
// router.post('/deletebrand',brandcontroller.deletebrand)

router.post('/addcar',addcar_logo.single('image'),carscontroller.addcar)
router.post('/getsinglecar',carscontroller.getsinglecar)
router.post('/updatecar',updatecar_logo.single('image'),carscontroller.updatecar)
router.post('/cartempdel',carscontroller.cartempdel)
// router.post('/deletecar',carscontroller.addcar)


router.post('/addreservation',reservationController.addreservation)
router.post('/getallreservations',reservationController.getallreservations)
router.post('/getsinglereservation',reservationController.getsinglereservation)
router.post('/updatereservation',reservationController.updatereservation)
router.post('/tempdeletereservation',reservationController.tempdelReservation)



router.all('*',(req,res)=>{
    res.json({
        'status':404,
        'success':false,
        'msg':'Not Found'
    })
})
module.exports = router