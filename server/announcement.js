var db = require('./pghelper');

exports.getDetail = function(req, res, next) {
	var head = req.headers['authorization'];
	var limit = req.headers['limit'];
	var https = require('https');

	console.log(limit);	
	res.send(limit);
}