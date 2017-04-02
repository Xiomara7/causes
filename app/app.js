var express = require('express');
var firebase = require('firebase');
var admin = require("firebase-admin");
var parser = require('body-parser')
var stripe = require('stripe')('sk_test_4FkZmWx3xMJrOablJBUcqqlG');
var serviceAccount = require("../Resources/serviceAccount.json");
var nodemailer = require('nodemailer');
var app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://donatenow-c7865.firebaseio.com"
});

app.use(parser.json());
app.use(parser.urlencoded({
	extended: true
}));


app.use(express.static('publicNew'));

app.post('/api/', function(req, res) {
	res.send('HOME');
});

// Stripe
app.post('/api/donate', function(req, res) {
	if(req.body.cardID && req.body.amount){
		getSource(cardID, amount);
	}
});

app.post('/api/charge', function(req, res) {
  //var amount = req.body.donation.quantity;
  console.log('req' + req.body.token); 
  console.log('req' + req.body.stripeToken); 

  // stripe.charges.create({
  //   source: token,
  //   currency: 'usd',
  //   amount: amount
  // },

  // function(err, charge) {
  //   if (err) {
  //     res.send(500, err);
  //   } else {
  //     res.send(204);
  //   }
  // });
});

// Email
app.post('/email', function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	var from = req.body.doneeEmail;
	var to = req.body.orgEmail;
	var subject = req.body.subject;

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
	});

	// setup email data with unicode symbols
	let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
	});
});

var port = process.env.PORT || 3000; 
app.listen(port);
