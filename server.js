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
    name: {
        type: String, 
        required: true, 
        minlength: [3, "You must say a real question not just letters!"] // custom error messages are just arrays
    },
    message: {
        type:String,
        required: true,
        minlength: [10, "Messages must be at least 10char long."]
    }
}, {timestamps: true})

// create the actual model
mongoose.model('Belt', BeltSchema); 
var Belt = mongoose.model('Belt')
mongoose.Promise = global.Promise;

// get all
app.get('/message', function(req, res){
    Belt.find({}, function(err, data){
        // always check and handle errors appropriately
        if(err){
            console.log(err);
            res.json({message: "Error", data: err})
        }else{
            console.log(data);
            res.json({message: "Success", data: data})
        }
    })
})

// get by id
app.get('message/:id', function(req,res){
    Belt.findOne({_id:req.params.id}, function(err,data){
        if(err){
            console.log(err)
            res.status(500).send(err)
        }else{
            res.json(data)
        }
    })
})

app.post('/message', function(req,res){
    let add = new Belt();
    console.log(req.body)
    add.name = req.body.name
    add.message = req.body.desc
    add.save(function(err,data){
        if(err){
            console.log(err)
            res.json({message: "Error", data:err})
        }else{
            res.json({message: "Safe", data:data})
        }
    })
})

app.delete('/message/delete/:id', function(req,res){
    Belt.remove({_id:req.params.id}, function(err,data){
        if(err){
            console.log(err)
            res.status(500).send(err)
        }else{
            res.json(data)
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./beltexamApp/dist/index.html"))
  });
  
  app.listen(8000, function() {
      console.log("listening on port 8000");
  });
  