const Product = require('../models/Product');
const { multileMongooseToObject } = require('../../congcu/mongoose');
class MyproController {

    //GET/mypro/stored/products
    storedProducts(req, res, next) {
        Product.find({})
            .then(products => res.render('mypro/storedProducts', {
                products: multileMongooseToObject(products)
            }))
            .catch(next);
    }
}

module.exports = new MyproController();