var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/static'))
app.use(require('./controllers/api/posts'))

app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

app.listen(3000, function () {
    console.log('Server listening on', 3000);
});
