const bcrypt = require('bcrypt')//  When you use bcrypt, it needs to be here.  DO NOT MOVE!
const mongoose = require('mongoose')
require('../models/MODEL_NAME.js')
var MODEL_NAME = mongoose.model('MODEL_NAME')//  Change 'MODEL_NAME' to whatever you called the collection in mongoose.js

module.exports ={
    home:(req, res) => {
        res.render('index')
    }
    //  TODO CODE
}