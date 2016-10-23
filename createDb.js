var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/chat';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    insertDocuments(db, function() {
        findDocuments(db,function () {
            db.close();
        })
    });
});

var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
};

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({a:1}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.dir(docs);
        callback(docs);
    });
};