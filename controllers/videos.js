var videoModel = require('../models/videos');

var videos = {};

videos.get = function (req, res) {
	
	// videoModel.populateData();
	var skip = req.query.skip;
	var limit = req.query.limit;

	var videosData = videoModel.get(skip, limit);
	videosData.then(function(data){
		res.send(data);
	}, function(err){
		res.send(err);
	});

};

videos.getOne = function (req, res) {
	
	var videoid = req.query.videoId;

	var videosData = videoModel.getOne(videoid);
	videosData.then(function(data){
		res.send(data);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

videos.rate = function (req, res) {
	
	var videoId = req.body.videoId;
	var ratting = req.body.ratting;

	var videosData = videoModel.rate(videoId, ratting);
	videosData.then(function(data){
		res.send(data);
	}, function(err){
		res.status(400);
		res.send(err);
	});
		
};


module.exports = videos;