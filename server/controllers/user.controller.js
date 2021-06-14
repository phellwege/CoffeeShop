const { User } = require('../models/user.model');
module.exports = {

register: (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
},
getUser: (request, response) => {
    User.findOne({_id:request.params.id})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},
getAllUsers: (request, response) => {
    User.find({})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},
updateExistingUser: (request, response) => {
    User.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updateExistingUser => response.json(updateExistingUser))
        .catch(err => response.json(err.errors));
},
deleteUser: (request, response) => {
    User.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err.errors))
}
}