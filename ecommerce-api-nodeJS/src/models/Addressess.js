const mongoose = require('mongoose') ;

const addressessSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    streetAddress: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    zipCode: {
        type: Number,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
}) ;

const Addressess = mongoose.model('addressess',addressessSchema) ;
module.exports = Addressess;