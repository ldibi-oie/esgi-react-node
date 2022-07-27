const Sequelize = require('sequelize')

const sequelize = require('../database')

const User = sequelize.define('users', {

	id: {
		type:Sequelize.INTEGER,
		autoIncrement:true,
		allowNull:false,
		primaryKey:true
	},

	firstname: { type: Sequelize.STRING, allowNull:false },

	lastname: { type: Sequelize.STRING, allowNull:false },

	email: { type: Sequelize.STRING, allowNull:false },

	// Column-4, default values for
	// dates => current time
	adress: { type: Sequelize.STRING, allowNull:true },

	// Timestamps
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
})

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = User
