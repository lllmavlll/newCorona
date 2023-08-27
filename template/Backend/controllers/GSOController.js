const GSOModel = require('../models/GSOModel')

const addGSOrder = async (req, res) => {
    const { OrderNo, GSOrderNo, subOrderNo, ItemName, availQuantity, allocdQty, allocdWt, GSName } = req.body
    try {
        const result = await GSOModel.create({
            OrderNo, GSOrderNo, subOrderNo, ItemName, availQuantity, allocdQty, allocdWt, GSName
        })
        res.status(201).json({ "GSOrder Created": result });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const GetAllGSOrders = async (req, res) => {
    try {
        const orders = await GSOModel.find();
        res.status(200).json({ orders });
    } catch (error) {
        console.error('Error fetching Goldsmith Orders:', error);
        res.status(500).json({ error: 'Failed to fetch Goldsmith Orders' });
    }
}

const GetSpecificGSOrder = async (req, res) => {

    const GSOrderNo = req.params.GSOrderNo
    try {
        const data = await GSOModel.find().where('GSOrderNo').equals(GSOrderNo);
        res.status(200).json({ GSOrders: data });
    } catch (error) {
        console.error('Error fetching Goldsmith Orders:', error);
        res.status(500).json({ error: 'Failed to fetch Goldsmith Orders' });
    }
}

const getSubOrder = async (req, res) => {

    const subOrderNo = req.params.subOrderNo
    try {
        const data = await GSOModel.find().where('subOrderNo').equals(subOrderNo);
        res.status(200).json({ GSOrders: data });
    } catch (error) {
        console.error('Error fetching Goldsmith Orders:', error);
        res.status(500).json({ error: 'Failed to fetch Goldsmith Orders' });
    }

}

module.exports = { addGSOrder, GetAllGSOrders, GetSpecificGSOrder, getSubOrder }