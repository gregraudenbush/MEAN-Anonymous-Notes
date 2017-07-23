var path = require('path')


var note = require('../controllers/notes.js');

module.exports = function(app) {
  app.get('/', (req, res, next)=>{
    console.log("main get")
    res.json(true)
  });
 

  app.post('/post', (req, res, next)=>{
    
    console.log("in routs.js")
    note.post(req, res)
    
    
  });

  app.get("/notes", (req, res)=> {
    note.index(req, res);
  })
 

  app.all("*", (req,res,next) => {
      console.log("app.all routes.js")
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}