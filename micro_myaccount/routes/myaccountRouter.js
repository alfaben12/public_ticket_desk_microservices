const express = require('express');
const router = express.Router();
const Myaccounts = require('../controller/Myaccounts');

router.get('/', Myaccounts.index);
router.put('/processModify/:id', Myaccounts.update);
module.exports = router;
