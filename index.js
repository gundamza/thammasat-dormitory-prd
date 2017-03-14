var express = require('express')
var	account = require('./server/account')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/Test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.get('/userinfo/:id', account.UserInfobyId);
app.get('/userinfo/:firstname/:lastname', account.UserInfobyName);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
