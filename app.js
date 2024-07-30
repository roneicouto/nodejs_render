var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

//rotas
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/test', function (req, res) {
    res.render("test_view.ejs");
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080 EXPRESS!');
});