
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/note');

promise.then(()=> {
  console.log("SUCCESSFULLY CONNECTED TO DATABASE")
})

var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    
    require(models_path + '/' + file);
  }
});