"use stric"

const express = require('express')
let _users = require("../business/require.js").Users
let app = express()

app.get('/show', function(req,res){
	_users.getLadies().then(function(data){
		res.status(200).send(data)
	},function(err){
		res.send(err)
	});
	// res.send("Hello world!")
})

app.listen(3000)