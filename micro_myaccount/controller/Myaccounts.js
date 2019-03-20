const Myaccount = require("../model/Myaccount")

module.exports = {
  index: function(req, res) {
    Myaccount.findAll().then(function(rows) {
      res.render("biodata/index", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("biodata/create")
  },

  store: function(req, res) {
    Myaccount.create(req.body).then(function() {
      res.redirect("/")
    })
  },

  edit: function(req, res) {
    Myaccount.findByPk(req.params.id).then(function(row) {
      res.render("biodata/edit", { data: row })
    })
  },

  update: function(req, res) {
    let check = Myaccount
    .findAndCountAll({
       where: {
          member_id: req.params.id
       },
    })
    .then(result => {
      console.log(result.count);
      console.log(result.rows);
    });
      // Myaccount.findByPk(req.params.id).then(function(row) {
      // row.update(req.body)
      // res.redirect("/")
      // res.send(rows);
    })
  },

  destroy: function(req, res) {
    Myaccount.findByPk(req.params.id).then(function(row) {
      row.destroy()
      res.redirect("/")
    })
  }
}