const { Router } = require('express');
const router = Router()

const { getUsers,register,login,protected,logout } = require('../controllers/auth');
const { userAuth } = require('../middlewares/auth-middleware');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const {loginValidation, registerValidation } = require('../validators/auth');

router.get('/get-users',getUsers);
router.get('/protected',userAuth,protected);
router.post('/register',registerValidation,validationMiddleware,register)
router.post('/login',loginValidation,validationMiddleware,login)
router.post('/login',userAuth,logout)

module.exports = router