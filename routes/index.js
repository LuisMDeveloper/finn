var express = require('express');
var router = express.Router();

/* GET api root. */
router.get('/', function(req, res) {
  res.send('Welcome');
});

module.exports = router;
