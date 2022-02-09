const express = require('express');
const upload = require('../../middleware/multer');
const { fetchRecipe, createRecipe } = require('./controller');
const router = express.Router();


router.param('recipeId', async (req, res, next, recipeId) => {
    const recipe = await fetchRecipe(recipeId, next);
    if (recipe) {
      req.recipe = recipe;
      next();
    } 
    else next({status: 404, message: "Recipe Not Found"})  });

    router.post("/", upload.single('image'), createRecipe);

    module.exports = router;
