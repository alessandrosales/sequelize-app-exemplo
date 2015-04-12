var sequelize = require('./sequelize');

var executeQuery = function(){

	sequelize.query('SELECT * FROM amigos').then(function(amigos){
		var amigos = amigos[0];
		for(var index in amigos){
			console.log(amigos[index].nome);
		}
	});
}

executeQuery();