'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('bluebird');
const ObjectId = require('mongoose').Types.ObjectId;

const DefaultFreightTableSchema = new Schema({
  _id: { type: Schema.Types.Mixed, required: false},
  name: { type: String, required: false},
  createdAt: { type: Date, default: Date.now },
  code: { type: Number, required: false },
  updatedAt: Date
});

const DefaultFreightTablePRD = mongoose.model('DefaultFreightTable', DefaultFreightTableSchema);

module.exports = DefaultFreightTablePRD;