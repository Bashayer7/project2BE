const express = require('express');
const upload = require('../../middleware/multer');
const { fetchCategory, categoryCreate, categoryDelete, categoryUpdate, getCategories} = require('./controllers');
const router = express.Router();


router.param('categoryId', async (req, res, next, categoryId) => {
    const category = await fetchCategory(categoryId, next);
    if (category) {
      req.category = category;
      next();
    } 
    else next({status: 404, message: "Category Not Found"})  
  });

    router.get("/", getCategories);
    router.delete('/:categoryId', categoryDelete);
    router.put('/:categoryId', upload.single('image'), categoryUpdate);
    router.post('/', upload.single("image"), categoryCreate);

    module.exports = router;