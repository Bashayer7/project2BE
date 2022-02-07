const res = require("express/lib/response");

//to disply data (assuming that we have a data)
exports.fetchData = async (req, res) => {
  try {
    const data = await product.fimd({}).select("name description image");
    res.json(data);
  } catch (error) {
    next(error);
  }
};
