const express = require('express');
const { getAllRecipe, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controller/recipeController');


const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipe );
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

module.exports = recipeRouter;