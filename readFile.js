"use strict"

//librarys "fileSystem" and "q" for promises
const fs = require("fs")
const q = require("q")

//constructor class File
let File = function(){
}

//method to read file syncronus
File.prototype.readFileSync = function(name){
	this._name = name
	let _file = fs.readFileSync(this._name, "utf8")
	return _file	
}

//read a file asyncronous with promises
//File.readFileP = 
File.prototype.readFileP = function(fileName){
	let deferred = q.defer()
	
	fs.readFile(fileName, "utf8",function(err, data){
		if (err){
			deferred.reject("Error, File no found ->" + err)
		}
		deferred.resolve(data)
	});
	return deferred.promise;
}

module.exports.File = new File()