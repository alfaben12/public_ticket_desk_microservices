const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

/* import routes */
const myaccountRouter = require('./routes/myaccountRouter');

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
app.use('/member/:id', myaccountRouter);
app.post('/processAdd', myaccountRouter);
app.put('/processModify/:id', myaccountRouter);
app.delete('/processDelete/:id', myaccountRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
