const express = require('express');
const upload = require('../../middleware/multer')

const { fetchIngredient, ingredientCreate, ingredientDelete, ingredientUpdate} = require('./controllers');
const router = express.Router();


router.param('ingredientId', async (req, res, next, ingredientId) => {
    const ingredient = await fetchIngredient(ingredientId, next);
    if (ingredient) {
      req.ingredient = ingredient;
      next();
    } 
    else next({status: 404, message: "Ingredient Not Found"})  });

    router.delete('/:ingredientId', ingredientDelete);
    router.put('/:ingredientId', upload.single('image'), ingredientUpdate);
    router.post('/', ingredientCreate);

    module.exports = router;