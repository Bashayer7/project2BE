const res = require("express/lib/response");
const recipe = require("../../models/Recipe");

exports.fetchData = async (req, res) => {
  try {
    const data = await user.find({}).select("name description image");
    res.json(data);
  } catch (error) {
    next(error);
  }
};
exports.postData = async (req, res) => {
  try {
    const recipeData = await { ...req.body, id: data.length + 1 };
    data.push(recipeData);
  } catch (error) {
    next(error);
  }
};
