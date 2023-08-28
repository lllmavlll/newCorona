const mongoose = require('mongoose');
const CustSchema = mongoose.Schema({
    CustomerName: {
        type: String
    },
    CustomerId: {
        type: String
    }
});

module.exports = mongoose.model('Customer', CustSchema);