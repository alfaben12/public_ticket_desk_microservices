const jwt = require('jsonwebtoken');

function JWTverify(req, res, next) {
	const token = req.body.jwtToken;
	if (token) {
		jwt.verify(token, 'TicketDesk', function(err, payload) {
			if (err) {
				res.json({
					result: false,
					message: 'Invalid Signature.'
				});
			} else {
				req.payload = payload;
				next();
			}
		});
	} else {
		res.json({
			result: false,
			message: 'Invalid Signature.'
		});
	}
}

module.exports = JWTverify;
