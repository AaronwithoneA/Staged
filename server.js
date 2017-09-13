var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./models/userModel'),
  bodyParser = require('body-parser');

app.listen(port);

console.log('listening on port: ' + port);
