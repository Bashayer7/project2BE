const Category = require('../../models/Category');
const Ingredient = require('../../models/Ingredient');
const Recipe = require('../../models/Recipe');

exports.fetchRecipes = async (req, res, next) => {
  try {
    const data = await Recipe.find()
    // .select("name description image");
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.createRecipe = async (req, res, next) =>{
  try {
    // if (req.file) {
    //   req.body.image = `/${req.file.path}`;
    //   req.body.image = req.body.image.replace('\\', '/');
    // }
    const newRecipe = await Recipe.create(req.body);
      // category map:
    req.body.categories.map(async(category) => await Category.findOneAndUpdate(
      {_id: category},
      {$push:{recipes: newRecipe._id}}))
      // ingredient map:
    req.body.ingredients.map(async(ingredient) => await Ingredient.findOneAndUpdate(
        {_id: ingredient},
        {$push:{recipes: newRecipe._id}}))
    return res.status(201).json(newRecipe);
  } 
  catch (error) { next(error) }
};
