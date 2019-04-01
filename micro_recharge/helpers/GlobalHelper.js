const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.generateRechargeCode = function(callback) {
	Recharge.Recharge
		.findAll({
			attributes: [ [ Sequelize.fn('max', Sequelize.col('id')), 'id' ] ],
			raw: true
		})
		.then(function(rows) {
			callback('REINV00' + rows[0].id);
		});
};
