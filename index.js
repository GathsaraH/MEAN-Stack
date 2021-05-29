const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path=require('path')

const dbURI =
  "mongodb+srv://gathsara:test1234@nodetuts.o2sfi.mongodb.net/mean-stack?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log("Connected To DB"))
  .catch((err) => console.log(err));


app.use(express.static(__dirname+'/Client/dist/Client'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/Client/dist/Client/index.html'))
});
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
