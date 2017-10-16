var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var db = require('../data/db');

router.post('/', (req, res, next) => {
  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  let sql = 'INSERT INTO users SET ?';
  let today = new Date();
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
      let user = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: hash,
        created: today,
        modified: today
      };
      let query = db.query(sql, user, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        if (result.affectedRows === 1) {
          res.json({
            state: 'success'
          });
        }
      });
    });
  });
  // Load hash from your password DB.
  // bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
  //   // res == true
  // });
  // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
  //   // res == false
  // });
});

module.exports = router;