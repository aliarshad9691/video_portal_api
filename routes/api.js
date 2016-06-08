var users = require('../controllers/users');
var videos = require('../controllers/videos');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){
	app.get('/',helpers.isAuthenticated, users.get);
	// app.post('/', users.get);

	//user routes
	app.post('/user/auth', users.auth);
	app.get('/user/logout', helpers.isAuthenticated, users.logout);

	//video routes
	app.get('/videos', helpers.isAuthenticated, videos.get);
	app.get('/video', helpers.isAuthenticated, videos.getOne);
	app.post('/video/rattings', helpers.isAuthenticated, videos.rate);
}


module.exports = routesAPI;