'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  name: {
    type: String
  },
  ticker: {
    type: String
  },
  description: {
    type: String
  },
  created: { 
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('Data', DataSchema);
