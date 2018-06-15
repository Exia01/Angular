//  Change 'MODEL_NAME' in this documents filename to whatever you're calling your Document in MongoDB

const mongoose = require('mongoose')

var MODEL_NAME = mongoose.model("MODEL_NAME", new mongoose.Schema({//    Change 'MODEL_NAME' to whatever you you called the database that mongoose connects to.
    //Put document keys and value types here                              This is not exactly required but it helps keep your names organized
}))

module.exports = MODEL_NAME//   Rename to whatever you connected to in mongoose.js