const express = require('express');
const { addUser } = require('../controllers/CustomerControllers');
const custRouter = express.Router();

custRouter.post('/createUser', addUser);

module.exports = custRouter;