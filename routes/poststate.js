var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
});
 
var upload = multer({ storage: storage }).single('stateimg');

var db = require('../data/db');

/* GET addstate page. */
router.post('/', function(req, res, next) {
  // let sql = 'INSERT INTO state VALUES()';
  // let query = db.query(sql, (err, result) => {
  //   res.render('addstate', { states: result });
  // });
  // res.send(req);
  upload(req, res, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('上传成功');
      let body = req.body;
      let file = req.file;
      let stateData = {
        areaName: body.areaname,
        stateName: body.statename,
        stateImg: file.path.replace('public/', ''),
        stateDescription: body.statedescription
      };
      let sql = 'INSERT INTO state SET ?';
      let query = db.query(sql, stateData, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        res.redirect('/');
      });
    }
  });
});

module.exports = router;
