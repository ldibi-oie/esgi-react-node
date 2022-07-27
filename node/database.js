// Include Sequelize module
const Sequelize = require('sequelize')
const pwd ='root';
const username = 'root'
// Creating new Object of Sequelize
const sequelize = new Sequelize(
	'esgi-app',
	username,
	pwd, {

		// Explicitly specifying
		// mysql database
		dialect: 'mysql',

		// By default host is 'localhost'		
		host: 'localhost'
	}
);

module.exports = sequelize
