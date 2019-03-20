const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const Myaccount = sequelize.define(
  	"member_detail",
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
		},
	},
  	{ 
	  	timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true, // true = nama table asli , false = nama table ketambahan 's' diakhir
	}, 
)

module.exports = Myaccount