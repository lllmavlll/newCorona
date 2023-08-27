const mongoose = require('mongoose');
const GSOSchema = mongoose.Schema({

    OrderNo: String,
    GSOrderNo: String,
    subOrderNo: String,
    ItemName: String,
    availQuantity: String,
    allocdQty: String,
    allocdWt: String,
    GSName: String,
}, { timestamps: true });
module.exports = mongoose.model("GoldSmith_Order", GSOSchema);