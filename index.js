#!/usr/bin/env node

var Amigo = require('./models/Amigo');

Amigo.all().then(function(amigos){
	for(var i in amigos){
		console.log(amigos[i].nome);
	}
});