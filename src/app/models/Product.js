const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({ //tuong duong voi 1 collection trong mongo
    name: { type: String, minLength: 1, maxLength: 100, required: true, },
    description: { type: String, maxLength: 1000 },
    image: { type: String, },
    price: { type: String },
    slug: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Product', Product);