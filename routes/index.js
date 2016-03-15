var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Sushi Yasaka',
  	header: 'Menu',
  	address: '226 West 72nd Street, New York ,11021',
  	phone: "Phone : (212) 496-8460" });
});

module.exports = router;
