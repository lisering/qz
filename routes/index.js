var express = require('express');
var router = express.Router();
var db = require('../data/db');
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = 'SELECT * FROM state order by recordTime DESC';
  let query = db.query(sql, (err, result) => {
    let asql = 'SELECT areaName, COUNT(*) AS count FROM state GROUP BY areaName HAVING count > 1';
    let aquery = db.query(asql, (aerr, aresult) => {
      if (aerr) {
        console.log(aerr);
        return;
      }
      res.render('index', { states: result, areas: aresult });
    });
  });
});

module.exports = router;
