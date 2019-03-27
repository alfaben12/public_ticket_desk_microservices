const express = require('express');
const router = express.Router();
const Myaccounts = require('../controller/Myaccounts');
const MyaccountJWT = require('../JWTauth/MyaccountJWT');
const MyaccountValidator = require('../validator/MyaccountValidator');

router.get('/', Myaccounts.index);
router.put(
	'/processSetupMyaccount/:id',
	MyaccountJWT.JWTverify,
	MyaccountValidator.processSetupMyaccountValidation,
	Myaccounts.processSetupMyaccount
);
router.post(
	'/processSetupCC/',
	MyaccountJWT.JWTverify,
	MyaccountValidator.processSetupCCValidation,
	Myaccounts.processSetupCC
);
router.delete('/processDeleteCC/', MyaccountJWT.JWTverify, Myaccounts.processDeleteCC);
module.exports = router;
