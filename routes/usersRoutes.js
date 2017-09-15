
module.exports = function(app){
  var usersController = require('../controllers/usersController');

  // user routes
  app.route('/users')
    .get(usersController.list_all_users)
    .post(usersController.create_user);

  app.route('/users/:userId')
    .get(usersController.show_user)
    .delete(usersController.delete_user);
};
