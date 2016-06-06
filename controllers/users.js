var userModel = require('../models/users');

var users = {};

users.get = function (req, res) {
		
		userModel.add();
		var results = userModel.show();
		results.then(function(data){
			res.send(JSON.stringify(data));
		}, function(err){

		});
		// var test = new userModel({username:'Ali', password:123});
		// test.save(function(err, test) {
		//   if (err) return console.error(err);
		//   //console.dir(test);
		// });

		// userModel.user.find(function(err, users) {
		//   if (err) return console.error(err);
		//   console.dir(users);
		//   res.send(JSON.stringify(users));
		// });
		
	};

users.post = function (req, res) {
		res.send(JSON.stringify(req.body));
	};


module.exports = users;