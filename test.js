"use strict"

const fs = require("fs")
const q = require("q")

//constructor de la clase
let File = function() {	
}

//metodo para leer archivo asyncronous
File.prototype.leerArchivo = function(){
	fs.readFile("./MOCK_DATA.json","utf8",function(err, data){
	if (err) throw err
	console.log(data)})
}

module.exports.Lector = new File()




let Fn = function(){
	this.name = "Rafa";
}

Fn.prototype.showThis = function(){
	console.log(this);
}

let objFn = new Fn()

console.log(objFn.name)
objFn.showThis();

console.log(this)

