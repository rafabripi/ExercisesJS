"use strict"

//class called Person
let Person = function(name, lastName, age){
		this._name = name
		this._lastName = lastName
		this._age = age
}

//methods of class Person
Person.prototype.sayHello = function(){
	return "Hello Metodo " + this._name;
}

Person.prototype.sayAge = function(){
	return "Your age is: " + this._age;
}

Person.prototype.sayLastname = function(){
	return "Your lastName is: " + this._lastName;
}

/*export Person2 and Person3 to index.js
The first, export all class Person 
The second, export a object of class Person*/
module.exports.Person2 = Person
module.exports.Person3 = new Person("Jhon", "Lennon", 70)