var express = require('express');
var dbConfig = require('../config/database');
var router = express.Router();
var assert = require('assert');

router.get('/', function(req, res) {
    //console.log(req.db.collection);
    req.db.connect(dbConfig.url, function(err, db) {

        var cursor = db.collection('entries').find({}, function(err, cursor) {
            
            var results = cursor.toArray();
            console.log(results);
            db.close();
            //console.log(results);
            
            //res.send(results);
        });
        
        
    });
});

router.post('/', function(req, res) {
    //console.log(req.db.collection);
    req.db.connect(dbConfig.url, function(err, db) {
        
        //TODO this is really odd how this is retrieved
        var entry = JSON.parse(Object.keys(req.body)[0]);
        entry.timestamp = new Date(entry.__timestamp);
        delete entry.__timestamp;
        
        db.collection('entries').insertOne(entry, function(err, result) {
            db.close();
            assert.equal(null, err);
            res.send("1");
        });
        
        
    });
});

module.exports = router;
