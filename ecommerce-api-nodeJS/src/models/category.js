const mongoose = require('mongoose') ;

const categorieSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        maxlength : 50
    },
    parentCategory: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "categories"
    },
    level: {
        type : Number,
        required : true,
    },
}) ;

const Categories = mongoose.model('categories',categorieSchema) ;
module.exports = Categories;