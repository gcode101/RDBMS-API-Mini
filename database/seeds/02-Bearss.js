
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bears').del()
    .then(function () {
      // Inserts seed entries
      return knex('bears').insert([
        {id: 1, zoo_id: 1, species: 'Brown', latin_name: 'Malo'},
        {id: 2, zoo_id: 2, species: 'Grizzle', latin_name: 'Feo'},
        {id: 3, zoo_id: 3, species: 'Pollar', latin_name: 'Panda'}
      ]);
    });
};
