var express = require('express');
var router = express.Router();
var db = require('../data/db');
var url = require('url');

// 'http://spp.sunits.com/cas',
// 'http://hrm.sunits.com'

router.get('/:statename', function(req, res, next) {
  var openid = url.parse(req.url, true).query.openid;
  var stateStr = req.params.statename;
  if (openid) {
    let vsql = `SELECT * FROM vote WHERE stateName='${stateStr}' AND openid='${openid}'`;
    console.log(vsql);
    let vquery = db.query(vsql, (err, hasvoted) => {
      if (err) {
        console.log(err);
      }
      console.log(hasvoted);
      if(hasvoted.length === 0) {
        let insql = 'INSERT INTO vote SET ?';
        let inquery = db.query(insql, {openid: openid, stateName: req.params.statename}, (err, result) => {
          if (err) {
            console.log(err);
          }
          let svsql = `UPDATE state SET stateVotes=stateVotes+1 WHERE stateName='${stateStr}'`;
          let svquery = db.query(svsql, (err, result) => {
            if (err) {
              console.log(err);
            }
            res.json({
              state: 'success'
            });
          });
        });
      } else {
        res.json({
          state: '您已经投过“' + stateStr + '”的票了'
        });
      }
    });
    // if (req.params.statename) {
    //   let sql = `UPDATE state SET stateVotes=stateVotes+1 WHERE stateName='${req.params.statename}'`;
    //   let query = db.query(sql, (err, result) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     if (result.affectedRows === 1) {
    //       res.json({
    //         state: 'success'
    //       });
    //     }
    //   });
    // }
  }
});

module.exports = router;
