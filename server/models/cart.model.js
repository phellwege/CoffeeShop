const mongoose = require('mongoose');


function cart() {
    
}
export default cart;

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;