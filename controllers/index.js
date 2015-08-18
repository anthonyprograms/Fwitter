var router = require('express').Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())

router.use(require('../auth'))
router.use(require('./api/posts'))
router.use('/api/sessions', require('./api/sessions'))
router.use('/api/users', require('./api/users'))
router.use(require('./static'))

module.exports = router
