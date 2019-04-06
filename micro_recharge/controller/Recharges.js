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

	processRechargePulsa: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 1;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeVoucher: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 2;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeGame: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 3;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeElectricMoney: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 4;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeElectricity: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 5;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	}
};
