const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.generateRechargeCode = function(length = 3) {
	Recharge.Recharge
		.findAll({
			attributes: [ [ Sequelize.fn('max', Sequelize.col('id')), 'id' ] ],
			raw: true
		})
		.then(function(rows) {
			return rows[0].id;
		});
};
