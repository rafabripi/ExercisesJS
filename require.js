"use strcit"

let R = require("ramda")
let file = require("../data/readFile.js").File
const q = require("q")

//lee el archivo de forma sincrona
//console.log(file.readFileSync())
/*file.readFile(function(err, data){
	//console.log("-----------------------------1")
	//console.log(context._name)
	//console.log("-----------------------------2")
	if (err) 
		
		console.log(err);
		
	//return data.toString("utf8")
	console.log(data.toString("utf8"));
	
})
*/
let Users = function(){	
}


Users.prototype.getLadies = function(){
	let deferred = q.defer()
	
	file.readFileP("./MOCK_DATA.json").then(function(data){
		let people = JSON.parse(data)
		
		//se hace un filtro en el JSON para mostrar solo los valores "Female" 
		let fn = r => r.gender === "Female";
		let ladies = R.filter(fn,people)
		deferred.resolve(ladies)
		
	},function(err){
		deferred.reject()
	});
	return deferred.promise
	
}

//method that return filter from Query string
Users.prototype.getFilterQS = function(queryS){
	let deferred = q.defer()
	
	file.readFileP("./lib/MOCK_DATA.json").then(function(data){
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


module.exports.Users = new Users()
