var express =require("express")
var path = require("path")
var bodyParser = require("body-parser")
var exphbs  = require('express-handlebars');

var logger = require('morgan');

var router =require("./routes")
var app = express();

require("./config/connection")

var PORT = process.env.PORT || 3000;
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router)


app.use(function(req ,res, next){
    var err = new Error("not found")
    next(err)
})


app.use(function(err, req, res){
    res.status(err.status || 500).send(err.message || "server err")
})

app.listen(PORT)
console.log("web server listen on" + PORT)