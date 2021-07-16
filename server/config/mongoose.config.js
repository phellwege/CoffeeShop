const mongoose = require('mongoose');
module.exports = ecommerce_db => {mongoose
    .connect(`mongodb://localhost/${ecommerce_db}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
})

    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
}