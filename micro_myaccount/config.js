const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

/* import routes */
const myaccountRouter = require('./routes/myaccountRouter');

app.use(cors());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// allow preflight
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(
	bodyParser.json({
		limit: '8mb'
	})
);

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routing
app.get('/processGetMember/:id', myaccountRouter);
app.post('/processAdd', myaccountRouter);
app.put('/processModify/:id', myaccountRouter);
app.delete('/processDelete/:id', myaccountRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
