const Login = require('../model/Login');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.getMember = function(req, res) {
	return new Promise((resolve, reject) => {
		Login.Member
			.findOne({
				where: {
					email: req.body.txt_email,
					password: req.body.txt_password
				},
				raw: true
			})
			.then((rows) => resolve(rows))
			.catch((err) => reject(err));
	});
};
