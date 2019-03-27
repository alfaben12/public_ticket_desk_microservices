const express = require('express');
const router = express.Router();
const Recharges = require('../controller/Recharges');
const RechargeJWT = require('../JWTauth/RechargeJWT');
const RechargeValidator = require('../validator/RechargeValidator');

router.get('/', Recharges.index);
router.put(
	'/processSetupMyaccount/:id',
	RechargeJWT.JWTverify,
	RechargeValidator.processSetupMyaccountValidation,
	Recharges.processSetupMyaccount
);
router.post(
	'/processSetupCC/',
	RechargeJWT.JWTverify,
	RechargeValidator.processSetupCCValidation,
	Recharges.processSetupCC
);
router.delete('/processDeleteCC/', RechargeJWT.JWTverify, Recharges.processDeleteCC);
module.exports = router;
