const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const CategorySchema = mongoose.Schema(
    {
        name: {type: String , unique:true, required:true},
        description: {type: String},
        image: {type: String},
        recipes: [{type: mongoose.Schema.Types.ObjectId, ref: "Recipe"}],
    },
    { timestamps: true }
    );

    CategorySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
    module.exports = mongoose.model("Category" , CategorySchema);