const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const CategorySchema = mongoose.Schema(
    {
        category: {type: String , unique:true, required:true},
        description: {type: String},
        Image: {type: String},
    },
    { timestamps: true }
    );

    CategorySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
    module.exports = mongoose.module ("Category" , CategorySchema);