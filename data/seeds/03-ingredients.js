
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { id: 1, name: 'Bread'},
    { id: 2, name: 'Peanutbutter'},
    { id: 3, name: 'Jelly'},
    { id: 4, name: 'Water'},
    { id: 5, name: 'Dry Noodles'},
    { id: 6, name: 'Cheese'}
  ])
}