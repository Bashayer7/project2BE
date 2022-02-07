const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    Image: { type: String },
    Ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);
module.exports = mongoose.module("Recipe", RecipeSchema);
