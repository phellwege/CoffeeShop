const OfficerController = require('../controllers/officer.controller');
module.exports = function(app){
    app.get('/api', OfficerController.index);
    app.get('/api/officers', OfficerController.getAllOfficers);
    app.post('/api/officer', OfficerController.createOfficer);
    app.put("/api/officer/:id/edit", OfficerController.updateExistingOfficer);
    app.delete('/api/officer/delete/:id', OfficerController.deleteOfficer);
    app.get('/api/officers/:id', OfficerController.getOfficer);
}