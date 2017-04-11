var db = require('./pghelper');

exports.getDetail = function(req, res, next) {
	var head = req.headers['authorization'];
	var limit = req.headers['limit'];
	var start = req.headers['start'];
	
	var query = "SELECT * FROM salesforce.Announcement__c";
	if(!isNaN(limit))
	{
		query += " limit " + limit;
	}
	if(!isNaN(start) && start != 0)
	{
		query += " OFFSET  " + start;
	}
	db.select(query)
	.then(function(results) {
		var output = '[';
		for(var i = 0 ; i <results.length ; i++)
		{
			output += '{"Id":"' + results[i].sfid;
			output += '", "Name":"' + results[i].name;
			output += '", "image":"' + results[i].image_path__c; 
			output += '", "Create Date":"' + results[i].createdate + '"},';
		}
		if(results.length)
		{
			output = output.substr(0, output.length - 1);
		}
		output+= ']';
		res.json(JSON.parse(output));
		//res.json(results);
	})
    .catch(next);
	
}