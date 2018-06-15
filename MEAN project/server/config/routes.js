const controller = require('../controllers/controller.js')//    'controller' can be whatever you chose to use for the name of controller.js if you want

module.exports = function(app) {
    app.get('/', function(req, res){//  Home page
        controller.home(req, res)
    })
    //Put all routes here
}