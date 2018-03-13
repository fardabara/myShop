let express = require('express');
let router = express.Router();
let app = require('../app');
const passport = require('passport');
let models = require('../models/');

/* GET home page. */
let homeModule = require('../controllers/site/homeController');
router.get('/home', homeModule.index);


/*********/
let authModule = require('../controllers/auth');
router.use('/user/login', authModule.login);
router.use('/user/register', authModule.register);
router.use('/user/profile', authModule.profile);
router.get('/user/logout', authModule.logout);

router.get('/user/create', (req, res) => {
  models['User'].create({
    username: 'farhad',
    password: '12345'
  }).then(res=>{
    console.log('res -->',res);
  })
});

module.exports = router;
