const inameModel = require('../models/InamesDBModel')
const multer = require('multer')


const addIname = async (req, res) => {
    const { Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, SKUNo, image} = req.body;
    try {
       
        const values = [Category, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType,]
        const FinalIname = values.join('_');

        // const existingItem = await inameModel.findOne({ FinalIname:FinalIname})
        // if (existingItem) {
        //     return res.status(400).json({ message: "Item already exists" });
        // }
        


        const result = new inameModel({
            Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, SKUNo, FinalIname,image
        })
        await result.save();
        res.status(201).json({ Iname: result });

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const getIname = async (req, res) => {

    try {
        const jewelrie = await inameModel.find()
        res.status(200).json({ jewelrie })
    } catch (error) {
        console.error('Error fetching IName:', error);
        res.status(500).json({ error: 'Failed to fetch IName' });
    }
}

const getGname = async (req, res) => {

    // const OrderNo = req.params.OrderNo

    try {
        const data = await inameModel.find()
        const arrayOfGroupNames = []
        data.forEach((item) => {
            // console.log(JSON.stringify(item))
            arrayOfGroupNames.push(item.Group)
        });
        res.json({ GroupNames: arrayOfGroupNames });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}


module.exports = { addIname, getIname, getGname,};