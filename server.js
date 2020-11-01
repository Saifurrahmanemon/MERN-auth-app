const express = require('express');
require('dotenv').config(); // for loading environment variables
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const passport = require('passport');
const app = express();

//body-parser middleware though we don't need it anymore

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongodb connection via mongoose

const MONGO_URI = process.env.MONGO_URI;
mongoose
	.connect(MONGO_URI, { useNewUrlParser: true })
	.then(() => console.log('Mongo Connection successful'))
	.catch(err => console.log('err'));
//passport middleware

app.use(passport.initialize());

//passport config
require('./config/passport')(passport);
app.use('/api/users', users);

//port listening

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
