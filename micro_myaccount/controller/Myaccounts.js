const Myaccount = require('../model/Myaccount');
const MyaccountJWT = require('../JWTauth/MyaccountJWT');

module.exports = {
	index: function(req, res) {
		res.send(Myaccount.tes);
	},

	update: function(req, res) {
		let JWTauth = MyaccountJWT.JWTverify(req, res);
		if (!JWTauth) {
			res.send('gagal auth jwt');
			process.exit();
		}

		let member_id = req.body.member_auth;
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
					member_id: req.params.id
				}
			})
			.then(function(rows) {
				if (rows.length == 1) {
					Myaccount.MemberDetail
						.findOne({
							where: {
								member_id: req.params.id
							}
						})
						.then(function(row) {
							row.update(value);
							res.send('berhasil update');
						});
				} else {
					Myaccount.MemberDetail.create(value).then(function() {
						res.send('berhasil insert');
					});
				}
			});
	}
};
