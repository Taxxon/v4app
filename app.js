var express = require('express');
var app = express();
 
app.use(express.static('public'));

// servera statiskt html sida
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, function () {
  console.log('listening on ' + process.env.PORT);
});