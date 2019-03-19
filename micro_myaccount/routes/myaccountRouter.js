const express = require('express');
const router = express.Router();

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
const myaccountModel = require('../models/myaccount');
const myaccountController = require('../controllers/myaccounts');

router.get('/processGetMember/:id', myaccountController.processGetMember);

router.post('/processAdd', myaccountController.processAdd);

router.put('/processModify/:id', myaccountController.processModify);

router.delete('/processDelete/:id', myaccountController.processDelete);

module.exports = router;
