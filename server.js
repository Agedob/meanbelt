var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/beltexamApp/dist' ));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Belt');


// set up belt schema
var BeltSchema = new mongoose.Schema({
    restaurant: {
        type: String, 
        required: [true, "fill out forms for Restaurants"],
        minlength: [3, "iDk any restaurants with names less than 3 char long..."] // custom error messages are just arrays
    },
    cuisine: {
        type:String,
        required: [true, "fill out forms for Cuisine"],
        minlength: [3, "Cuisine must be at least 3char long."]
    },
    review:[{
        customer:{type: String, minlength:[3,"I doubt your name is as short as mine..."]},
        cont:{type: String, minlength:[3, "write a real review scrublord"]},
        rating:{type:Number, default:0}
    }]
}, {timestamps: true})

// create the actual model
mongoose.model('Belt', BeltSchema); 
var Belt = mongoose.model('Belt')
mongoose.Promise = global.Promise;

// let i = new Belt()
// i.restaurant = 'first entry';
// i.cuisine = 'Mexican';
// i.review.push({cont:'some text in here'})
// i.save(function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('all good')
//     }
// })

// get all
app.get('/restaurant', function(req, res){
    Belt.find({}, function(err, data){
        // always check and handle errors appropriately
        if(err){
            console.log(err);
            res.json({message: "Error", data: err})
        }else{
            res.json({message: "Success", data: data})
        }
    })
})

// get by id
app.get('/restaurant/:id', function(req,res){
    Belt.findOne({_id:req.params.id}, function(err,data){
        if(err){
            console.log(err)
            res.status(500).send(err)
        }else{
            res.json(data)
        }
    })
})

//add new
app.post('/restaurant', function(req,res){
    let add = new Belt();
    // console.log(req.body)
    Belt.findOne({restaurant:req.body.restaurant}, function(err,data){
        if(data){
            res.json({message: "Error", data:{errors:{cuisine:{message:"Already exsists"}}}})
        }else{
            add.restaurant = req.body.restaurant
            add.cuisine = req.body.cuisine
            add.save(function(err,data){
                if(err){
                    console.log(err)
                    res.json({message: "Error", data:err})
                }else{
                    res.json({message: "Safe", data:data})
                }
            })

        }
    })
})

// dell..
app.delete('/restaurant/delete/:id', function(req,res){
    Belt.remove({_id:req.params.id}, function(err,data){
        if(err){
            console.log(err)
            res.status(500).send(err)
        }else{
            res.json(data)
        }
    })
})

// update
app.put('/restaurant/:id', function(req,res){
    console.log(req.body);
    Belt.findOne({restaurant:req.body.restaurant},function(err,data){
      if(data){
        console.log(data)
         res.json({message: "Error", data:{exsists:"Author Exsists"}})
      }else{
        Belt.findOne({_id:req.params.id},function(err,x){
            x.restaurant = req.body.restaurant;
            x.cuisine = req.body.cuisine;
            x.save(function(err,data){
                if(err){
                    console.log(err)
                    res.json({message: "Error", data:err});
                }else{
                    res.json(data)
                }
                })
            })
        }
    })
  })

// add review
app.post('/review/:id', function(req,res){
    Belt.findOne({_id:req.params.id}, function(err, data){
      if(err){
        res.json({message: "Error", data:err})
      }else{
        data.review.push({cont:req.body.cont, customer:req.body.name, rating:req.body.stars})
        data.save(function(err,data){
          if(err){
            res.json({message: "Error", data:err})
            }else{
                res.json(data)}
        })
      }
    })
})

// wildcard catch all 
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./beltexamApp/dist/index.html"))
  });
  
  app.listen(8000, function() {
      console.log("listening on port 8000");
  });
  