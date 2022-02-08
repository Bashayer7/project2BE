const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const IngredientSchema = mongoose.Schema(
    {
        name: {type: String , required: true},
        quantity: {type: Number , required: true},
        recipes: [{ type: mongoose.Schema.Types.ObjectId, ref:'Recipe'}]
    },
    { timestamps: true }
    );

    IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
    module.exports = mongoose.model ("Ingredient" , IngredientSchema);