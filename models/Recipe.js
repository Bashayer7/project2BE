const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const RecipeSchema = mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);

IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.module("Recipe", RecipeSchema);
