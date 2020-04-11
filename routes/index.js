let express = require('express');
let router = module.exports = express.Router();

const importFile = require('./services/importFile');

router.use('/services/import', importFile);

/* GET api root. */
router.get('/', function (req, res) {
    res.send('Welcome');
});

