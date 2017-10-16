var express = require('express');
var router = express.Router();
var db = require('../data/db');

// 'http://spp.sunits.com/cas',
// 'http://hrm.sunits.com'

router.get('/:statename', function(req, res, next) {
  if (req.params.statename) {
    let sql = `UPDATE state SET stateVotes=stateVotes+1 WHERE stateName='${req.params.statename}'`;
    let query = db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.affectedRows === 1) {
        res.json({
          state: 'success'
        });
      }
    });
  }
});

module.exports = router;
