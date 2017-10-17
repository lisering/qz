var express = require('express');
var router = express.Router();
var db = require('../data/db');

router.get('/', (req, res, next) => {
  res.send('order');
});

module.exports = router;