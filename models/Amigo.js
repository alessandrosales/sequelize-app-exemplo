
var sequelizeModule = require('../sequelize');
var Sequelize = sequelizeModule.sequelizeClass;
var sequelize = sequelizeModule.sequelizeObject;

var Amigo = sequelize.define('amigos', {
	id: Sequelize.INTEGER,
	nome: Sequelize.TEXT
}, {
	timestamps: false
});

module.exports = Amigo;