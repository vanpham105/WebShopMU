const User = require('../models/User');
const { mongooseToObject } = require('../../congcu/mongoose');

class AuthController {

    gotopagesignup(req, res, next) {
        res.render('signup');
    }

    gotopagesignin(req, res, next) {
        res.render('signin');
    }

    signup(req, res, next) {
        // if (!req.body.q || !req.body.password) { //kiểm tra tk và pass nếu hk điền thì hiện tb
        //   res.render('signup');
        // return res.send('Chưa nhập đầy đủ thông tin');
        //}
        const user = new User(req.body);
        user.save();

        res.render('signup');
        return res.send('ĐK thành công');
    }

    async signin(req, res, next) {

        if (req.body.q === null || req.body.password === null) {
            res.render('signin');
            return res.send('Chưa nhập đầy đủ thông tin');
        }
        const found = await User.findOne({ username: req.body.q });
        if (!found) {
            res.render('signin');
            return res.send('Không tìm thấy tài khoản');
        }
        if (found.password !== req.body.password) {
            res.render('signin');
            return res.send('Mật khẩu chưa chính xác');
        }
        res.render('signin');
        return res.send('ĐN thành công');



    }

}


module.exports = new AuthController();