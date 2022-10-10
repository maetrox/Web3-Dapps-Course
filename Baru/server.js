var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var morgan = require("morgan");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

app.get("/robots.txt", function (req, res) {
  res.type("text/plain");
  res.send("User-agent: *\nDisallow: /");
});
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// var listener = app.listen(3000, function () {
//   console.log("Listening on port " + listener.address().port); //Listening on port 3000
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});