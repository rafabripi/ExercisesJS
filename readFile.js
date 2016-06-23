"use strict"

const fs = require("fs")
let File = function(){
	this._name = "./lib/person.js"
}

File.prototype.readFile = function(){
	let context = this;
	console.log(this._name)
	fs.readFile(this._name, function(err, data){
	console.log("-----------------------------1")
	console.log(context._name)
	console.log("-----------------------------2")
	if (err) 
		
		console.log(err);
	console.log(data.toString("utf8"));
});
}

let f1 = new File()

f1.readFile()

