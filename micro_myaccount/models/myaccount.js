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
		let member_id = req.id;
		let gender = req.txt_gender;
		let countries_id = req.txt_countries_id;
		let states_id = req.txt_states_id;
		let cities_id = req.txt_cities_id;
		let first_name = req.txt_first_name;
		let last_name = req.txt_last_name;
		let birth = req.txt_birth;
		let phone = req.txt_phone;
		let address = req.txt_address;

		let check = await knex('member_detail').where('member_id', id);

		if (check.length == 0) {
			await knex('member_detail').insert({
				member_id: id,
				gender: gender,
				countries_id: countries_id,
				states_id: states_id,
				cities_id: cities_id,
				first_name: first_name,
				last_name: last_name,
				birth: birth,
				phone: phone,
				address: address
			});
			return 'insert';
		} else {
			await knex('member_detail').where('member_id', id).update({
				member_id: member_id,
				gender: gender,
				countries_id: countries_id,
				states_id: states_id,
				cities_id: cities_id,
				first_name: first_name,
				last_name: last_name,
				birth: birth,
				phone: phone,
				address: address
			});
			return 'update';
		}
		// let judul = req.judul;
		// let sinopsis = req.sinopsis;
		// let penulis = req.penulis;

		// await knex('member').where('id', id).update({
		// 	judul: judul,
		// 	sinopsis: sinopsis,
		// 	penulis: penulis
		// });
	},

	delete: async function(id) {
		await knex('member').where('id', id).del();
	}
};
