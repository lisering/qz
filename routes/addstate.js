var express = require('express');
var router = express.Router();
var url = require('url');
var db = require('../data/db');

/* GET addstate page. */
router.get('/', function(req, res, next) {
  var areaname = url.parse(req.url, true).query.areaname;
  var statename = url.parse(req.url, true).query.statename;
  let sql = `SELECT * FROM state WHERE areaName='${areaname}' AND stateName='${statename}'`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.render('addstate', {state: result[0]});
  });
});

module.exports = router;
