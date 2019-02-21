const express = require("express");
const exphbs = require("express-handlebars");
const Sequelize = require('sequelize');

const config = require('dotenv').config();

const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/",function(req, res){
    res.render("index");
});

app.listen(PORT, function(){
    console.log("App running at http://localhost:" + PORT);
});