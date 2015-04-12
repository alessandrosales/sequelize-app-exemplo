var Sequelize = require('sequelize');

var sequelize = new Sequelize('', '', '', {
	dialect: 'sqlite',
	storage: 'db.sqlite'
});

module.exports = {
	sequelizeObject: sequelize,
	sequelizeClass: Sequelize
}
