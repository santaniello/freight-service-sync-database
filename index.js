const hlg = require('./app/hlg/index');
const prd = require('./app/prd/index');
const Promise = require('bluebird');

/** ------------------- PRD ------------------------------------ */

hlg.TokenHLG.remove({})
    .then(()=>{return prd.TokenPRD.find({})})
    .then(doc=>{
        hlg.TokenHLG.collection.insert(doc, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                console.log("Sync da collection tokens realizado com sucesso !");
            }
        });
    });


hlg.WeightHLG.remove({})
    .then(()=>{return prd.WeightPRD.find({})})
    .then(doc=>{
        hlg.WeightHLG.collection.insert(doc, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                console.log("Sync da collection weights realizado com sucesso !");
            }
        });
    });



hlg.DefaultFreightTableHLG.remove({})
    .then(()=>{return prd.DefaultFreightTablePRD.find({})})
    .then(doc=>{
        hlg.DefaultFreightTableHLG.collection.insert(doc, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                console.log("Sync da collection defaultfreighttables realizado com sucesso !");
            }
        });
    });

hlg.CarrierHLG.remove({})
    .then(()=>{return prd.CarrierPRD.find({})})
    .then(doc=>{
        hlg.CarrierHLG.collection.insert(doc, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                console.log("Sync da collection carriers realizado com sucesso !");
            }
        });
    });




