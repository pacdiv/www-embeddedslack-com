var express = require('express')
var app = express()
var port = process.env.NODE_PORT ? process.env.NODE_PORT : 3000

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('*', function(req, res) {
  res.render('index')
})

app.listen(port, function () {
  console.log('App listening on port ' + port + '!')
})
