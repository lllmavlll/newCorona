const express = require('express');
const { addCustOrd, getAllOrders, arrayOfInternalObjectIds, custOrdTrial, getAllLineItems, updateAvailQnty, getAvailableQnty, getSpecificLineItem, newCustOrdCreation, updateSpecificCustOrd, GlobalGet, getAllCustOrdByOrders, getAllCustOrdByorderRefNo } = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/arrayOfInternalObjectIds/:OrderNo/', arrayOfInternalObjectIds)
CustOrdFormRouter.get('/getAvailableQnty/:OrderNo/:itemIndex', getAvailableQnty)
CustOrdFormRouter.get('/getAllLineItems/:OrderNo', getAllLineItems)
CustOrdFormRouter.get('/getSpecificLineItem/:orderRefNo/:itemIndex', getSpecificLineItem)
CustOrdFormRouter.patch('/updateAvailQnty/:orderRefNo', updateAvailQnty)
CustOrdFormRouter.get('/custOrdTrial/:OrderNo', custOrdTrial)
CustOrdFormRouter.post('/newCustOrdModel/newCustOrdTrial', newCustOrdCreation)
CustOrdFormRouter.get('/newCustOrdModel/getAllOrders/:OrderNo', getAllCustOrdByOrders)
CustOrdFormRouter.put('/newCustOrdModel/updateSpecificCustOrd/:orderRefNo', updateSpecificCustOrd)
CustOrdFormRouter.get('/newCustOrdModel/GlobalGet', GlobalGet)
CustOrdFormRouter.get('/newCustOrdModel/getAllCustOrdByorderRefNo/:orderRefNo', getAllCustOrdByorderRefNo)


//OrderNo
//orderRefNo
//itemIndex
module.exports = CustOrdFormRouter;