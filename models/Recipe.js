const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const RecipeSchema = mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
  },
  { timestamps: true }
);

IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.module("Recipe", RecipeSchema);
