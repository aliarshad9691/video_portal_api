var Users = require('../models/users');

var helpers = {};

helpers.isAuthenticated = function(req, res, next){

	if(!req.query.sessionId){
		res.status(401);
		res.send({status:'error',error:'Not Authorized.'});
	}
	else{
		var user = Users.getBySessionId(req.query.sessionId);	
		user.then(function(dbuser){
			if(dbuser){
				next();
			}else{
				res.status(401);
				res.send({status:'error',error:'Not Authorized.'});		
			}	
		});
		
	}
}

module.exports = helpers;
