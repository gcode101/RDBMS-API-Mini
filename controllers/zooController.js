const knex = require('../database/db');

const db = {
	getAll: function() {
		return knex('zoos');
	},
	getById: function(id) {
		return knex('zoos').where({ id });
	},
	addZoo: function(zoo) {
		return knex.insert(zoo).into('zoos');
	},
	destroy: function(id) {
		return knex('zoos').where({ id }).del();
	},
	update: function(id, zoo) {
		return knex('zoos').where({ id }).update(zoo)
	}
}

module.exports = db;
