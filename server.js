var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

var app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', __dirname + '/public')

app.get('/', function(request, response){

    response.render('home.ejs')

})

app.post('/', function(request, response){
  response.render('results.ejs')
})


var port = process.env.PORT || 8080


app.listen(port, function(){

  console.log('App is running on port ' + port)

})
