const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const MemberDetail = sequelize.define(
	'member_detail',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		member_id: {
			type: Sequelize.INTEGER
		},
		countries_id: {
			type: Sequelize.INTEGER
		},
		states_id: {
			type: Sequelize.INTEGER
		},
		cities_id: {
			type: Sequelize.INTEGER
		},
		first_name: {
			type: Sequelize.STRING(255)
		},
		last_name: {
			type: Sequelize.STRING(255)
		},
		gender: {
			type: Sequelize.INTEGER
		},
		phone: {
			type: Sequelize.STRING(255)
		},
		address: {
			type: Sequelize.TEXT
		},
		birth: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const PaymentCard = sequelize.define(
	'payment_card',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		member_id: {
			type: Sequelize.INTEGER
		},
		card_holder: {
			type: Sequelize.STRING(255)
		},
		card_number: {
			type: Sequelize.STRING(25)
		},
		exp_month: {
			type: Sequelize.INTEGER
		},
		exp_year: {
			type: Sequelize.INTEGER
		},
		cvv: {
			type: Sequelize.INTEGER
		},
		scheme: {
			type: Sequelize.STRING(255)
		},
		country: {
			type: Sequelize.STRING(255)
		},
		bank: {
			type: Sequelize.STRING(255)
		},
		url: {
			type: Sequelize.STRING(255)
		},
		bank_phone: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

module.exports = {
	MemberDetail: MemberDetail,
	PaymentCard: PaymentCard
};
