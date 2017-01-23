var express = require('express');
var app = express();
 
app.use(express.static('public'));

// servera statiskt html sida
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/cordova', function (req, res) {
  res.sendFile(__dirname + '/cordova.html');
});

app.get('/cam', function (req, res) {
  res.sendFile(__dirname + '/public/cam.html');
});

app.listen(3000, function () {
  console.log('listening on *:3000');
});