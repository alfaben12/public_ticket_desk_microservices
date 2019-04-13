const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.getDataOrder = async function(req) {
	let recharge_id = req.orid;
	return new Promise((resolve, reject) => {
		Recharge.Recharge
			.findOne({
				attributes: [
					[ 'recharge_product_id', 'recharge_product_id' ],
					[ 'target', 'target' ],
					[ 'recharge_code', 'recharge_code' ],
					[ 'recharge_at', 'recharge_at' ],
					[ Sequelize.col('recharge_product.supp_op'), 'supp_op' ],
					[ Sequelize.col('recharge_product.supp_nominal'), 'supp_nominal' ],
					[ Sequelize.col('recharge_product.supp_price'), 'supp_price' ],
					[ Sequelize.col('recharge_product.supp_type'), 'supp_type' ],
					[ Sequelize.col('recharge_product.supp_valid'), 'supp_valid' ],
					[ Sequelize.col('recharge_status.name'), 'status_name' ]
				],
				include: [
					{
						attributes: [],
						model: Recharge.RechargeProduct,
						where: { id: Sequelize.col('recharge.recharge_product_id') }
					},
					{
						attributes: [],
						model: Recharge.RechargeStatus,
						where: { id: Sequelize.col('recharge.recharge_status_id') }
					}
				],
				where: {
					id: recharge_id
				}
			})
			.then((rows) => resolve(rows))
			.catch((err) => reject(err));
	});
};
