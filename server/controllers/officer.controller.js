const { Officer } = require('../models/officer.model');

module.exports = {
    index:(request, response) => {
        Officer.find().sort({name:1})
        .then(data => response.json({results:data}))
        .catch(err => response.json(err.errors));
},
createOfficer: (request, response) => {
    Officer.create( request.body )
        .then(data => response.json(data))
        .catch(err => {
            response.status(400).json(err);
        });
        
},

getOfficer: (request, response) => {
    Officer.findOne({_id:request.params.id})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

getAllOfficers: (request, response) => {
    Officer.find({})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

updateExistingOfficer: (request, response) => {
    Officer.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updateExistingOfficer => response.json(updateExistingOfficer))
        .catch(err => response.json(err.errors));
},

deleteOfficer: (request, response) => {
    Officer.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err.errors))
}
}
