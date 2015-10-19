"use strict";

var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var UserAuthSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: "userAuth"
});

UserAuthSchema.methods.toJSON = function() {
    var user = this.toObject();
    delete user.password;
    return user;
};



UserAuthSchema.pre("save", function(next) {
    var user = this;

    if (!user.isModified("password")) { return next();}

    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            next(err);
        }
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {
                next(err);
            }
            user.password = hash;
            console.log("Before save: " + user);
            next();
        });
    });

    //Don't put next here! It will immediately move the user to the next step without hashing to password!
    //next()
});


module.exports = mongoose.model("UserAuth", UserAuthSchema);
