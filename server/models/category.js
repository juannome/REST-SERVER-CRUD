//Require
//mongoose -- modeling tool designed to work in an asynchronous enviroment
// Using a mongoose pluging to validate an unique values in this case (Category)
const mongoose = require('mongoose');


let Schema = mongoose.Schema;
let categorySchema = new Schema({
    description: {
        type: String,
        unique: true,
        required: [true, 'value desciption needed']
    },
    user: {
        type: Schema.types.ObjectId,
        ref: 'user'
    }
});
// Category -- contain categorySchema properties
module.exports = mongoose.module('Category', categorySchema);