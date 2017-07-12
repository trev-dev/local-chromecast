var express = require('express');
var routes = require('./routes');
var opn = require('opn');

var app = express();
app.set('view engine', 'pug');
app.use('/static', express.static(`${__dirname}/public`));
app.use('/vids', express.static(`${__dirname}/vids`));

routes(app);

app.listen(1337, function(){

    opn('http://localhost:1337');
    console.log('App running. Open http://localhost:1337');

});