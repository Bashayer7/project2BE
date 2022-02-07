const express = require('express');

const { fetchCategory, categoryCreate, categoryDelete, categoryUpdate} = require('./controllers');
const router = express.router();


router.param('categoryId', async (req, res, next, categoryId) => {
    const category = await fetchCategory(categoryId, next);
    if (category) {
      req.category = category;
      next();
    } 
    else {
      const err = new Error('Category Not Found');
      err.status = 404;
      next(err);
    }});

    router.delete('/:categoryId', categoryDelete);
    router.put('/:categoryId', upload.single('image'), categoryUpdate);
    router.post('/',upload.single("image"), categoryCreate);

    module.exports = router;