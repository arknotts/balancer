var express = require('express');
var dbConfig = require('../config/database');
var router = express.Router();
var assert = require('assert');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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

        
        // var balancerDb = db.balancer();
        // console.log(balancerDb);
        
        // //console.log(db);
        // var entries = balancerDb.collection('entries');
        // console.log(entries);
        
        
        //console.log(entry);
        
        // collection.insert(entry, function(err, result) {
        //     assert.equal(null, err);
        // });
        
        
    });
});

module.exports = router;
