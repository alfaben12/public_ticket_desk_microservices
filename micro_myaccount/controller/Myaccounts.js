const Myaccount = require('../model/Myaccount');
const MyaccountJWT = require('../JWTauth/MyaccountJWT');

module.exports = {
	index: function(req, res) {
		res.send(Myaccount.tes);
	},

	processSetupMyaccount: function(req, res) {
		let JWTauth = MyaccountJWT.JWTverify(req, res);
		if (!JWTauth) {
			res.json({
				result: false,
				message: 'Failed auth JWT.'
			});
			process.exit();
		}

		let member_id = req.JWTdata.member_auth;
		let countries_id = req.body.txt_countries_id;
		let states_id = req.body.txt_states_id;
		let cities_id = req.body.txt_cities_id;
		let first_name = req.body.txt_first_name;
		let last_name = req.body.txt_last_name;
		let gender = req.body.txt_gender;
		let phone = req.body.txt_phone;
		let address = req.body.txt_address;
		let birth = req.body.txt_birth;

		let value = {
			member_id: member_id,
			countries_id: countries_id,
			states_id: states_id,
			cities_id: cities_id,
			first_name: first_name,
			last_name: last_name,
			gender: gender,
			phone: phone,
			address: address,
			birth: birth
		};
		let check = Myaccount.MemberDetail
			.findAll({
				where: {
					member_id: member_id
				}
			})
			.then(function(rows) {
				if (rows.length == 1) {
					Myaccount.MemberDetail
						.findOne({
							where: {
								member_id: member_id
							}
						})
						.then(function(row) {
							row.update(value);
							res.json({
								result: true,
								message: 'Success Update.'
							});
						});
				} else {
					Myaccount.MemberDetail.create(value).then(function() {
						res.json({
							result: true,
							message: 'Success Insert.'
						});
					});
				}
			});
	},

	processSetupCC: function(req, res) {
		let JWTauth = MyaccountJWT.JWTverify(req, res);
		if (!JWTauth) {
			res.json({
				result: false,
				message: 'Failed auth JWT.'
			});
			process.exit();
		}

		let member_id = req.JWTdata.member_auth;
		let card_holder = req.body.txt_card_holder;
		let card_number = req.body.txt_card_number;
		let exp_month = req.body.txt_month;
		let exp_year = req.body.txt_year;
		let cvv = req.body.txt_cvv;
		let scheme = req.body.txt_scheme;
		let country = req.body.txt_country;
		let bank = req.body.txt_bank;
		let url = req.body.txt_url;
		let bank_phone = req.body.txt_phone;

		let value = {
			member_id: member_id,
			card_holder: card_holder,
			card_number: card_number,
			exp_month: exp_month,
			exp_year: exp_year,
			cvv: cvv,
			scheme: scheme,
			country: country,
			bank: bank,
			url: url,
			bank_phone: bank_phone
		};
		Myaccount.PaymentCard.create(value).then(function(result) {
			res.json({
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processDeleteCC: function(req, res) {
		let JWTauth = MyaccountJWT.JWTverify(req, res);
		if (!JWTauth) {
			res.json({
				result: false,
				message: 'Failed auth JWT.'
			});
			process.exit();
		}
		let id = req.JWTdata.id;
		let member_id = req.JWTdata.member_auth;

		let check = Myaccount.PaymentCard
			.findAll({
				where: {
					id: id,
					member_id: member_id
				}
			})
			.then(function(rows) {
				if (rows.length != 0) {
					Myaccount.PaymentCard
						.findOne({
							where: {
								id: id,
								member_id: member_id
							}
						})
						.then(function(row) {
							row.destroy();
							res.json({
								result: true,
								message: 'Success Delete.'
							});
						});
				} else {
					res.json({
						result: false,
						message: 'Failed Delete.'
					});
				}
			});
	}
};
