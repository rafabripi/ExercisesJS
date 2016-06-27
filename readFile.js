"use strict"

const fs = require("fs")
const q = require("q")


let File = function(){
	//this._name = "./lib/person.js"
	//this._name = fileName
}

File.prototype.readFile = function(callback){
	let context = this;
	//console.log(this._name)
	fs.readFile(this._name, callback);
}


File.prototype.readFileSync = function(){
	let _file = fs.readFileSync(this._name, "utf8")
	return _file	
}


File.prototype.readFileP = function(fileName){
	let context = this;
	let deferred = q.defer()
	
	//console.log(this._name)
	fs.readFile(fileName, "utf8",function(err, data){
		if (err){
			deferred.reject("File no found")
		}
		deferred.resolve(data)
	});
	return deferred.promise;
}

module.exports.File = new File()