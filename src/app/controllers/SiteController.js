const Product = require('../models/Product');
const { multileMongooseToObject } = require('../../congcu/mongoose');
class SiteController {

    index(req, res, next) {

        Product.find({})
            .then(products => {
                res.render('home', {
                    products: multileMongooseToObject(products)
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();