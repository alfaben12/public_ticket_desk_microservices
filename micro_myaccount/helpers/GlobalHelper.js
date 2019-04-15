const Hashids = require('hashids');

exports.decryptParameter = function(req) {
	return new Promise((resolve, reject) => {
		const hashids = new Hashids('TicketDesk', 8, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');

		let res = hashids.decode(req);

		resolve(res[0]);
		reject('Error');
	});
};
