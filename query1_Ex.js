"use strict"

const express = require("express")
const _users = require("../business/require.js").Users
let app = express()

app.get('/', function(req, res) {
	let data = {
		id: req.query.id,
		first_name: req.query.f_name
	}
	
	_users.getFilterQS(data).then(function(dataF){
		res.status(200).send(dataF)
	},function(err){
		res.send(err)
	});
});

app.listen(3000)