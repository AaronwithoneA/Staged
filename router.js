var express = require('express');
var router = express.Router();
var User = require('./models/user');



router.post('/', function(req, res, next){
  if(req.body.username && req.body.password){

    var userData = {
      username: req.body.username,
      password: req.body.password
    }

    User.create(userData, function(err, user){
      if(err){
        return next(err)
      } else {
        return res.redirect('/profile');
      }
   });
  }
})
