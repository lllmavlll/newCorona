const mongoose = require('mongoose');
const GSISchema = mongoose.Schema({

    GSIOrderNo: String,
    pureGoldValueQnty: String,
    pureGoldValueAmt: String,
    components: [{
        compType: String,
        compName: String,
        compQnty: String,
        compAmt:String
    }],
    totalAmt:String

}, { timestamps: true });
module.exports = mongoose.model("GoldSmith_Issuances", GSISchema);