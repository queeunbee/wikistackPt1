const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const layout = require('./views/layout');
const { db } = require('./models');
const modelsIndex = require("./models/index");

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(express.static(path.join(__dirname, "public"))
)

app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.send(layout(''));
});

const test = async() => {
    // await modelsIndex.Page.sync();
    // await modelsIndex.User.sync();
    await db.sync();
}

test();
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});