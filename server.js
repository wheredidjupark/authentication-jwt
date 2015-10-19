"use strict";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var UserModel = require("./userAuthModel.js");
var jwt = require("./jwt");


mongoose.connect("mongodb://localhost/test2");

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/register', function(req, res) {

    var user = req.body;
    //create a document for the new user

    var newUser = new UserModel({
        email: user.email,
        password: user.password
    });

    var payload = {
        iss: req.hostname,
        sub: user._id
    };

    var token = jwt.encode(payload, "shhh....");

    newUser.save(function(err) {
        if (err) {
            throw err;
        }

        UserModel.findOne({email: user.email}, function(err, foundUser){
            if(err){throw err;}
            console.log("After save (in database): ", foundUser);  
        });

        res.status(200).send({
            user: newUser.toJSON(),
            token: token
        });
    });

});

var server = app.listen(8181, function() {
    console.log("listening on port", server.address().port);
});
