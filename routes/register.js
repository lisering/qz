var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('register', {register: 'register'});
});

module.exports = router;