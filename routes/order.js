var express = require('express');
var router = express.Router();
var db = require('../data/db');

router.get('/:orderby/:order', (req, res, next) => {
  var orderBy = req.params.orderby;
  var order = req.params.order;
  var sql;
  switch(orderBy) {
    case 'id':
    case  'stateImg':
      sql = `SELECT * FROM state ORDER BY ${orderBy} ${order}`;
      break;
    default:
      sql = `SELECT * FROM state ORDER BY CONVERT(${orderBy} USING GBK) ${order}`;
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