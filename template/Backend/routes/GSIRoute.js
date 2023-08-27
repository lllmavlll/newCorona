const express = require('express');
const { createGSI, getGSI } = require('../controllers/GSIController');

const GSIRoute = express.Router()

GSIRoute.post('/createGSI', createGSI)
GSIRoute.get('/getGSI', getGSI)

module.exports = GSIRoute;