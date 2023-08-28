const custModel = require('../models/CustomerDBModel')

const addUser = async (req, res) => {
    const { CustomerName, CustomerId } = req.body;
    try {
        // const existingCust = await custModel.findOne({ CustomerName: CustomerName })
        // if (existingCust) {
        //     return res.status(400).json({ message: "User already exists" });
        // }
        const result = await custModel.create({
            CustomerName: CustomerName,
            CustomerId: CustomerId

        })
        res.status(201).json({ Customer: result });
    } catch (error) {
        console.log(error);
        res.staus(500)
    }
}

const getUsers = async (req, res) => {

    try {
        const data = await custModel.find();
        res.status(200).json({ Customers: data })
    } catch (error) {
        console.error('Error fetching Users:', error);
        res.status(500).json({ error: 'Failed to fetch Users' });
    }

}
const getSpecificUser = async (req, res) => {

    CustomerName = req.params.CustomerName

    try {
        const data = await custModel.findOne({ CustomerName: CustomerName });
        res.status(200).json({ Customer: data })
    } catch (error) {
        console.error('Error fetching Users:', error);
        res.status(500).json({ error: 'Failed to fetch Users' });
    }

}

const custTrial = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch' });
    }
}
module.exports = { addUser, getUsers, getSpecificUser, custTrial };