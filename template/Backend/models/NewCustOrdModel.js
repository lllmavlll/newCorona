const mongoose = require('mongoose');
const NewCustOrdSchema = mongoose.Schema({

    customerName: String,
    OrderNo: String,
    orderRefNo: String,
    placedOrderDate: String,
    requiredDate: String,
    customerOrderTouch: String,
    targetTouch: String,
    seal: String,
    qualitySeries: String,
    finalIname: String,
    saleName: String,
    itemStage: String,
    noOfDesign: String,
    QuantityPerDesign: String,
    itemQuantity: String,
    availQuantity: String,
    unitWT_UL: String,
    unitWT_LL: String,
    estimatedWeight: String,
    ScrewMake: String,
    screwSize: String,
    cuttingType: String,
    cuttingDesign: String,
    stoneBrand: String,
    polishType: String,
    dimmyColType: String,
    SILSURColouringType: String,
    surfaceFinish: String,
    Coat: String,
    cardType: String,
    cfPlan: String,
    stoneSettingType: String,
    remarks: String
}, { timestamps: true });

module.exports = mongoose.model("New_Customer_Order", NewCustOrdSchema);