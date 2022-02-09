const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipeSchema = mongoose.Schema(
  {
    name: { type: String , require:true },
    description: { type: String },
    image: { type: String },
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.model("Recipe", RecipeSchema);
