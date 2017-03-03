var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


//get Homepage

router.get('/',function(req, res){
	res.render('index');
});

module.exports = router ;