
var mongoose = require('mongoose');


var NoteSchema = new mongoose.Schema({
  text: {type: String, required: true, minlength: 3, trim: true}, 
 
},
{ timestamps: true });

var Note = mongoose.model('Note', NoteSchema);