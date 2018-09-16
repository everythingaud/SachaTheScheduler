var express = require('express'); // Server

// Run bot
var bot = require('./bot.js');

// Creating Express server (default 3000 unless specified)
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});
