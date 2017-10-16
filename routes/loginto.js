var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var db = require('../data/db');

router.post('/', (req, res, next) => {
  var email = req.body.email;
  console.log(email);
  let sql = 'SELECT password from users where email="' + email + '"';
  db.query(sql, (err, result) => {
    if(result.length > 0) {
      console.log(result[0].password);
      var plainpass = req.body.password;
      bcrypt.compare(plainpass, result[0].password, (err, matched) => {
        if(matched) {
          // res.json({
          //   state: 'success'
          // });
          res.redirect('/');
        } else {
          res.json({
            state: '密码错误'
          });
        }
      });
    } else {
      res.json({
        state: "用户不存在"
      });
    }
  });
  // var password = req.body.password;
  // bcrype.compare(password, hash, function(err, res) {
  // });
});

module.exports = router;