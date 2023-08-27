const GSIModel = require('../models/GSIModel')

const createGSI = async (req, res) => {
    const { GSIOrderNo, pureGoldValueQnty, pureGoldValueAmt, components } = req.body
    try {
        const data = await GSIModel.create({
            GSIOrderNo, pureGoldValueQnty, pureGoldValueAmt, components
        })
        res.status(201).json({ GSI: data });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const getGSI = async (req, res) => {
    try {
        const data = await GSIModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = { createGSI, getGSI }