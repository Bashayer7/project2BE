const Category = require('../../models/Category');
const Recipe = require('../../models/Recipe');

exports.fetchRecipe = async (req, res, next) => {
  try {
    const data = await product.find({}).select("name description image");
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.createRecipe = async (req, res, next) =>{
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace('\\', '/');
    }
    const categoryId = req.params.categoryId;
    req.body = {...req.body, category: categoryId}
    const newRecipe = await Recipe.create(req.body);
    req.body.Category.map(e => await Category.findOneAndUpdate(
      {_id: req.params.categoryId},
      {$push:{recipes: newRecipe._id}}))
    return res.status(201).json(newRecipe);
  } 
  catch (error) { next(error) }
};
