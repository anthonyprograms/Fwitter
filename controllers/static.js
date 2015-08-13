var router = require('express').Router()
var path = require('path')

router.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, '../layouts', 'posts.html'))
    res.sendFile('posts.html', { root: path.join(__dirname, '../layouts') })
})

module.exports = router
