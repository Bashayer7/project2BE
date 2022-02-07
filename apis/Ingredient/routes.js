const express = require('express');

const { fetchIngredient, ingredientCreate, ingredientDelete, ingredientUpdate} = require('./controllers');
const router = express.router();


router.param('ingredientId', async (req, res, next, ingredientId) => {
    const ingredient = await fetchIngredient(ingredientId, next);
    if (ingredient) {
      req.ingredient = ingredient;
      next();
    } 
    else {
      const err = new Error('Ingredient Not Found');
      err.status = 404;
      next(err);
    }});

    router.delete('/:ingredientId', ingredientDelete);
    router.put('/:ingredientId', upload.single('image'), ingredientUpdate);
    router.post('/', ingredientCreate);

    module.exports = router;