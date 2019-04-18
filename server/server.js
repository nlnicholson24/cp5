const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/quotes', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const quotes = require("./quotes.js");
app.use("/api/quotes", quotes.routes);

const users = require("./users.js");
app.use("/api/users", users.routes);
app.listen(3002, () => console.log('Server listening on port 3002!'));
