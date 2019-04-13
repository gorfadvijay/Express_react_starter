const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Body parser Middleware
app.use(bodyParser.json());

//mongoose Database
const mongodb = require('./config/mongodb').mongoURI;
//mongoose  Connect

mongoose
	.connect(mongodb, { useNewUrlParser: true })
	.then(() => {
		console.log('conncted successfully');
	})
	.catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`listning to port ${port}`);
});
