var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {
  models.state.findAll().then(states => {
    res.render('index', { states: states });
  });
});

module.exports = router;
