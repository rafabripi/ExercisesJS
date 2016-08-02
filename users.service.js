"use strict"

const q = require("q")
let R = require("ramda")
/*remove the dependence of readFile to inject it on constructor class Users"
let file = require("../data/readFile.js").File*/


/*read a file of asynchronous way 
console.log(file.readFileSync())
file.readFile(function(err, data){
	//console.log("-----------------------------1")
	//console.log(context._name)
	//console.log("-----------------------------2")
	if (err) 
		
		console.log(err);
		
	//return data.toString("utf8")
	console.log(data.toString("utf8"));
})*/

let Users = function(file){
	this._file = file
}

Users.prototype.getLadies = function(){
	let deferred = q.defer()
	
	this._file.readFileP("./lib/MOCK_DATA.json").then(function(data){
		let people = JSON.parse(data)
		
		//filter on JSON file to catch only values of gender equal to "Female" 
		let fn = r => r.gender === "Female";
		let ladies = R.filter(fn,people)
		deferred.resolve(ladies)
		
	},function(err){
		deferred.reject(err)
	});
	return deferred.promise
	
}

//method that return filter from Query string
Users.prototype.getFilterQS = function(queryS){
	let deferred = q.defer()
	
	this._file.readFileP("./lib/MOCK_DATA.json").then(function(data){
		let people = JSON.parse(data)
		let val = parseInt(queryS.value)
		
		if(!val){
			val = queryS.value
		}
		
		let fn = r => r[queryS.key] === val;
		//next function is equal to previous lamda expression
		// function fn (r){
			// return r[queryS.key] === val;
		// }
		let filt = R.filter(fn,people)
		deferred.resolve(filt)
		
	},function(err){
		deferred.reject(err)
	});
	return deferred.promise
}


module.exports.Users = Users