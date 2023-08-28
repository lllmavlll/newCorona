const express = require('express');
const { createGSI, getGSI, getSpecificGSI } = require('../controllers/GSIController');

const GSIRoute = express.Router()

GSIRoute.post('/createGSI', createGSI)
GSIRoute.get('/getGSI', getGSI)
GSIRoute.get('/getSpecificGSI/:GSIOrderNo', getSpecificGSI)

module.exports = GSIRoute;