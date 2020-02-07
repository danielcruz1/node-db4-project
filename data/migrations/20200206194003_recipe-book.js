
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipes', recipe => {
        recipe.increments();
        recipe.string('name', 128).notNullable();
    }))
    .createTable('steps', step => {
        step.increments();
        step.integer('step_number').notNullable().unsigned().references('recipe_id');
        step.text('instructions', 256);
        step.onDelete('CASCADE')
        step.onUpdate('CASCADE');
    })
    .createTable('ingredients', ingredient => {
        ingredient.increments();
        ingredient.string('name', 128);
    })
    .createTable('combine_recipe_ingredients', combined => {
        combined.increments();
        combined.integer('recipe_id').notNullable().unsigned().references('recipe_id');
        combined.integer('ingredients_id').notNullable().unsigned().references('ingredients_id');
        combined.float('quantity');
    })
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('combine_recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')    
    )
};
