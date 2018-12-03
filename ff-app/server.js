const express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const port = process.env.PORT || 3001;

//set up mongoose
mongoose.Promise = global.Promise;

//connect to MongoDB, moght get err socketHandler if database isn't open
mongoose.connect('mongodb://localhost:3001');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected!');
});

//use sessions for tracking logins
app.use(session({
  secret: 'shush',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// include routes
var routes = require('../backend/routes');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// listen on port 3001
app.listen(port, function () {
  console.log('Express app listening on port 3001');
});

// GET route for checking connection
app.use('/check', (req, res) => {
  res.send({ connection: 'true' });
});
