"use stric"

const express = require('express')
let _users = require("../business/require.js").Users

let app = express()

app.get('/showladies', function(req,res){
	_users.getLadies().then(function(data){
		res.status(200).send(data)
	},function(err){
		res.send(err)
	});
})

app.listen(3000)