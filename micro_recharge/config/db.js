const Sequelize = require("sequelize")

const sequalize = new Sequelize("ticket_desk_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
})

module.exports = sequalize