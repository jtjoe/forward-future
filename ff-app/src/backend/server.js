const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');

const port  = process.env.PORT || 8080;

// Set up Mongoose
mongoose.connect(config.db);
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
//require('./routes')(app);

  app.use(express.static(path.resolve(__dirname, '../public')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
    res.end();
  });

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
