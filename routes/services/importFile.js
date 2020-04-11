let express = require('express');
let multer = require('multer');

let router = module.exports = express.Router();
let upload = multer();

/* POST upload file to import. */
router.post('/upload', upload.single('file'), function (req, res) {
    res.json({
        file: req.file
    });
});