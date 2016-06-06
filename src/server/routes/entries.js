var express = require('express');
var dbConfig = require('../config/database');
var router = express.Router();
var assert = require('assert');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
    req.db.connect(dbConfig.url, function(err, db) {
        var entry = req.body;
        console.log(entry);
        db.collection('entries').insertOne(entry);
        // Use the admin database for the operation
        // var adminDb = db.admin();
        // console.log(dbConfig.url);
        // List all the available databases
        // adminDb.listDatabases(function(err, dbs) {
        //     console.log(err);
        //     console.log(dbs.databases);
        //     //test.equal(null, err);
        //     //test.ok(dbs.databases.length > 0);
        //     db.close();
        // });
        
        // var balancerDb = db.balancer();
        // console.log(balancerDb);
        
        // //console.log(db);
        // var entries = balancerDb.collection('entries');
        // console.log(entries);
        
        
        //console.log(entry);
        
        // collection.insert(entry, function(err, result) {
        //     assert.equal(null, err);
        // });
        
        db.close();
        res.send("1");
    });
});

module.exports = router;
