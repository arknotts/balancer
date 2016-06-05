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
        
        var adminDb = db.admin();
        // List all the available databases
        adminDb.listDatabases(function(err, dbs) {
           // test.equal(null, err);
            //test.ok(dbs.databases.length > 0);
            console.log('num', dbs.databases.length);
            db.close();
        });
        
        //console.log(db);
        var entries = db.collection('entries');
        
        var entry = req.body;
        console.log(entry);
        
        collection.insert(entry, function(err, result) {
            assert.equal(null, err);
        });
        
        db.close();
        res.send("1");
    });
});

module.exports = router;
