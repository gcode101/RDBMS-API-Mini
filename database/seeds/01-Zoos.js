
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoos').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Atlanta zoo'},
        {id: 2, name: 'Dallas Zoo'},
        {id: 3, name: 'Miami Zoo'}
      ]);
    });
};
