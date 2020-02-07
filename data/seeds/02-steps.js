
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { id: 1, step_number: 1, recipe_id: 1, instructions: 'Take two slices of bread' },
    { id: 2, step_number: 2, recipe_id: 1, instructions: 'Add peanutbutter on one slice and jelly on the other' },
    { id: 3, step_number: 3, recipe_id: 1, instructions: 'Smash the peanutbutter slice into the jelly slice' },
    { id: 4, step_number: 1, recipe_id: 2, instructions: 'Boil water' },
    { id: 5, step_number: 2, recipe_id: 2, instructions: 'Put dry Ramen noodles into boiling water add flavoring packet' },
    { id: 6, step_number: 1, recipe_id: 3, instructions: 'Boil water and add mac n cheese noodles' },
    { id: 7, step_number: 2, recipe_id: 3, instructions: 'Empty cheese packet into cooked noodles and stir' }
  ])
};