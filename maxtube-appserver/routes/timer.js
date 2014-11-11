var express = require('express');
var router = express.Router();

/* GET server time listing. */
router.get('/', function(req, res) {
  res.write(Date.now().toString());
  res.end();
});

module.exports = router;
