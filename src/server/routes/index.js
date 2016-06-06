var express = require('express');
var dbConfig = require('../config/database');
var router = express.Router();

var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express23456' });
  //res.json(quotes);
  //res.("worked");

  // // Use connect method to connect to the Server
  // req.db.connect(dbConfig.url, function(err, db) {
  //   res.send("Connected correctly to server");
  //   db.close();
  // });
});

module.exports = router;
