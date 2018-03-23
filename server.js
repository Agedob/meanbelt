var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/beltexamApp/dist' ));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Belt');


// set up question schema
var BeltSchema = new mongoose.Schema({
    question: {
        type: String, 
        required: true, 
        minlength: [3, "You must say a real question not just letters!"] // custom error messages are just arrays
    },
    desc: String
}, {timestamps: true})

// create the actual model
mongoose.model('Belt', BeltSchema); 
var Belt = mongoose.model('Belt')
mongoose.Promise = global.Promise;

// get all
// app.get('/questions', function(req, res){
//     Question.find({}, function(err, data){
//         // always check and handle errors appropriately
//         if(err){
//             console.log(err);
//             res.json({message: "Error", data: err})
//         }else{
//             console.log(data);
//             res.json({message: "Success", data: data})
//         }
//     })
// })

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./beltexamApp/dist/index.html"))
  });
  
  app.listen(8000, function() {
      console.log("listening on port 8000");
  });
  