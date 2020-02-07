const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
    return db('recipes');
  };

function getShoppingList(recipe_id) {
    const id = recipe_id;
    
      return db('recipes as r')
        .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .select('r.name as recipe', 'i.name as ingredient', 'ri.quantity')
        .where({"r.id": id});
};

function getInstructions(recipe_id) {
    const id = recipe_id;
    return db('recipes as r')
      .join('steps as s', 'r.id', 's.recipe_id')
      .select('r.name', 's.step_number', 's.instructions')
      .where({"r.id": id})
      .orderBy('s.step_number');
};