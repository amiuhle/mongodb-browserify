var module;

module = require('./commands/base_command');
exports.BaseCommand = module.BaseCommand;
module = require('./admin');
exports.Admin = module.Admin;
module = require('./collection');
exports.Collection = module.Collection;
module = require('./connection/read_preference');
exports.ReadPreference = module.ReadPreference;
module = require('./connection/connection');
exports.Connection = module.Connection;
module = require('./connection/server');
exports.Server = module.Server;
module = require('./connection/mongos');
exports.Mongos = module.Mongos;
module = require('./connection/repl_set');
exports.ReplSet = module.ReplSet;
exports.ReplSetServers = module.ReplSetServers;
module = require('./mongo_client');
exports.MongoClient = module.MongoClient;
module = require('./cursor');
exports.Cursor = module.Cursor;
module = require('./db');
exports.connect = module.connect;
exports.Db = module.Db;
module = require('./mongo_client');
exports.MongoClient = module.MongoClient;
// module = require('./gridfs/grid');
// exports.Grid = module.Grid;
// module = require('./gridfs/chunk');
// exports.Chunk = module.Chunk;
// module = require('./gridfs/gridstore');
// exports.GridStore = module.GridStore;


// backwards compat
exports.ReplSetServers = exports.ReplSet;
// Add BSON Classes
exports.Binary = require('bson').Binary;
exports.Code = require('bson').Code;
exports.DBRef = require('bson').DBRef;
exports.Double = require('bson').Double;
exports.Long = require('bson').Long;
exports.MinKey = require('bson').MinKey;
exports.MaxKey = require('bson').MaxKey;
exports.ObjectID = require('bson').ObjectID;
exports.Symbol = require('bson').Symbol;
exports.Timestamp = require('bson').Timestamp;  
// Add BSON Parser
exports.BSON = require('bson').BSON;

// Get the Db object
var Db = require('./db').Db;
// Set up the connect function
var connect = Db.connect;
var obj = connect;
// Map all values to the exports value
for(var name in exports) {
  obj[name] = exports[name];
}

// Add the pure and native backward compatible functions
exports.pure = exports.native = function() {
  return obj;
}

// Map all values to the exports value
for(var name in exports) {
  connect[name] = exports[name];
}

// Set our exports to be the connect function
module.exports = connect;