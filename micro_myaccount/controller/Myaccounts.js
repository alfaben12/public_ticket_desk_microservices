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
		let member_id = req.body.member_auth;
		let countries_id = req.body.txt_countries_id;
		let states_id = req.body.txt_states_id;
		let cities_id = req.body.txt_cities_id;
		let first_name = req.body.txt_first_name;
		let last_name = req.body.txt_last_name;
		let gender = req.body.txt_gender;
		let phone = req.body.txt_phone;
		let address = req.body.txt_address;
		let birth = req.body.txt_birth;
		
		
		let value = {
			member_id: member_id,
			countries_id: countries_id,
			states_id: states_id,
			cities_id: cities_id,
			first_name: first_name,
			last_name: last_name,
			gender: gender,
			phone: phone,
			address: address,
			birth: birth
		}
		
		let check = Myaccount.findAll({
			where: {
				member_id: req.params.id,
			}
		}).then(function(row) {
			if(row.length == 1){
				Myaccount.findOne({ 
					where: {
						member_id: req.params.id,
					}
				}).then(function(row) {
					row.update(value);
					res.send('berhasil update')
				})
			}else{
				Myaccount.create(value).then(function() {
					res.send('berhasil insert')
				})
			}
		});
		// Myaccount.findByPk(req.params.id).then(function(row) {
		// row.update(req.body)
		// res.redirect("/")
		// })
	},
	
	destroy: function(req, res) {
		Myaccount.findByPk(req.params.id).then(function(row) {
			row.destroy()
			res.redirect("/")
		})
	}
}