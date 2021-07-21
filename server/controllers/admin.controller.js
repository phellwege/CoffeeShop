const { Admin } = require('../models/admin.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
    index:(request, response) => {
        Admin.find().sort({name:1})
        .then(data => response.json({results:data}))
        .catch(err => response.json(err.errors));
},
createAdmin: (request, response) => {
    Admin.create( request.body )
        .then(data => response.json(data))
        .catch(err => {
            response.status(400).json(err);
        });
        
},

getAdmin: (request, response) => {
    Admin.findOne({_id:request.params.id})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

getAllAdmins: (request, response) => {
    Admin.find({})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

updateExistingAdmin: (request, response) => {
    Admin.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updateExistingAdmin => response.json(updateExistingAdmin))
        .catch(err => response.json(err.errors));
},

deleteAdmin: (request, response) => {
    Admin.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err.errors))
}
}
