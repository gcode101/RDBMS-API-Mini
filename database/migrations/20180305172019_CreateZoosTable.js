
exports.up = function(knex, Promise) { //making changes to the database
	return knex.schema.createTable('zoos', function(tbl) {
		tbl.increments();

		tbl
			.string('name', 255)
			.notNullable()
			.unique('name');

		tbl.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) { //undoing changes (roolback)
	return knex.schema.dropTable('zoos');
};
