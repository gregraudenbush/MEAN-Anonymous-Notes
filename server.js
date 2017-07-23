var express = require('express');
var app = express();
var bp = require("body-parser");
const path = require('path'); 
var mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bp.json())
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, function() {
    console.log("listening on port 8000");

})

