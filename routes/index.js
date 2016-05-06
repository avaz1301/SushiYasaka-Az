var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('about', {
  	title: 'Sushi Yasaka',
  	header: 'Menu',
  	address: '251 W 72nd St, New York, NY, 10023, United States',
  	phone: '(212) 496-8460',
	email: 'sushiyasakanyc@gmail.com',
    googlemaps:'https://www.google.com/maps/place/Sushi+Yasaka/@40.7796266,-73.9856146,17z/data=!4m8!1m2!3m1!2sSushi+Yasaka!3m4!1s0x0000000000000000:0x6df52b9e7310c3c5!8m2!3d40.779627!4d-73.9834209'
    });

});

// router.get('/menu', function(req,res){
//     res.render('menu');
// });
router.get('/index.hjs', function(req,res){
    res.render('index', {
        title: 'Sushi Yasaka',
        header: 'Menu',
        address: '251 W 72nd St, New York, NY, 10023, United States',
        phone: '(212) 496-8460',
        googlemaps:'https://www.google.com/maps/place/Sushi+Yasaka/@40.7796266,-73.9856146,17z/data=!4m8!1m2!3m1!2sSushi+Yasaka!3m4!1s0x0000000000000000:0x6df52b9e7310c3c5!8m2!3d40.779627!4d-73.9834209',
        email: 'sushiyasakanyc@gmail.com'});
});

router.get('/about.hjs', function(req, res) {
    res.render('about', {
        title: 'Sushi Yasaka',
        header: 'Menu',
        address: '251 W 72nd St, New York, NY, 10023, United States',
        googlemaps:'https://www.google.com/maps/place/Sushi+Yasaka/@40.7796266,-73.9856146,17z/data=!4m8!1m2!3m1!2sSushi+Yasaka!3m4!1s0x0000000000000000:0x6df52b9e7310c3c5!8m2!3d40.779627!4d-73.9834209',
        phone: '(212) 496-8460',
        email: 'sushiyasakanyc@gmail.com'});
});

router.get('/gallery.html', function(req, res){
    res.render('gallery');
});

module.exports = router;
