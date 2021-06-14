const ItemController = require('../controllers/item.controller');
module.exports = function(app){
    app.get('/api', ItemController.index);
    app.get('/api/items', ItemController.getAllItems);
    app.post('/api/item', ItemController.createItem);
    app.put("/api/item/:id/edit", ItemController.updateExistingItem);
    app.delete('/api/item/delete/:id', ItemController.deleteItem);
    app.get('/api/items/:id', ItemController.getItem);
}