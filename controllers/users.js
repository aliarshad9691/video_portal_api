var userModel = require('../models/users');

var users = {};

users.get = function (req, res) {
	
	
	var results = userModel.show();
	results.then(function(data){
		res.send(data);
	}, function(err){

	});
		
};

users.auth = function (req, res) {

	if(!req.body.username || !req.body.password)
	{
		res.status(400);
		res.send({status:'error',error:'Username or password is missing.'});	
	}
	
	var user = userModel.authUser(req.body.username, req.body.password);

	user.then(function(users){
		res.send(users);	
	}, function(){
		res.send({status:'error',error:'Error occured while fetching data from database.'});
	});

};

users.logout = function (req, res) {

	var sessionId = req.query.sessionId;

	var user = userModel.logout(sessionId);

	res.send({status:'success'});	
	

};


module.exports = users;