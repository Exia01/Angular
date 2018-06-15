const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const path = require('path')
const flash = require('express-flash')

mongoose.Promise = global.Promise// This WAS necessary for some reason, but it can be deleted now if you want

app.use(flash())//  Use flash
app.use(bodyParser.urlencoded({encoded: true}))// Use body parser
app.use(express.static(path.join(__dirname, './client/static')))// Identify static folder
app.use(session({secret: 'SECRET_KEY'}))//  Make your own secret key. Don't be lazy
app.set('views', path.join(__dirname, './client/views'))// Identify views folders

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')

app.listen(8000, function(){//  Setting your port
    console.log('Listening on port 8000')
})