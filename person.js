"use strict"

let Person = function(name, lastName, age){
		this._name = name
		this._lastName = lastName
		this._age = age
}


//metodo
Person.prototype.sayHello = function(){
	return "Hello Metodo" + this._name;
}

module.exports.Person2 = Person
module.exports.Person3 = new Person("Jhon")