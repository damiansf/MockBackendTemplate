var express = require('express');
var app = express();
var fs = require("fs");
var req = require('sync-request');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Mock listening at http://%s:%s", host, port)

})

app.post('/DoStuff', function (req, res) {
   fs.readFile( __dirname + "/jsonFiles/" + "Sample.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

