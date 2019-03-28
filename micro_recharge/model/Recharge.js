const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Recharge = sequelize.define(
	'recharge',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		recharge_product_id: {
			type: Sequelize.INTEGER
		},
		recharge_type_id: {
			type: Sequelize.INTEGER
		},
		recharge_status_id: {
			type: Sequelize.INTEGER
		},
		member_id: {
			type: Sequelize.INTEGER
		},
		recharge_code: {
			type: Sequelize.STRING(255)
		},
		target: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const RechargeDetail = sequelize.define(
	'recharge_detail',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		recharge_id: {
			type: Sequelize.INTEGER
		},
		member_id: {
			type: Sequelize.INTEGER
		},
		promo_code_id: {
			type: Sequelize.INTEGER
		},
		total_cost: {
			type: Sequelize.INTEGER
		},
		total_reduction: {
			type: Sequelize.INTEGER
		},
		total_tax: {
			type: Sequelize.INTEGER
		},
		final_cost: {
			type: Sequelize.INTEGER
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

module.exports = {
	Recharge: Recharge,
	RechargeDetail: RechargeDetail
};
