const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.generateRechargeCode = function(callback) {
	return new Promise((resolve, reject) => {
		Recharge.Recharge
			.findAll({
				attributes: [ [ Sequelize.fn('max', Sequelize.col('id')), 'id' ] ],
				raw: true
			})
			.then((rows) => resolve('REINV00' + rows[0].id))
			.catch((err) => reject(err));
	});
};
