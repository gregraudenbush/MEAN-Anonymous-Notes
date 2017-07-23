var mongoose = require('mongoose');
var Note = mongoose.model('Note');
mongoose.Promise = global.Promise;


module.exports = {
  show: function(req, res) {
    Note.find({}, function(err, notes) {
      res.json({Notes: Notes});
    })
  },
  post: function(req,res){
    console.log("in controllers")
    var note = new Note({text: req.body.text} );
    note.save(function(err) {
      if(err){
        console.log("something went wrong" + err.message);
        res.status(401).json({message: "something went wrong"})
      }else{
        res.json(note)
      }
    })

  },
  index: function(req, res){
    Note.find({}, function(err, notes){
      if(err){
        res.status(401).json({message: "somethign went worng"});
      } else {
        res.json(notes)
      }
    })
  }
  

}