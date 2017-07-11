var express         = require('express');
var path            = require('path'); 
var logger 			= require('morgan');
var bodyParser 		= require('body-parser');
var app 			= express();
var api 			= require('./api/api');

app.use(logger('dev')); // выводит все запросы со статусами в консоль
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, "dist")));
app.use('/api', api);

app.listen(2525, function(){
    console.log('Express server: listening on port 2525...');
});

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // render the error page
//   res.status(500);
//   res.render('error');
// });