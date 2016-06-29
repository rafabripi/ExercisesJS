"use strict"

//referenciar modulo person.js 
let PersonV = require("./person.js").Person2
let personVI = require("./person.js").Person3
let readFileJSON = require("./data/readFile.js").File 

//object from class Person on person.js called p2
let p2 = new PersonV("Rafael", "Bribiesca", 26)
console.log(p2.sayHello())
console.log(p2.sayLastname())
console.log(p2.sayAge())
console.log("-----------------");
//calls of objects from person.js
console.log(personVI.sayHello())
console.log(personVI.sayAge())
console.log(personVI.sayLastname())
console.log("-----------------");

//Class Person with two attributes
let Person = function(name, lastname){
	this._name = name
	this._lastname = lastname
}

//object of class Person that send two attributes
let p1 = new Person('Rafa clase',"Bribiesca clase")
console.log(p1._name)
console.log(p1._lastname)
console.log("-----------------");

//compare types of variable. The "===" compare value and type
if(p1._name === p1._lastname){
	console.log("Comparison of types of variable is True!")
}
else{
	console.log("Comparison of types of variable is False!")
}
console.log("-----------------");

let x=5
if(x === "5"){
	console.log("comparacion de numero")
}
else{console.log("type or value isn't equal")}
console.log("-----------------");
