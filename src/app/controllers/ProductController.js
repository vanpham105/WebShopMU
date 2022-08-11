const Product = require('../models/Product');
const { mongooseToObject } = require('../../congcu/mongoose');
const { response } = require('express');

class ProductController {


    show(req, res, next) {
            Product.findOne({ slug: req.params.slug }) //choc vào model
                .then(product => //truyen dl tu model vào view
                    res.render('products/show', { product: mongooseToObject(product) })
                )
                .catch(next);
        }
        //GET /products/create
    create(req, res, next) {
            res.render('products/create');
        }
        //POST /products/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save();
        res.send('Thêm thành công!!');
    }

    //Sua san pham
    //GET  /products/:id/sua
    sua(req, res, next) {
            Product.findById(req.params.id)
                .then(product => res.render('products/sua', {
                    product: mongooseToObject(product)
                }))
                .catch(next);
        }
        //PUT   /products/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/mypro/stored/products')) //sau khi sửa sẽ load lại trang sản pham cua toi
            .catch(next);
    }

    //DELETE /products/:id
    del(req, res, next) {
        console.log(req.params);
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}


module.exports = new ProductController();