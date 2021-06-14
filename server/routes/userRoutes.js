const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.get('/api', UserController.index);
    app.get('/api/users', UserController.getAllUsers);
    app.post('/api/user', UserController.createUser);
    app.put("/api/user/:id/edit", UserController.updateExistingUser);
    app.delete('/api/user/delete/:id', UserController.deleteUser);
    app.get('/api/users/:id', UserController.getUser);
}