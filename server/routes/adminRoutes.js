const AdminController = require('../controllers/admin.controller');
module.exports = function(app){
    app.get('/api', AdminController.index);
    app.get('/api/admins', AdminController.getAllAdmins);
    app.post('/api/admin', AdminController.createAdmin);
    app.put("/api/admin/:id/edit", AdminController.updateExistingAdmin);
    app.delete('/api/admin/delete/:id', AdminController.deleteAdmin);
    app.get('/api/admins/:id', AdminController.getAdmin);
}