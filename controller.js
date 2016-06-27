"use stric"

let users = require("../business/require.js").Users

users.getLadies().then(function(data){
	console.log(data)
	
},function(err){
	console.log(err)
});