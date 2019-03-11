const connectHLGDB = require('./config/mongo');
const DefaultFreightTableHLG = require('./models/defaultFreightTable');
const CarrierHLG = require('./models/carrier');
const TokenHLG = require('./models/token');
const WeightHLG = require('./models/weight');
connectHLGDB();
var models = new Object();
models.DefaultFreightTableHLG = DefaultFreightTableHLG;
models.CarrierHLG = CarrierHLG;
models.TokenHLG   = TokenHLG;
models.WeightHLG  = WeightHLG;
module.exports= models;

