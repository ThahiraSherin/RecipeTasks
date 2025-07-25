const Recipe = require("../models/recipe");
const recipeRouter = require("../Routes/recipeRouter");


const recipeController = {
  getAllRecipe: async (req, res) => {
    try {
      const recipes = await Recipe.find();

      res.status(200).json(recipes); 

    } catch (error) {
      res.status(500)
      .json({ error: error.message });
    }
  },
  getRecipeById: async (req,res) => {
    try {
      const { id } = req.params;

      const recipe = await Recipe.findById(id);

      res.status(200).json(recipe);
    }catch (error) {
      res.status(500)
        .json({error: error.message})
    }
  },

  createRecipe: async (req, res) => {
  try {
    const { title, ingredients} = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions: "Grind and add seosoning",
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch(error) {
      res.status(500)
        .json({error: error.message})
    }
  },

  updateRecipe: async (req,res) => {
    try {
      const { id } = req.params;

      const { instructions } = req.body;

      await Recipe.findByIdAndUpdate(id, { instructions});

      res.status(200).json ({message: "Recipe updated Successfully"});

    }catch (error) {
      res.status(500).json({error: error.message})
    }
  },

  deleteRecipe: async (req,res) => {
    try {
      const {id} = req.params;

      await Recipe.findByIdAndDelete(id);

      res.status(200).json({message: "Recipe deleted Successfully"})
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
};


module.exports = recipeController;