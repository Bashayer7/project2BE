const Ingredient = require('../../models/Ingredient')

exports.fetchIngredient = async (ingredientId , next) =>{
    try{
        const ingredient = await Ingredient.findById(ingredientId);
        return ingredient;
    }
    catch(error){ next(error) }
};

exports.IngredientCreate = async (req, res) => {
    try {
      const newIngredient = await Ingredient.create(req.body);
      return res.status(201).json(newIngredient);
    } 
    catch (error) { next(error) }
  };

  exports.ingredientDelete = async (req, res, next) => {
    try {
      await req.ingredient.remove();
      res.status(204).end();
    } 
    catch (error) { next(error) }
  };

  exports.ingredientUpdate = async (req, res, next) => {
    try {
      const ingredient = await Ingredient.findByIdAndUpdate(
        { _id: req.ingredient.id },
        req.body,
        { new: true, runValidators: true } 
      );
      res.status(204).end();
    } 
    catch (error) { next(error) }
  };