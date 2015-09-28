var express = require('express');

var app = express();
// set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {
    var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
        res.render('about', { fortune: randomFortune });
});

// custom 404 page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.');
});

var fortunes = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5"
];