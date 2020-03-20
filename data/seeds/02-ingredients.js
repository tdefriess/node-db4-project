
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'potatoes'},
        {name: 'olive oil'},
        {name: 'butter'}
      ]);
    });
};
