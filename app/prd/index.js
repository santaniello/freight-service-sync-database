const connectPRDDB = require('./config/mongo');
const DefaultFreightTablePRD = require('./models/defaultFreightTable');
const CarrierPRD = require('./models/carrier');
const TokenPRD = require('./models/token');
const WeightPRD = require('./models/weight');
connectPRDDB();
var models = new Object();
models.DefaultFreightTablePRD = DefaultFreightTablePRD;
models.CarrierPRD = CarrierPRD;
models.TokenPRD   = TokenPRD;
models.WeightPRD  = WeightPRD;
module.exports= models;