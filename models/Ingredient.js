const mongoose = require("mongoose");

const IngredientSchema = mongoose.Schema(
    {
        name: {type: String , required: true},
        quantity: {type: Number , required: true},
        recipes: [{ type: mongoose.Schema.Types.ObjectId, ref:'Recipe'}]
    });

    module.exports = mongoose.module ("Ingredient" , IngredientSchema);