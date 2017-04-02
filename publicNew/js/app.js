// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPOc84E3z5407CqNRAwhTDeSYH9VvfbQA",
    authDomain: "donatenow-c7865.firebaseapp.com",
    databaseURL: "https://donatenow-c7865.firebaseio.com",
    projectId: "donatenow-c7865",
    storageBucket: "donatenow-c7865.appspot.com",
    messagingSenderId: "1048148957326"
  };

  firebase.initializeApp(config);

  var app = angular.module("donealoApp", ["firebase"]);
  app.controller("MainCtrl", function($scope, $firebaseObject) {
    var ref = firebase.database().ref().child("donation");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "donation");
  });
