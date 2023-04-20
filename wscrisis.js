var express = require('express');
var cors = require('cors');
var app = express();
var fs = require("fs");
const sqlite3 = require('sqlite3').verbose();

/* Le estoy otorgando permiso para que llamen a este servicio desde la siguiente pagina*/
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

let db = new sqlite3.Database('./chinok.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinok database.');
});






db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
	
/*let db = new sqlite3.Database('./chinok.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinok database.');
});

app.get('/listCrisis', cors(corsOptions), function (req, res) {
   fs.readFile( __dirname + "/" + "crisis.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

*/
