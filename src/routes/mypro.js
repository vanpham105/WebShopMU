const express = require('express');
const router = express.Router();

const myproController = require('../app/controllers/MyproController');

router.get('/stored/products', myproController.storedProducts);

module.exports = router;