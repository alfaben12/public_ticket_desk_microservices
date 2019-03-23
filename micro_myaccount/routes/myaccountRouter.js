const express = require('express');
const router = express.Router();
const Myaccounts = require('../controller/Myaccounts');

router.get('/', Myaccounts.index);
router.put('/processSetupMyaccount/:id', Myaccounts.processSetupMyaccount);
router.post('/processSetupCC/', Myaccounts.processSetupCC);
router.delete('/processDeleteCC/', Myaccounts.processDeleteCC);
module.exports = router;
