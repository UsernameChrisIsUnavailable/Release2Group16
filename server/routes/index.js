let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/*get home page */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/login',indexController.displayLoginPage);
// POST for login page
router.post('/login',indexController.processLoginPage);
// GET for register page
router.get('/register',indexController.displayRegisterPage);
// POST for register page
router.post('/register',indexController.processRegisterPage); 
router.get('/logout', indexController.performLogout); 


module.exports = router;
