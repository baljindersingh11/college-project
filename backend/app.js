const express = require('express')
const app = express()
const port = 2508
var cors = require('cors')
const config = require('./config/db')
const seeder = require('./common/seeder')

app.use(cors())

const adminroutes = require('./routes/adminroutes')
app.use(express.urlencoded({'extended':true}))
app.use(express.json({'limit':'50mb'}))
app.use(express.static(__dirname+"/public/"))

app.use('/admin',adminroutes)
// app.use('/admin',adminroutes)

seeder.adduser()

app.listen(port,()=>{
    console.log("server run at :",port)
})