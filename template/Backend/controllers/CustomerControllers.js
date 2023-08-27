const custModel = require('../models/CustomerDBModel')

const addUser = async (req, res) => {
    const { CustomerName, CustomerPhoneNo } = req.body;
    try {
        // const existingCust = await custModel.findOne({ CustomerName: CustomerName })
        // if (existingCust) {
        //     return res.status(400).json({ message: "User already exists" });
        // }
        const result = await custModel.create({
            CustomerName: CustomerName,
            CustomerPhoneNo: CustomerPhoneNo

        })
        res.status(201).json({ Customer: result });
    } catch (error) {
        console.log(error);
        res.staus(500)
    }
}
module.exports = { addUser };