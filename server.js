var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.send('app works')
})


app.listen(3000)
