var express = require('express');
var router = express.Router();
var db = require('../data/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = 'SELECT * FROM state order by recordTime DESC';
  let query = db.query(sql, (err, result) => {
    res.render('list', { states: result });
  });
});

module.exports = router;
