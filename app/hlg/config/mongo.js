const mongoose = require('mongoose');

module.exports = function() {
    //mongoose.connect(`mongodb://mp-vvfrete-admin:mktplace%40123@10.128.135.66:27017,10.128.135.67:27017,10.128.135.68:27017/freight-service_development?replicaSet=rsMpVvFreteHLG`);
    mongoose.connect(`mongodb://localhost:27017/freight-service_development`);
}