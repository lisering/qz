var express = require('express');
var router = express.Router();

/* GET addstate page. */
router.get('/', function(req, res, next) {
  res.render('addstate');
});

module.exports = router;
