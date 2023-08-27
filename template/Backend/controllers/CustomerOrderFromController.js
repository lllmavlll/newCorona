const CustOrdModel = require('../models/CustomerOrderFormDBModel')
const newCustOrdModel = require('../models/NewCustOrdModel')
const addCustOrd = async (req, res) => {
    const { customerName, OrderNo, lineItem } = req.body;
    // if (!customerName || !OrderNo || !placedOrderDate || !requiredDate || !customerOrderTouch || !targetTouch || !seal || !qualitySeries || !category || !groupName || !subGroupName || !coreProductName || !modelNo || !noOfStones || !sizeofStone || !stoneColourPattern || !screwType || !saleName || !itemStage || !SKUNo || !noOfDesign || !QuantityPerDesign || !itemQuantity || !unitWT_UL || !unitWT_LL || !estimatedWeight || !ScrewMake || !screwSize || !cuttingType || !cuttingDesign || !stoneBrand || !polishType || !dimmyColType || !SILSURColouringType || !surfaceFinish || !Coat || !cardType || !cfPlan || !stoneSettingType || !remarks) {
    //     return res.status(422).json({ error: "please fill all the fields" })
    // }
    //category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo,
    try {
        // function orderNoCreation() {
        //     const result = '';
        //     for (let i = 1; i < 2; i++) {
        //         result = i
        //         console.log(result)
        //     }
        //     return result;
        // }

        // const orderno = orderNoCreation();

        const jewelries = await CustOrdModel.create({
            customerName, OrderNo, lineItem
        })
        res.status(201).json({ CustomerOrders: jewelries });
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}
//to get all orders
const getAllOrders = async (req, res) => {
    try {
        const jewelries = await CustOrdModel.find();
        res.json({ jewelrie: jewelries });
    } catch (error) {
        console.error('Error fetching Order Forms:', error);
        res.status(500).json({ error: 'Failed to fetch Order Forms' });
    }
}

const arrayOfInternalObjectIds = async (req, res) => {

    const OrderNo = req.params.OrderNo

    try {

        const data = await CustOrdModel.findOne({ OrderNo: OrderNo })
        let indexno = 0
        arrayOfObjIds = []
        const lineItemArray = data.lineItem
        lineItemArray.forEach((item) => {
            indexno = indexno + 1;
            arrayOfObjIds.push(item._id)
        });
        res.json({ NoOfIndexes: indexno, ids: arrayOfObjIds })
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}

const getAvailableQnty = async (req, res) => {
    const OrderNo = req.params.OrderNo
    const itemIndex = req.params.itemIndex
    try {
        const data = await CustOrdModel.findOne({ OrderNo: OrderNo })
        res.json({ availableQuantity: data.lineItem[itemIndex - 1].availQuantity })
    } catch (error) {
        console.error('Error ', error);
    }
}

const getAllLineItems = async (req, res) => {
    const OrderNo = req.params.OrderNo
    try {
        const data = await CustOrdModel.findOne({ OrderNo: OrderNo })
        res.json({ lineItems: data.lineItem })
    } catch (error) {
        console.error('Error ', error);
    }
}

const getSpecificLineItem = async (req, res) => {
    // const OrderNo = req.params.OrderNo
    // const index = req.params.index
    const orderRefNo = req.params.orderRefNo
    const itemIndex = req.params.itemIndex

    try {
        const data = await CustOrdModel.findOne({ "lineItem.orderRefNo": orderRefNo });
        res.json({ SpecificLineItem: data.lineItem[itemIndex - 1] });
        // res.json({ data })
    } catch (error) {
        console.error('Error ', error);
    }
}

const updateAvailQnty = async (req, res) => {
    // const OrderNo = req.params.OrderNo
    const orderRefNo = req.params.orderRefNo

    try {
        const data = await CustOrdModel.findOneAndUpdate(
            { 'lineItem.orderRefNo': orderRefNo },  // grab the specific lineitem, which will return the order
            { $set: { 'lineItem.$': req.body } },  //this will set the new value
            // { new: true }
        );
        // console.log(data);
        if (data) {
            res.json(data)
        } else {
            res.status(404).json({ error: 'null' })
        }
    } catch (error) {
        console.error('Error fetching Order Forms:', error);
        res.status(500).json({ error: 'Failed to fetch Order Forms' });
    }
}


// const custOrdTrial = async (req, res) => {
// const { availQuantity } = req.body
// const OrderNo = req.params.OrderNo
// const orderRefNo = req.params.orderRefNo
// const itemIndex = req.params.itemIndex
// const { availQuantity } = req.body
// const index = req.params.index
// const id = req.params.id
// try {
// const data = await LineItemModel.find().where('OrderNo').equals(OrderNo);
//  const RealResult = data.lineItem[1]
//  const realResult = data.lineItem[itemIndex].orderRefNo
//  const splittingOrderRefNo = orderRefNo.split('')
//  const lastinarray = splittingOrderRefNo.pop()
//  const index = lastinarray - 1
//  const test = data.lineItem[index]
//  test.availQuantity = availQuantity
//  res.json({ RealResult })
//  res.json({ value: test.availQuantity })
//  res.json({ message: "data updated successfully" })
//  const orderrefno = await orderno.lineItem.findOne({ orderRefNo: orderRefNo });
//  orderrefno.availQuantity = availQuantity
//  availQnty = data.lineItem[index].availQuantity;
//  const result = await CustOrdModel.updateOne({ availQnty: index })
//     } catch (error) {
//         console.error('Error fetching Order Forms:', error);
//         res.status(500).json({ error: 'Failed to fetch Order Forms' });
//     }
// }

const custOrdTrial = async (req, res) => {

}
////ALL THE APIS USING THE NEW CUSTORDSCHEMA
const newCustOrdCreation = async (req, res) => {
    try {
        const { customerName, OrderNo, orderRefNo, itemIndex, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, finalIname, saleName, itemStage, noOfDesign, QuantityPerDesign, itemQuantity, availQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardType, cfPlan, stoneSettingType, remarks } = req.body;
        const jewelries = await newCustOrdModel.create({
            customerName, OrderNo, orderRefNo, itemIndex, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, finalIname, saleName, itemStage, noOfDesign, QuantityPerDesign, itemQuantity, availQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardType, cfPlan, stoneSettingType, remarks
        })
        res.status(201).json({ "order created": jewelries });
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

const getAllCustOrdByOrders = async (req, res) => {

    const OrderNo = req.params.OrderNo
    try {
        const jewelries = await newCustOrdModel.find().where('OrderNo').equals(OrderNo)
        // const jewelries = await newCustOrdModel.find({ OrderNo })
        res.status(201).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}
const getAllCustOrdByorderRefNo = async (req, res) => {

    const orderRefNo = req.params.orderRefNo
    try {
        const jewelries = await newCustOrdModel.find().where('orderRefNo').equals(orderRefNo)
        // const jewelries = await newCustOrdModel.find({ OrderNo })
        res.status(201).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

const updateSpecificCustOrd = async (req, res) => {

    const orderRefNo = req.params.orderRefNo
    const { availQuantity } = req.body

    try {
        const jewelries = await newCustOrdModel.findOneAndUpdate({ orderRefNo }, { availQuantity }, { useFindAndModify: false })
        // const jewelries = await newCustOrdModel.find({ OrderNo })
        res.status(200).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

const GlobalGet = async (req, res) => {
    try {
        const jewelries = await newCustOrdModel.find();
        res.status(200).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}


module.exports = {
    addCustOrd,
    getAllOrders,
    arrayOfInternalObjectIds,
    getAvailableQnty,
    getAllLineItems,
    getSpecificLineItem,
    updateAvailQnty,
    custOrdTrial,
    newCustOrdCreation,
    getAllCustOrdByOrders,
    updateSpecificCustOrd,
    GlobalGet,
    getAllCustOrdByorderRefNo
};