"use strict"

const express = require("express")
const _users = require("../business/require.js").Users
let app = express()

app.get('/', function(req, res) {
	let data = {
		key: req.query.key,
		value: req.query.value
	}
	//console debug test of data value 
	console.log(data)
	_users.getFilterQS(data).then(function(dataF){
		res.status(200).send(dataF)
	},function(err){
		res.send(err)
	});
});

app.listen(3000)