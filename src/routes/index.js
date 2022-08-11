const newsRouter = require('./news');
const myproRouter = require('./mypro');
const productsRouter = require('./products');
const siteRouter = require('./site');
const usersRouter = require('./users');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/mypro', myproRouter);
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;