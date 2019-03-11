'use strict';

const Promise = require('bluebird');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

// Schema
const TokenSchema = new Schema({
  _id: { type: Schema.Types.Mixed, required: false},
  active: { type: Boolean, required: true, default: false },
  enabled: { type: Boolean, required: true, default: false },
  sellerId: { type: Number, required: true },
  carriers: [{ type: Schema.Types.Mixed, ref: 'Carrier'}],
  limits: {
    zipcodes: [{
      start: { type: Number, required: true },
      end: { type: Number, required: true },
      description: String
    }]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

// Model
var TokenPRD = mongoose.model('Token', TokenSchema);

module.exports = TokenPRD;
