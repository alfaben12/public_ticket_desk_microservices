const Login = require('../model/Login');
const GlobalHelper = require('../helpers/GlobalHelper');

module.exports = {
	index: function(req, res) {
		console.log('index');
	},

	processLogin: async function(req, res) {
		let member = await GlobalHelper.getMember(req, res);
		let encrypt;
		if (member.id > 0) {
			encrypt = await GlobalHelper.encryptParameter(member.id);
		} else {
			res.status(204).json({
				rc: 204,
				message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
				data: rows
			});
		}

		console.log(encrypt);
	}
};
