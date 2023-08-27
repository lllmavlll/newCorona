const mongoose = require('mongoose');
const InameSchema = mongoose.Schema({

    Category: {
        type: String,
    },
    Group: {
        type: String,
    },
    SubGroup: {
        type: String,
    },
    CoreProductName: {
        type: String,
    },
    ModelNo: {
        type: String,
    },
    Nstone: {
        type: String,
    },
    Size: {
        type: String,
    },
    StoneColourPattern: {
        type: String,
    },
    ScrewType: {
        type: String,
    },
    SKUNo: {},
    FinalIname: {
        type: String
    },
    image:{
        type:String
    }
}, { timestamps: true });

module.exports = mongoose.model("testIname", InameSchema);