var express = require('express'); 
var firebase = require('firebase'); 
var admin = require("firebase-admin");

var app = express(); 
var serviceAccount = require("../Resources/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://donatenow-c7865.firebaseio.com"
});

app.get('/', function(request, response) {
	response.send("Hello World")
}); 

// Register
// Login
// CreateCampaign
// Donate
// UpdateProfile
// Stripe

// app.get('/orgs', function(request, response) {
// 	var userRef = admin.database().ref('/organization');
//   	userRef.once('value').then(function(snapshot) {
//     	response.send(snapshot.val().name);
//     }); 
// }); 


app.listen(3000); 