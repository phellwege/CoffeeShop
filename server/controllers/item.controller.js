const { Item } = require('../models/item.model');

module.exports = {
    index:(request, response) => {
        Item.find().sort({name:1})
        .then(data => response.json({results:data}))
        .catch(err => response.json(err.errors));
},
createItem: (request, response) => {
    Item.create( request.body )
        .then(data => response.json(data))
        .catch(err => {
            response.status(400).json(err);
        });
        
},

getItem: (request, response) => {
    Item.findOne({_id:request.params.id})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

getAllItems: (request, response) => {
    Item.find({})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

updateExistingItem: (request, response) => {
    Item.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updateExistingItem => response.json(updateExistingItem))
        .catch(err => response.json(err.errors));
},

deleteItem: (request, response) => {
    Item.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err.errors))
}
}
