var express = require("express");
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://root:qqqqqq@ds011902.mlab.com:11902/ecommerce', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

//Middleware
app.use(morgan('dev'));


app.get('/', function(req, res){
    var name = "Jesse";
    res.json("My name is " + name);
    
});

app.get('/catname', function(req, res){
    var name = "Jesse";
    res.json("My name is " + name);
    
});


//app.post()

//app.put()

//app.delete()

app.listen(3000, function(err){
    if (err) throw err;
    console.log("Server is Running");
});
