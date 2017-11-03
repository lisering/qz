var express = require('express');
var router = express.Router();
var models = require('../models');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../front/src/assets/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
});

var upload = multer({ storage: storage }).single('stateimg');

/* GET states */
router.get('/states', function(req, res, next) {
  models.state.findAll().then(result => {
    let states = [];
    let area = new Set();
    result.forEach((i, v) => {
      area.add(i.areaName);
      if (i.stateImg) {
        states.push(i);
      }
    });
    res.json({allstates: result, imgstates: states, areas: [...area]});
  });
});

/* upload state img */
router.post('/upload', function(req, res, next) {
  upload(req, res, function(err) {
    if (err) {
      throw err;
    }
    if (req.file) {
      models.state.update({
        stateImg: req.file.path.replace('/front/src', '').replace(/\\/g, '/')
      },{
        where: {
          id: req.body.id
        }
      }).then((result) => {
        console.log(result);
        res.json({message: '图片上传成功！'});
      });
    }
  });
});


module.exports = router;
