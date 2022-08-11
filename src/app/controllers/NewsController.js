class NewsController {
    //GET/news
    index(req, res) {
            res.render('news');
        }
        //GET/news/Thongtin
    show(req, res) {
        res.send('mo ta san pham');
    }

}

module.exports = new NewsController; //tao ra 1 doi tung newcontroller