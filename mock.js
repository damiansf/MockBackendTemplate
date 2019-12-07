let express = require("express");
let app = express();
let fs = require("fs");
let bodyParser = require("body-parser");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let server = app.listen(8080, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Mock listening at http://%s:%s", host, port);
});

app.get("/DoStuff", function(req, res) {
  fs.readFile(__dirname + "/jsonFiles/" + "Sample.json", "utf8", function(
    err,
    data
  ) {
    if (err) {
      res.send("Error");
    } else {
      res.send(data);
    }
  });
});
