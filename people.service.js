"use strict"

let q = require("q")

let People = function(db){
	this._db = db;
}

People.prototype.getInfo = function(params){
	let deferred = q.defer();
	
	// deferred.resolve({
		// name: "Jhon",
		// lastName: "Har",
		// age: 45
	// })
	return this._db.getPeopleInfo(params)
	
	//return deferred.promise;
}

module.exports.People = People;