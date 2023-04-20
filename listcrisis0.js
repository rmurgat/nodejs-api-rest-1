var express = require('express');
var cors = require('cors');
var app = express();
var fs = require("fs");

/**
Este programa lo construi para probar un servicio de angular que llama a un listado. 
Aquí el listado se encuentra en un archivo de json llamado [crisis.json]. También he
creado un segundo archivo [crisis2.json].
**/

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/listCrisis', cors(corsOptions), function (req, res) {
   fs.readFile( __dirname + "/" + "crisis.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/listCrisis2', cors(corsOptions), function (req, res) {
   fs.readFile( __dirname + "/" + "crisis2.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
