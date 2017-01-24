var express = require('express');
var app = express();
 
app.use(express.static('public'));

// servera statiskt html sida
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.PORT;
//var port = 3000;

app.listen(port, function () {
  console.log('listening on ' + port);
});