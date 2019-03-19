const myaccountModel = require('../models/myaccount');

module.exports = {
	index: function(req, res) {
		myaccountModel.getAll().then(function(data) {
			res.json(data);
		});
	},

	processAdd: function(req, res) {
		myaccountModel.insert(req.body).then(function() {});
		res.redirect('/');
	},

	processGetMember: function(req, res) {
		myaccountModel.getById(req.params.id).then(function(data) {
			res.json(data);
		});
	},

	processModify: function(req, res) {
		myaccountModel.update(req.body, req.params.id).then(function() {});
		res.redirect('/');
	},

	processDelete: function(req, res) {
		myaccountModel.delete(req.params.id).then(function() {});
		res.redirect('/');
	}
};
