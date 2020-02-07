
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { id: 1, name: 'Peanutbutter and Jelly Sandwich' },
    { id: 2, name: 'Ramen' },
    { id: 3, name: 'Mac N Cheese' }
  ]);
};