const express = require('express');
const { addUser, getUsers, custTrial, getSpecificUser } = require('../controllers/CustomerControllers');
const custRouter = express.Router();

custRouter.post('/createUser', addUser);
custRouter.get('/getUsers', getUsers);
custRouter.get('/getSpecificUser/:CustomerName', getSpecificUser);
custRouter.get('/custTrial', custTrial);

module.exports = custRouter;