const res = require("express/lib/response");
const recipe = require("./recipe");

//to disply data (assuming that we have a data)
exports.fetchData = async (req, res) => {
  try {
<<<<<<< HEAD
    const data = await product.find({}).select("name description image");
=======
    const data = await recipe.find({}).select("name description image");
>>>>>>> bb
    res.json(data);
  } catch (error) {
    next(error);
  }
};
