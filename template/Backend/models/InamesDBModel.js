const mongoose = require('mongoose');
const InameSchema = mongoose.Schema({

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
    CoreProductName: {
        type: String,
        required: true
    },
    ModelNo: {
        type: String,
        required: true
    },
    Nstone: {
        type: Number,
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
    SKUNo: {
        type: String
    },
    FinalIname: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("testIname", InameSchema);