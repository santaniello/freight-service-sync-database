'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('bluebird');
const ObjectId = require('mongoose').Types.ObjectId;

const DefaultFreightTableSchema = new Schema({
  _id: { type: Schema.Types.Mixed, required: false},
  name: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  code: { type: Number, required: false },
  updatedAt: Date
});

const DefaultFreightTableHLG = mongoose.model('DefaultFreightTable', DefaultFreightTableSchema);

module.exports = DefaultFreightTableHLG;