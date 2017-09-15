var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password_digest: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

var User = mongoose.model('User', UserSchema);
module.exports = User;
