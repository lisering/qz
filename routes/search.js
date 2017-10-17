var express = require('express');
var router = express.Router();
var db = require('../data/db');
var url = require('url');

router.get('/', function(req, res, next) {
  var areaname = url.parse(req.url, true).query.areaname;
  var statename = url.parse(req.url, true).query.statename || '';
  let sql;
  if (areaname === '所有大区' && statename.length === 0) {
    sql = 'SELECT * FROM state ORDER BY recordTime DESC';
  }
  if (areaname !== '所有大区' && statename.length === 0) {
    sql = 'SELECT * FROM state WHERE areaName="' + areaname + '"' + ' ORDER BY recordTime DESC';
  }
  if (areaname === '所有大区' && statename.length > 0) {
    sql = 'SELECT * FROM state WHERE stateName LIKE "%' + statename + '%" ORDER BY recordTime DESC';
  }
  if (areaname !== '所有大区' && statename.length > 0) {
    sql = 'SELECT * FROM state WHERE areaName="' + areaname + '" AND stateName LIKE "%' + statename + '%" ORDER BY recordTime DESC';
  }
  if (sql) {
     let query = db.query(sql, (err, result) => {
       if (err) {
         console.log(err);
         res.json({
           states: 'failure'
         });
       }
       console.log(result);
       return res.json(result);
     });
  }
});

module.exports = router;
