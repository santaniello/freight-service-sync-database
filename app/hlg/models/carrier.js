'use strict';

const Promise = require('bluebird');
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

// Schema
const CarrierSchema = new Schema({
  // o type tem que ser Mixed pois as transportadoras antigas estão com ID
  // com o tipo string (o nome da transportadora antes era salvo no campo ID).
  // O ID das novas transportadoras serão todas do tipo ObjectID
  _id: { type: Schema.Types.Mixed, required: true  },
  name: { type: String, required: true },
  sellerId: { type: Number, required: true },
  freightTable: { type: Schema.Types.ObjectId, ref: 'DefaultFreightTable' },
  deliveryType: { type: String, required: true, default: 'normal' },
  rules: [{ type: Schema.Types.ObjectId, ref: 'Rule' }],
  integration: {
    type: {
      name: { type: String, required: true },
      params: { type: Schema.Types.Mixed, default: {} }
    }
  },
  plugins: [{
    _id: false,
    name: { type: String, required: true },
    params: { type: Schema.Types.Mixed, default: {} }
  }],
  limits: {
    weight: Number,
    height: Number,
    width: Number,
    length: Number,
    dimensionsSum: Number
  },
  status: {
    validation: String,
    publication: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  tableUpdatedAt: Date,
  integrationFallbackUpdatedAt: Date
});

// Model
var CarrierHLG = mongoose.model('Carrier', CarrierSchema);
module.exports = CarrierHLG;
