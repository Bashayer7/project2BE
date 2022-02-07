const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema(
  {
    name: { type: String },

    description: { type: String },
    Image: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.module("Recipe", RecipeSchema);
