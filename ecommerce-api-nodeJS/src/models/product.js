const mongoose = require('mongoose') ;

const productSchema = new mongoose.Schema({

    size: {
        type: String ,
    },

    description: {
        type: String ,
        required: true,
    },

    price:{
        type: Number ,
    },

    discountPrice: {
        type: Number ,
    },

    discountPercent: {
        type: Number ,
    },

    quantity: {
        type: Number ,
    },

    brand: {
        type: String ,
    },

    quantity: [{
        name: {type:String} ,
        quantity: {type:Number} ,
    }],

    imageURL: {
        type: String ,
    },

    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ratings"
        }
    ],

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "reviews"
        }
    ],

    numRatings: {
        type: Number,
        default: 0,
    },

    createdAt: {
        type: Date,
        default: Date.now() ,
    }

}) ;


const Product = mongoose.model('products',productSchema) ;
module.exports = Product;