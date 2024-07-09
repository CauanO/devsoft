const express = require('express')
const app = express()
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser')
app.use(express.static('./public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(8081, function(req, res) {
    console.log("Servidor ON")
})