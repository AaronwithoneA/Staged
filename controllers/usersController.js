
var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, result) {
    if(err)
      res.send(err);
    res.json(user);
  });
};

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, result){
    if(err)
      res.send(err);
    res.json(result);
  });
};

exports.show_user = function(req, res) {
  User.findById(req.params.userId, function(err, result){
    if(err)
      res.send(err);
    res.json(result);
  })
}

exports.delete_user = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, result){
    if(err)
      res.send(err);
    res.json(result);
  })
}
