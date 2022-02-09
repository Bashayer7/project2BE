const express = require('express');
const upload = require('../../middleware/multer');
const { fetchRecipe, createRecipe } = require('./controller');
const router = express.Router();


router.param('recipeId', async (req, res, next, recipeIs) => {
    const recipe = await fetchRecipe(recipeId, next);
    if (recipe) {
      req.recipe = recipe;
      next();
    } 
    else next({status: 404, message: "Recipe Not Found"})  });

    router.post("/", upload.single('image'), createRecipe);

    module.exports = router;













// exports.fetchData = async (req, res) => {
//   try {
//     const data = await user.find({}).select("name description image");
//     res.json(data);
//   } catch (error) {
//     next(error);
//   }
// };
// exports.postData = async (req, res) => {
//   try {
//     const recipeData = await { ...req.body, id: data.length + 1 };
//     data.push(recipeData);
//   } catch (error) {
//     next(error);
//   }
// };