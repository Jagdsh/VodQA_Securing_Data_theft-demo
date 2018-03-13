var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': "*"})
  fs.readFile('./views/index.html', null, function(error, data){
  	if (error){
  		res.writeHead(404);
  		res.write('File not found');
  	} else {
  		res.write(data)
  	}
  	res.end();
  });
});

module.exports = router;
