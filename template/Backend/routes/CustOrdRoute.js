const express = require('express');
const { addCustOrd, getAllOrders,getIQ, GetOrderNo,UpdateIQ,getSpecificLineItem,testCFO} = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.post('/createCustomerOrdernew', testCFO)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/getIQ/:OrderNo', getIQ)
CustOrdFormRouter.get('/getOrderNo/:OrderNo', GetOrderNo)
CustOrdFormRouter.put('/updateItemQuantity/:OrderNo/:orderRefNo', UpdateIQ)
CustOrdFormRouter.get('/getSpecificLineItem/:orderRefNo/:itemIndex', getSpecificLineItem)


module.exports = CustOrdFormRouter;