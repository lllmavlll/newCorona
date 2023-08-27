const mongoose = require('mongoose');
const ItemMasterSchema = mongoose.Schema({

    CoreProductName: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Group: {
        type: String,
        required: true
    },
    SubGroup: {
        type: String,
        required: true
    },
    SaleName: {
        type: String,
        required: true
    },
    StickerName: {
        type: String,
        required: true
    },
    CommonName: {
        type: String,
        required: true
    },
    AppName: {
        type: String,
        required: true
    },
    Nstone: {
        type: String,
        required: true
    },
    ScrewTypesApplicable: {
        type: String,
        required: true
    },
    DefaultCType: {
        type: String,
        required: true
    },
    StoneSchemeNoApplicable: {
        type: String,
        required: true
    },
    DefaultStoneBrand: {
        type: String,
        required: true
    },
    DefaultStoneShape: {
        type: String,
        required: true
    },
    DefaultStoneColour: {
        type: String,
        required: true
    },
    DefaultStoneGirdle: {
        type: String,
        required: true
    },
    DefaultFinalColour: {
        type: String,
        required: true
    },
    UnitWeightRangeUL: {
        type: String,
        required: true
    },
    UnitWeightRangeLL: {
        type: String,
        required: true
    },
    DefaultStoneSettingType: {
        type: String,
        required: true
    },
    DefaultCuttingPattern: {
        type: String,
        required: true
    },
    DefaultSurfaceFinish: {
        type: String,
        required: true
    },
    NoOfDesigns: {
        type: String,
        required: true
    },
    DyeNo: {
        type: String,
        required: true
    },

    DefaultQualitySeries: {
        type: String,
        required: true
    },
    DefaultScrewSize: {
        type: String,
        required: true
    },
    MakingType: {
        type: String,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model("Item_Master", ItemMasterSchema);