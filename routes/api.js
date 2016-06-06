var users = require('../controllers/users');

var routesAPI = function(app){
	app.get('/', users.get);
	app.post('/', users.post);
}


module.exports = routesAPI;