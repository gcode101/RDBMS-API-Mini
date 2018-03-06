
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bears', function(tbl) {
  	tbl.increments();

  	tbl
  		.integer('zoo_id')
  		.unsigned()
  		.references('id')
  		.inTable('zoos');

  	tbl
  		.string('species', 80)
  		.notNullable()
  		.unique('species');

  	tbl
  		.string('latin_name', 80)
  		.notNullable()
  		.unique('latin_name');

  	tbl.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
