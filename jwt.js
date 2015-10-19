"use strict";
var crypto = require("crypto");

//we supply our own key (i.e. secret)
function sign(str, key){
	return crypto.createHmac("sha256", key).update(str).digest("base64");
}

function base64Encode(str){
	return new Buffer(str).toString("base64");
}


module.exports.encode = function(payload, secret){

	var algorithm = "HS256";

	var header = {
		type: "JWT",
		alg: algorithm
	};

	var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
	return jwt += sign(jwt, secret);
};
