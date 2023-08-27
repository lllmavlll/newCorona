const mongoose = require('mongoose');
const CustSchema = mongoose.Schema({
    CustomerName: {
        type: String
    },
    CustomerPhoneNo: {
        type: Number
    }
});

module.exports = mongoose.model('Customer', CustSchema);