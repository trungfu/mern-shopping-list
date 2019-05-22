const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const itemsRoute = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/items/', itemsRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`))