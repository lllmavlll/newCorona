const express = require('express');
const { addIname, getIname, getViaFinalIname, ArrayOfGroupNames, iNameTrial } = require('../controllers/InameController');
const iNameRouter = express.Router();

iNameRouter.post('/createIname', addIname)
iNameRouter.get('/getIname', getIname)
iNameRouter.get('/getViaFinalIname/:FinalIname', getViaFinalIname)
iNameRouter.get('/groupnames', ArrayOfGroupNames)
iNameRouter.get('/iNameTrial', iNameTrial)

module.exports = iNameRouter;