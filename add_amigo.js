#!/usr/bin/env node

var Amigo = require('./models/Amigo');

var novoAmigo = Amigo.create({
	nome: 'Marinho Petruquio'
}).then(function(amigo){
	console.log('Novo amigo %s adicionado com sucesso!', amigo.nome);
});