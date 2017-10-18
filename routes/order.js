var express = require('express');
var router = express.Router();
var db = require('../data/db');

router.get('/:orderby/:order', (req, res, next) => {
  var orderBy = req.params.orderby;
  var order = req.params.order;
  let sql = `SELECT * FROM state ORDER BY CONVERT(${orderBy} USING GBK) ${order}`;
  if (orderBy = 'stateImg') {
    sql = `SELECT * FROM state ORDER BY ${orderBy} ${order}`;
  }
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(sql);
    res.json(result);
  });
});

module.exports = router;