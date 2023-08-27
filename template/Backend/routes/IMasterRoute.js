const express = require('express');
const { addItemMaster, getItemMasters } = require('../controllers/ItemMasterController');
const IMasterRouter = express.Router();

IMasterRouter.post('/createItem', addItemMaster)
IMasterRouter.get('/getItemMasters', getItemMasters)

module.exports = IMasterRouter;