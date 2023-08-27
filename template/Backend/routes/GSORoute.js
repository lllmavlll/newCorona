const express = require('express');
const { addGSOrder, GetAllGSOrders, GetSpecificGSOrder, getSubOrder } = require('../controllers/GSOController');

const GSORoute = express.Router()

GSORoute.post('/createGSOrder', addGSOrder)
GSORoute.get('/getAllGSOrders', GetAllGSOrders)
GSORoute.get('/GetSpecificGSOrder/:GSOrderNo', GetSpecificGSOrder)
GSORoute.get('/getSubOrder/:subOrderNo', getSubOrder)


module.exports = GSORoute;