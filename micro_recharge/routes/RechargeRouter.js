const express = require('express');
const router = express.Router();
const Recharges = require('../controller/Recharges');
const RechargeJWT = require('../JWTauth/RechargeJWT');
const RechargeValidator = require('../validator/RechargeValidator');

router.get('/', Recharges.index);
router.post(
	'/processGetServicePulsa/',
	RechargeValidator.processGetServicePulsaValidation,
	Recharges.processGetServicePulsa
);
router.post(
	'/processGetServiceVoucher/',
	RechargeValidator.processGetServiceVoucherValidation,
	Recharges.processGetServiceVoucher
);
router.post(
	'/processGetServiceGame/',
	RechargeValidator.processGetServiceGameValidation,
	Recharges.processGetServiceGame
);
router.post(
	'/processGetServiceElectricMoney/',
	RechargeValidator.processGetServiceMoneyValidation,
	Recharges.processGetServiceElectricMoney
);
router.post(
	'/processGetServiceElectricity/',
	RechargeValidator.processGetServiceElectricityValidation,
	Recharges.processGetServiceElectricity
);

module.exports = router;
