const jwt = require('jsonwebtoken');

module.exports = {
	JWTverify: function(req, res) {
		// const bearerHeader = req.headers['authorization'];
		// const token = bearerHeader ? bearerHeader.split(' ')[1] : undefined;
		let JWTres = false;
		const token = req.body.jwtToken;
		if (token) {
			jwt.verify(token, 'TicketDesk', function(err, payload) {
				if (err) {
					JWTres = false;
				} else {
					JWTres = true;
				}
			});
		} else {
			JWTres = false;
		}
		return JWTres;
	}
};
