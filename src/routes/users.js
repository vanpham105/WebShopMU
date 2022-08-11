const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/AuthController');

router.get('/pagesignup', userController.gotopagesignup);
router.get('/pagesignin', userController.gotopagesignin);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);


module.exports = router;