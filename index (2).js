let User = function(dependency){
	this._dependency = dependency
}

User.prototype.calc = function(){
	return this._dependency(2,4)
}

let user = new User(function(a,b){
	return a + b;
	//regrese mock data tarea 
})

let r = user.calc()
console.log(r)

//let user2 = new User("Hello")
//de eslatic search
//let r2 = user2.calc()

let user3 = new User(function(a,b){
	return a*b
})

let r3 = user3.calc()
console.log(r3)

let user4 = new User(function(a,b){
	return b/a
})
let r4 = user4.calc()
console.log(r4)

let user5 =new User(function(a,b){
	console.log(a)
	console.log(b)
  return null
})

console.log(user5.calc())
