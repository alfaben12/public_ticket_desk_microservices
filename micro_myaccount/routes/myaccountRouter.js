const express = require('express');
const router = express.Router();
const Myaccounts = require('../controller/Myaccounts');
const MyaccountJWT = require('../JWTauth/MyaccountJWT');
const MyaccountValidator = require('../validator/MyaccountValidator');

router.get('/', Myaccounts.index);
router.put(
	'/processSetupMyaccount/:id',
	MyaccountJWT,
	MyaccountValidator.processSetupMyaccountValidation,
	Myaccounts.processSetupMyaccount
);
router.post('/processSetupCC/', MyaccountJWT, MyaccountValidator.processSetupCCValidation, Myaccounts.processSetupCC);
router.delete('/processDeleteCC/', MyaccountJWT, Myaccounts.processDeleteCC);
module.exports = router;
