const Ingredient = require('../../models/user')

//to disply data (assuming that we have a data)
exports.fetchData = async (req, res) => {
  try {
    const data = await user.find({}).select("name password email");
    res.json(data);
  } catch (error) {
    next(error);
  }
};
