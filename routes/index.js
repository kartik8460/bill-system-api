var express = require('express');
var router = express.Router();
const v1routes = require('./v1/index')
/* GET home page. */
router.use('/v1', v1routes)

module.exports = router;
