$(document).ready(function() {
	// body...
	sed 's/^.*$/&\\/g;' header.html > escapedHeader.html

	document.write('\
		<!DOCTYPE html>\
		<html lang="en">\
	  	<head class="red-text">\
	  	<meta charset="utf-8">\
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
	    <meta name="viewport" content="width=device-width, initial-scale=1">\
	    <link rel='stylesheet' href='/stylesheets/style.css' /> \
	    <link rel='stylesheet' href='/fonts/Raleway/stylesheet.css' />\
	    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">\
	    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\
	    <link href="http://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\
	  	</head>\
	  \
	');

});
