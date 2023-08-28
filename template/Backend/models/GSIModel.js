const mongoose = require('mongoose');
const GSISchema = mongoose.Schema({

    GSOOrderNo: String,
    GSIOrderNo: String,
    pureGoldValueQnty: String,
    pureGoldValueAmt: String,
    components: [{
        compName: String,
        compType: String,
        compQnty: String,
        compAmt: String
    }],
    totalAmt: String

}, { timestamps: true });
module.exports = mongoose.model("GoldSmith_Issuances", GSISchema);