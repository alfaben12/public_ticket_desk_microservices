const express = require('express');
const router = express.Router();
const Myaccounts = require('../controller/Myaccounts');
const MyaccountJWT = require('../JWTauth/MyaccountJWT');
const MyaccountValidator = require('../validator/MyaccountValidator');

router.get('/', Myaccounts.index);
router.post('/processLogin/', MyaccountValidator.processLoginValidation, Myaccounts.processLogin);
module.exports = router;
