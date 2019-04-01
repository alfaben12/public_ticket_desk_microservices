const Recharge = require('../model/Recharge');
const GlobalLibrary = require('../libraries/GlobalLibrary');
const GlobalHelper = require('../helpers/GlobalHelper');

module.exports = {
	index: function(req, res) {
		res.send(Recharge.tes);
	},

	processGetServicePulsa: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let phoneNumber = req.body.phoneNumber;

		let data = GlobalLibrary.glRechargeProduct('pulsa', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceVoucher: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('voucher', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceGame: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('game', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceElectricMoney: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('etoll', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceElectricity: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('pln', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processRechargePulsa: function(req, res) {
		let productId = req;
		let target = req.body.phoneNumber;
		let memberId = req;
		let rechargeTypeId = req;
		let rechargeCode = req;

		let data = GlobalHelper.generateRechargeCode(function(todos) {
			console.log('todos', todos);
		});
	},

	processRechargeVoucher: function(req, res) {
		res.send(Recharge.tes);
	},

	processRechargeGame: function(req, res) {
		res.send(Recharge.tes);
	},

	processRechargeElectricMoney: function(req, res) {
		res.send(Recharge.tes);
	},

	processRechargeElectricity: function(req, res) {
		res.send(Recharge.tes);
	}
};
