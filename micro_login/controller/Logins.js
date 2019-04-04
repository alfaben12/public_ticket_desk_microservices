const Login = require('../model/Login');
const GlobalHelper = require('../helpers/GlobalHelper');

module.exports = {
	index: function(req, res) {
		console.log('index');
	},

	processLogin: async function(req, res) {
		code = await GlobalHelper.getMember(req, res);
		console.log('code: ', code.id);
	}
};
