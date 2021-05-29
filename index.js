const express = require("express");
const app = express();
const port = 3000;
const router = express.Router()
const mongoose = require("mongoose");
const path = require('path')//Nodejs Package For File Paths
const authentication = require('./routes/authentication')(router)
const bodyParser = require('body-parser')


const dbURI =
    "mongodb+srv://gathsara:test1234@nodetuts.o2sfi.mongodb.net/mean-stack?retryWrites=true&w=majority";
mongoose
    .connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log("Connected To DB"))
    .catch((err) => console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

//Middleware
app.use(express.static(__dirname + '/Client/dist/Client'))
app.use('/authentication', authentication)

//Connect server to Angular 2 Index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/Client/dist/Client/index.html'))
});

//Start Server
app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
