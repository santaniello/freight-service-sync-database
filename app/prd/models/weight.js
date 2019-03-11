'use strict';

const Promise = require('bluebird');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const WeightSchema = new Schema({
  _id: { type: Schema.Types.Mixed, required: false},
  name: String,
  sellerId: { type: Number, required: true },
  carrier: { type: Schema.Types.Mixed, required: true, ref: 'Carrier'},
  weights: [{
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    price: { type: Number, required: true },
    rules: [{ type: Schema.Types.ObjectId, ref: 'Rule' }]
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

// Model
var WeightPRD = mongoose.model('Weight', WeightSchema);

module.exports = WeightPRD;
