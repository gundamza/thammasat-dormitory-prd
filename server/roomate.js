var db = require('./pghelper');

exports.getAccountRoomate = function(req, res, next) {
	var id = req.params.id;
	db.select("SELECT * FROM salesforce.roomate__c WHERE primary_roommate__c='" + id + "'")
	.then(function(results) {
		//console.log(results);
		var listAcc = "";
		for(var i = 0 ; i < results.length ; i++)
		{
			listAcc += "'" + results[i].co_roommate__c + "', ";
		}
		if(results.length > 0)
		{	
			listAcc = listAcc.substr(0, listAcc.length - 2);
		}
		db.select("SELECT * FROM salesforce.Account WHERE SFID IN (" + listAcc + ")")
		.then(function(results2) {
			res.json(results2);
		})
		.catch(next);
	})
    .catch(next);
}

exports.createRoomate = function(req, res, next) {
	var p = req.headers['primary'];
	var c = req.headers['co'];
	db.select("SELECT * FROM salesforce.Account WHERE identification_number__c ='" + c + "')")
	.then(function(results) {
		if(result.length > 0)
		{
			db.select("INSERT INTO salesforce.Account (primary_roommate__c, co_roommate__c) VALUE ('" + p + "', '" + result[0].sfid + "')" )
			.then(function(results2) {
				//console.log(results2);	
				res.json(results2);
			})
		    .catch(next);
		}
		else
		{
			res.send("Not Found Account");
		}
	})
	.catch(next);
}

exports.deleteRoomate = function(req, res, next) {
	var id = req.params.id;
	db.select("DELETE FROM salesforce.Account WHERE SFID='" + id + "'" )
	.then(function(results) {
		//console.log(results);	
		res.json(results);
	})
    .catch(next);
}

exports.updateRoomate = function(req, res, next) {
	var id = req.params.id;
	var p = req.headers['primary'];
	var c = req.headers['co'];
	
	db.select("SELECT * FROM salesforce.Account WHERE identification_number__c ='" + c + "')")
	.then(function(results) {
		if(result.length > 0)
		{
			var query = "UPDATE salesforce.Account SET primary_roommate__c='" + p + "', "; 
			query += "co_roommate__c='" + result[0].sfid + "' ";
			query += " WHERE SFID='" + id + "'";
			db.select(query)
			.then(function(results2) {
				console.log(results2);	
				res.json(results2);
			})	
		    .catch(next);
		}
	})	
    .catch(next);
}
