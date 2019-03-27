const { check, validationResult } = require('express-validator/check');

exports.processSetupMyaccountValidation = function(req, res, next) {
	req.checkBody('txt_gender', 'Gender is required').notEmpty();
	req.checkBody('txt_countries_id', 'Country is required').notEmpty();
	req.checkBody('txt_states_id', 'States is required').notEmpty();
	req.checkBody('txt_cities_id', 'Cities is required').notEmpty();
	req.checkBody('txt_first_name', 'First Name is required').notEmpty();
	req.checkBody('txt_last_name', 'Last Name is required').notEmpty();
	req.checkBody('txt_phone', 'Phone is required').isLength({ min: 9, max: 13 });
	req.checkBody('txt_birth', 'Birth is required').notEmpty();
	req.checkBody('txt_address', 'Address is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};

exports.processSetupCCValidation = function(req, res, next) {
	req.checkBody('txt_card_number', 'Card Number is require').isLength({ min: 14, max: 16 });
	req.checkBody('txt_month', 'Month is require').notEmpty();
	req.checkBody('txt_year', 'Year is require').notEmpty();
	req.checkBody('txt_cvv', 'Cvv is require').isLength({ min: 3, max: 4 });
	req.checkBody('txt_card_holder', 'Cardholder is require').notEmpty();
	req.checkBody('txt_scheme', 'Scheme is require').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};
