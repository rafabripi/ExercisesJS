"use strict"



//refferenciar modulo
let PersonV = require("./person.js").Person2
let personVI = require("./person.js").Person3



function sayHello(){
	console.log("Hello!!!")
}

sayHello()




console.log("-----------------");
console.log(PersonV);
console.log("-----------------");

let p2 = new PersonV("Rafael", "Bribiesca", 26)
console.log( p2.sayHello())
console.log( personVI.sayHello())
console.log("-----------------");





let doSomething = function(){
	console.log("fdsfsd")
}

doSomething()



let am = doSomething

am()




let sayHello2=function(name){
	console.log("hello "+name)
}

sayHello2("Rafa")




let Person = function(name, lastname){
	this._name = name
	this._lastname = lastname
}

let p1 = new Person('Rafa clase',"Rafa clase")

console.log(p1._name)
console.log(p1._lastname)


if(p1._name === p1._lastname){
	console.log("comparacion")
}


let x=5

if(x === "5"){
	console.log("comparacion de numero")
}


