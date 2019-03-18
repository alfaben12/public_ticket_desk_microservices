const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'ticket_desk_db'
	},
	debug: true
});

module.exports = {
	getAll: async function() {
		return await knex('member');
	},

	getById: async function(id) {
		return await knex('member').where('id', id);
	},

	insert: async function(req) {
		let judul = req.judul;
		let sinopsis = req.sinopsis;
		let penulis = req.penulis;

		await knex('member').insert({
			judul: judul,
			sinopsis: sinopsis,
			penulis: penulis
		});
	},

	update: async function(req, id) {
		let judul = req.judul;
		let sinopsis = req.sinopsis;
		let penulis = req.penulis;

		await knex('member').where('id', id).update({
			judul: judul,
			sinopsis: sinopsis,
			penulis: penulis
		});
	},

	delete: async function(id) {
		await knex('member').where('id', id).del();
	}
};
