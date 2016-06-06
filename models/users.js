
var mongoose = require('mongoose');
var q = require('q');

var userSchema = new mongoose.Schema({
	  username: { type: String }, 
	  password: String
});

var User = mongoose.model('Users', userSchema);

var userModel = {};
userModel.add = function(){
	var test = new User({username:'Ali2', password:456});
	test.save(function(err, test) {
	  //if (err) return console.error(err);
	  //console.dir(test);
	});
}
//userModel.user = User;

userModel.show = function(){
	var results = q.defer();

	User.find(function(err, users) {
	  if (err){
	  	results.reject(err);
	  } 
	  results.resolve(users);
	});

	return results.promise;
}


module.exports = userModel;