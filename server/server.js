require("dotenv").config();
const port = 8000;

const express = require("express"),
    cookieParser = require("cookie-parser"),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require("cors");

require("./config/mongoose.config")(process.env.DB_NAME);
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded());

require("./routes/user.routes")(app);
require("./routes/item.routes")(app);
require("./routes/officer.routes")(app);
require("./routes/admin.routes")(app);

app.listen(process.env.DB_PORT, () =>
    console.log(`Listening on port ${process.env.DB_PORT}`)
);