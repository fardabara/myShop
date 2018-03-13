let express = require('express');
let router = express.Router();

/* GET home page. */
let homeModule = require('../controllers/site/homeController');
router.get('/home', homeModule.index);

module.exports = router;
