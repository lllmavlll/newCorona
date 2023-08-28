const GSIModel = require('../models/GSIModel')

const createGSI = async (req, res) => {
    const { GSIOrderNo, pureGoldValueQnty, pureGoldValueAmt, components } = req.body
    // if (!GSIOrderNo || !pureGoldValueQnty || !pureGoldValueAmt || !components) {
    //     return res.status(422).json({ error: "please fill all the fields" })
    // }
    try {
        const data = await GSIModel.create({
            GSIOrderNo, pureGoldValueQnty, pureGoldValueAmt, components, totalAmt
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
        res.status(200).json({ GSIs: data });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const getSpecificGSI = async (req, res) => {
    GSIOrderNo = req.params.GSIOrderNo
    try {
        const data = await GSIModel.findOne({ GSIOrderNo: GSIOrderNo });
        res.status(200).json({ GSIs: data });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = { createGSI, getGSI, getSpecificGSI }