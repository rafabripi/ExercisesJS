"use stric"

const express = require('express')
let Users = require("../business/users.service.js").Users
const readFile = require("../data/readFile.js").File;
let app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/showladies', function(req,res){
	const _users = new Users(readFile);
	_users.getLadies().then(function(data){
		res.status(200).send(data)
	},function(err){
		res.send(err)
	});
})

app.listen(3000, function(){
	console.log("server running")
})
