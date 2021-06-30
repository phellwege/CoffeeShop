

const express = require("express");
const cors = require("cors");
const port = 8000;
require('dotenv').config();
require("./config/mongoose.config");
const jwt = require("jsonwebtoken");

// mongoose.config could be changed to export a function that lets us pass in a db_name like we pass app into the function that our routes file exports
// const db_name = "my_db";
// require("./config/mongoose.config")(db_name);

const app = express();
const payload = {
    id: user._id
};

// notice that we're using the SECRET_KEY from our .env file
const userToken = jwt.sign(payload, process.env.SECRET_KEY);
// req.body undefined without this!


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
