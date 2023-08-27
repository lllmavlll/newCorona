import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
import '../screens/CustomCssFile.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import CustomPOP2 from '../screens/CustomPOP2';
import {dependentDropDown} from '../screens/rawDataFortest'




const BasicElements = () => {

  // const navigate =useHistory()


  const [modalShow, setModalShow] = useState(false);
  const [refNO, setRefNo] = useState(1);
  const [itemNameListView, setItemNameListView] = useState(false); // to view table of line items 
  const [isIname, setIsIname] = useState(false); // to view table of line items 
  const [lineItem, setLineItem] = useState([]); // to push line items in an array
  const [orderFormData,setOrderFormData] = useState([]) // to get SKU dropdown
  const [subGroupNameDD,setSubGroupNameDD] = useState([]) // for sub groupname  dropdown
  const [inmaeDD,setInmaeDD] = useState([]) // for sub groupname  dropdown
  // const [clearInput,setClearInput] = useState([]) // to clear input
  const [inputValue,setInputValue] = useState({
        customerName:'',
        OrderNo:'',
        placedOrderDate:'',
        requiredDate:'',
        customerOrderTouch:'',
        targetTouch:'',
        seal:'',
        qualitySeries:'',
        category:'',
        groupName:'',
        subGroupName:'',
        coreProductName:'',
        modelNo:'',
        noOfStones:'',
        sizeofStone:'',
        stoneColourPattern:'',
        screwType:'',
        saleName:'',
        itemStage:'',
        SKUNo:'',
        FinalIname:'',
        noOfDesign:'',
        QuantityPerDesign:'',
        itemQuantity:'',
        unitWT_UL:'',
        unitWT_LL:'',
        estimatedWeight:'',
        ScrewMake:'',
        screwSize:'',
        cuttingType:'',
        cuttingDesign:'',
        stoneBrand:'',
        polishType:'',
        dimmyColType:'',
        SILSURColouringType:'',
        surfaceFinish:'',
        Coat:'',
        cfPlan:'',
        cardType:'',
        stoneSettingType:'',
        remarks:'' 
     
  })




//================= || handles filed input values || ===========================//
const dropDownHandle =(event)=>{
  const { name, value } = event.target;
  // setClearInput(event.target.value)
  setInputValue({
    ...inputValue, 
    [name]: value,
  });
setSubGroupNameDD(dependentDropDown.find(gname => gname.groupName===value).subGroupName)
}



const handleInputChange = (event) => {
  const { name, value } = event.target;
  // setClearInput(event.target.value)
  setInputValue({
    ...inputValue, 
    [name]: value,
  });
  // console.log('Input Value:', clearIsnput);
};

//================= || func to convert string into number || ===========================//

const convertToNum =(num)=>{
  return parseInt(num)
}

//================= || calculated values for item quantity and estimate weight || ===========================//

const calcItemQuantity = convertToNum(inputValue.noOfDesign)*convertToNum(inputValue.QuantityPerDesign)

const sumOfUnitWeight = convertToNum(inputValue.unitWT_UL)+convertToNum(inputValue.unitWT_LL)
const averageWeight =sumOfUnitWeight/2
const calcEstimatedWeight = (averageWeight *calcItemQuantity)

//================= || to bring up the table || ===========================//
const newLineItemHandle =(e)=>{
  e.preventDefault()
  setItemNameListView(true)
  const newLineItem = {
      orderNo:inputValue.OrderNo,
      placedOrderDate:inputValue.placedOrderDate,
      requiredDate:inputValue.requiredDate,
      customerOrderTouch:inputValue.customerOrderTouch,
      targetTouch:inputValue.targetTouch,
      seal:inputValue.seal,
      qualitySeries:inputValue.qualitySeries,
      finalIname:inputValue.FinalIname,
      saleName:inputValue.saleName,
      itemStage:inputValue.itemStage,
      noOfDesign:inputValue.noOfDesign,
      QuantityPerDesign:inputValue.QuantityPerDesign,
      itemQuantity:calcItemQuantity,
      availQuantity:calcItemQuantity,
      unitWT_UL:inputValue.unitWT_UL,
      unitWT_LL:inputValue.unitWT_LL,
      estimatedWeight:calcEstimatedWeight,
      ScrewMake:inputValue.ScrewMake,
      screwSize:inputValue.screwSize,
      cuttingType:inputValue.cuttingType,
      cuttingDesign:inputValue.cuttingDesign,
      stoneBrand:inputValue.stoneBrand,
      polishType:inputValue.polishType,
      dimmyColType:inputValue.dimmyColType,
      SILSURColouringType:inputValue.SILSURColouringType,
      surfaceFinish:inputValue.surfaceFinish,
      Coat:inputValue.Coat,
      cfPlan:inputValue.cfPlan,
      cardType:inputValue.cardType,
      stoneSettingType:inputValue.stoneSettingType,
      remarks:inputValue.remarks,
    }
    setLineItem([...lineItem, newLineItem]);
    // setClearInput('');
    setRefNo(refNO+1)
  }


    //================= || POP UP handle function || ===========================//
    const handleClosePopUp = () => {
      // setModalShow(false);
      window.location.reload();
  
  
    }
    // const handleYesPopUP=()=>{
    //   const data ={lineItem,orderNo:inputValue.OrderNo}
    //   navigate.push('/gold-smith/order',{state:data})
  
    // }


  //================= || get SKU for Dropdown || ===========================//

  const getSKU = ()=>{
    fetch('http://localhost:4000/iname/getIname')
   .then(response => response.json())
   .then(data =>
    {console.log(data);
    return data
    })
   .then(data =>setOrderFormData(data))
   .catch(err=> console.log(err))

  }  

  //=================|| for SKU auto populate ||=======================//
const skuFuncToAutoPopulate =async(e)=>{
  e.preventDefault()
  const FinalIname = inputValue.FinalIname
    // Fetch user data by id
    fetch(`http://localhost:4000/iname/getViaFinalIname/`+FinalIname)
    .then(response => response.json())
     .then(data =>{
      setInmaeDD(data.data)
      console.log(inmaeDD)
    })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
      setIsIname(true)
}
  
  const pushToDB= async(e)=>{
    e.preventDefault()
    
    
    // console.log(inputValue)
    
    //=================|| for backend ||=======================//
    
    const {customerName,OrderNo,} = inputValue
    
    const res =await fetch('http://localhost:4000/CustomerOrderForm/createCustomerOrdernew',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        customerName,
        // OrderNo,
        lineItem:lineItem
      })
    })
    
    const data = await res.json();
    console.log(data)
    
    setModalShow(true) // this is for the popUp

  }


  useEffect(()=>{
    getSKU() //fetch func
  },[])

  //=================|| to populate via SKU ||=============//

  return (
    <>
      <div>
         {/* //================== || Item Name View List per Order || ==============// */}
         <div className="page-header">
          <h1 className="page-title"> Customer Order Form </h1>
        </div>
          {
            itemNameListView?
            <div className='row'>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Line items</h4>
                    <div className="table-responsive OFtable-res ">
                      <table className="table table-bordered OFtable ">
                        <thead>
                          <th>SL.NO</th>
                          {/* <th>Order Number</th>
                          <th>Order reference Number</th> */}
                          <th>PLaced Order Date</th>
                          <th>Required Date</th>
                          <th>Cust OrderTouch</th>
                          <th>Target Touch</th>
                          <th>Seal</th>
                          <th>Quality Series</th>
                          <th>Final Item Name</th>
                          <th>Sale Name</th>
                          <th>Item Stage</th>
                          <th>No. Of Design</th>
                          <th>Quantity per Design</th>
                          <th>Item Quantity</th>
                          <th>unitWT_UL</th>
                          <th>unitWT_LL</th>
                          <th>Estimate Weight</th>
                          <th>Screw Make</th>
                          <th>Screw Size</th>
                          <th>Cutting Type</th>
                          <th>Cutting Design</th>
                          <th>Stone Brand</th>
                          <th>Polish Type</th>
                          <th>Dimmy Col screwType</th>
                          <th>SILSURColouringType</th>
                          <th>Surface Finish</th>
                          <th>Coat</th>
                          <th>Card Fitting Plan</th>
                          <th>Card Type</th>
                          <th>Stone Setting Type</th>
                          <th>Remarks</th>
                        </thead>
                        {
                          lineItem.map((result,index)=>{
                            return <tr>
                              <td>{index+1}</td>
                              {/* <td>{result.orderNo}</td>
                              <td>{`${result.orderNo}/ ${index+1}`}</td> */}
                              <td>{result.placedOrderDate}</td>
                              <td>{result.requiredDate}</td>
                              <td>{result.customerOrderTouch}</td>
                              <td>{result.targetTouch}</td>
                              <td>{result.seal}</td>
                              <td>{result.qualitySeries}</td>
                              <td>{result.finalIname}</td>
                              <td>{result.saleName}</td>
                              <td>{result.itemStage}</td>
                              <td>{result.noOfDesign}</td>
                              <td>{result.QuantityPerDesign}</td>
                              <td>{result.itemQuantity}</td>
                              <td>{result.unitWT_UL}</td>
                              <td>{result.unitWT_LL}</td>
                              <td>{result.estimatedWeight}</td>
                              <td>{result.ScrewMake}</td>
                              <td>{result.screwSize}</td>
                              <td>{result.cuttingType}</td>
                              <td>{result.cuttingDesign}</td>
                              <td>{result.stoneBrand}</td>
                              <td>{result.polishType}</td>
                              <td>{result.dimmyColType}</td>
                              <td>{result.SILSURColouringType}</td>
                              <td>{result.surfaceFinish}</td>
                              <td>{result.Coat}</td>
                              <td>{result.cfPlan}</td>
                              <td>{result.cardType}</td>
                              <td>{result.stoneSettingType}</td>
                              <td>{result.remarks}</td>
                            </tr>
                          })
                        }
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          :''
          }
        <Form >
          <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Customer Details</h4>
                {/* <form className="forms-sample"> */}
                  <Form.Group className='row'>
                    <label htmlFor="CustomerName" className="col-sm-5 col-form-label" >Customer Name</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.customerName} name='customerName' onChange={handleInputChange} className="form-control" id="CustomerName" placeholder="Customer Name" />
                    </div>
                  </Form.Group>
                  <Form.Group className='row'>
                    <label htmlFor="OrderNo" className="col-sm-5 col-form-label" >Order Number</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.OrderNo} name='OrderNo' onChange={handleInputChange} className="form-control" id="OrderNo" placeholder="Order Number" />
                    </div>
                  </Form.Group>
                  <Form.Group className='row'>
                    <label htmlFor="placedOrderDate" className="col-sm-5 col-form-label" >Place Order Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date"  value={inputValue.placedOrderDate} name='placedOrderDate' onChange={handleInputChange} className="form-control" id="placedOrderDate" />
                    </div>
                  </Form.Group>
                  <Form.Group className='row'>
                    <label htmlFor="requiredDate" className="col-sm-5 col-form-label" >Required Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date"  value={inputValue.requiredDate} name='requiredDate' onChange={handleInputChange} className="form-control" id="requiredDate"  />
                    </div>
                  </Form.Group>
                  <Form.Group className='row'>
                    <label htmlFor="custOrderTouch" className="col-sm-5 col-form-label" >Cust order Touch</label>
                    <div className="col-sm-7">
                    <Form.Control type="number"  value={inputValue.customerOrderTouch} name='customerOrderTouch' onChange={handleInputChange} className="form-control" id="custOrderTouch" placeholder="Cust order Touch" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="targetTouch" className="col-sm-5 col-form-label">Target Touch</label>
                    <div className="col-sm-7">
                    <Form.Control type="number"  value={inputValue.targetTouch} name='targetTouch' onChange={handleInputChange} className="form-control" id="targetTouch" placeholder="Target Touch" />
                    </div>
                  </Form.Group>

                  <Form.Group className='row'>
                    <label htmlFor="seal" className="col-sm-5 col-form-label">seal</label>
                    <div className="col-sm-7">
                    <select className="form-control"  value={inputValue.seal}  onChange={handleInputChange} name='seal' id="seal">
                      <option  value=""> Select</option>
                      <option  value="oval VA">oval VA </option>
                      <option  value="sun VA">sun VA </option>
                      <option  value="R">R </option>
                      <option  value="VA">VA </option>
                      <option  value="VA6">VA6 </option>
                      <option  value="VA916">VA916 </option>
                    </select>
                    </div>
                  </Form.Group>
                 
                  {/* <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                {/* </form> */}
              </div>
            </div>
          </div>
          <div className="col-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Product Details</h4>
                {/* <form className="forms-sample"> */}
                  
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="qualitySeries" className="col-sm-4 col-form-label">Quality series</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.qualitySeries} name='qualitySeries'  onChange={handleInputChange}  className="form-control" id="qualitySeries" placeholder="Quality series" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="category" className="col-sm-4 col-form-label">Category</label>
                        <div className="col-sm-8">
                        <select type="text"  value={inmaeDD.Category} name='category'  onChange={handleInputChange}  className="form-control" id="category" placeholder="Category" >
                          <option value=""> Select</option>
                          <option value="BAALI">BAALI </option>
                          <option value="BRING">BRING </option>
                          <option value="BUKUDI">BUKUDI </option>
                          <option value="CHAIN">CHAIN </option>
                          <option value="COMP">COMP </option>
                          <option value="LOLAK">LOLAK </option>
                          <option value="LRING">LRING </option>
                          <option value="MATTI">MATTI </option>
                          <option value="NP">NP </option>
                          <option value="PENDENT">PENDENT </option>
                          <option value="TOPS">TOPS </option>
                        </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="groupName" className="col-sm-4 col-form-label">Group Name</label>
                        <div className="col-sm-8">
                          <select    value={inputValue.groupName} name='groupName' onChange={dropDownHandle}  className="form-control" id="groupName"  >
                            <option  value=""> Select</option>
                            {
                              dependentDropDown.map( gname =>{
                               return <option key={gname.toString()} value={gname.groupName}>{gname.groupName}</option>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="subGrpName" className="col-sm-4 col-form-label">Sub Grp Name</label>
                        <div className="col-sm-8">
                           <select value={inputValue.subGroupName} name='subGroupName' onChange={handleInputChange}  className="form-control" id="subGrpName"  >
                            <option  value=""> Select</option>
                            {
                              subGroupNameDD.map(subGName =>{
                                return <option value={subGName}>{subGName}</option>
                              })
                            }
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="CoreProdName" className="col-sm-4 col-form-label">Core Prdt Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.CoreProductName} name='coreProductName' onChange={handleInputChange}  className="form-control" id="CoreProdName" placeholder="Core Prdt Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="modelNo" className="col-sm-4 col-form-label">Model No.</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.ModelNo} name='modelNo' onChange={handleInputChange}  className="form-control" id="modelNo" placeholder="Model No." />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="noOfStones" className="col-sm-4 col-form-label">No. Of Stones</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.Nstone} name='noOfStones' onChange={handleInputChange}  className="form-control" id="noOfStones" placeholder="No. Of Stones" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="size" className="col-sm-4 col-form-label">Size</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.Size} name='sizeofStone' onChange={handleInputChange}  className="form-control" id="size" placeholder="Size" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="stoneClrPattren" className="col-sm-4 col-form-label">Stn Clr pattern</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.StoneColourPattern} name='stoneColourPattern' onChange={handleInputChange}  className="form-control" id="stoneClrPattren" placeholder="Stone Color pattern" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="screwType" className="col-sm-4 col-form-label">Screw Type </label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.ScrewType} name='screwType' onChange={handleInputChange}  className="form-control" id="screwType" placeholder="Screw Type " />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="saleName" className="col-sm-4 col-form-label">Sale Name</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.saleName} name='saleName' onChange={handleInputChange}  className="form-control" id="saleName" placeholder="Sale Name" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="itemStage" className="col-sm-4 col-form-label">Item Stage</label>
                        <div className="col-sm-8">
                        <select    value={inputValue.itemStage} name='itemStage' onChange={handleInputChange}  className="form-control" id="itemStage"  >
                          <option  value=""> Select</option>
                          <option  value="FINISHED">FINISHED </option>
                          <option  value="FINISHED-WO SCREW">FINISHED-WO SCREW </option>
                          <option  value="BLK-WO SCREW">BLK-WO SCREW </option>
                          <option  value="DP-WO SCREW">DP-WO SCREW </option>
                          <option  value="WO ST- DP-WO SCREW">WO ST- DP-WO SCREW </option>
                          <option  value="WO CUTTING-DP-WO SCREW">WO CUTTING-DP-WO SCREW </option>
                        </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row">
                    {/* <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="FinalIname" className="col-sm-4 col-form-label">Final Iname</label>
                        <div className="col-sm-8">
                        <select value={inputValue.FinalIname} name='FinalIname' onChange={handleInputChange} className="form-control" id="FinalIname"  >
                          <option  value=""> Select</option>
                          {
                          orderFormData&&orderFormData.jewelrie&&orderFormData.jewelrie.map(result =>{
                          return  <option  value={result.FinalIname}> {result.FinalIname}</option>
                          })
                          }
                          </select>
                        <Form.Control  type="text"  value={inputValue.SKUNo} name='SKUNo' onChange={handleInputChange}  className="form-control" id="SKUNo" placeholder="Enter/scan for SKU" />
                        </div>
                      </Form.Group>
                    </div> */}
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="SKUNo" className="col-sm-4 col-form-label">SKU No.</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inmaeDD.SKUNo} name='SKUNo' onChange={handleInputChange}  className="form-control" id="SKUNo"  placeholder='SKU No.'/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="FinalIname" className="col-sm-4 col-form-label">Final Iname</label>
                        <div className="col-sm-8">
                        <select value={inputValue.FinalIname} name='FinalIname' onChange={handleInputChange} className="form-control" id="FinalIname"  >
                          <option  value=""> Select</option>
                          {
                          orderFormData&&orderFormData.jewelrie&&orderFormData.jewelrie.map(result =>{
                          return  <option  value={result.FinalIname}> {result.FinalIname}</option>
                          })
                          }
                          </select>
                        {/* <Form.Control  type="text"  value={inputValue.SKUNo} name='SKUNo' onChange={handleInputChange}  className="form-control" id="SKUNo" placeholder="Enter/scan for SKU" /> */}
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                     <button type="submit"  onClick={skuFuncToAutoPopulate} className="btn btn-outline-primary mr-2">get data</button>
                    </div>
                  </div>

                  {/* <button type="submit"  onClick={skuFuncToAutoPopulate} className="btn btn-primary mr-2">get data</button> */}
                  {/* <button className="btn btn-dark">Cancel</button> */}
                {/* </form> */}
                {isIname?
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label  htmlFor="finalImg" className="col-sm-2 col-form-label">Image</label>
                      <div className="col-sm-10">
                        <img src={inmaeDD.image} alt='NO DATA FOUND'/>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              :""
              }
              </div>
            </div>
          </div>
         
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Quantity Details</h4>
                {/* <p className="card-description"> Basic form elements </p> */}
                {/* <form className="forms-sample"> */}
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="NoOfdesign" className="col-sm-5 col-form-label">No. Of Design </label>
                      <div className="col">
                      <Form.Control type="number"  value={inputValue.noOfDesign}  name='noOfDesign' onChange={handleInputChange} className="form-control" id="NoOfdesign" placeholder="No. Of Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col cursorNotAll'>
                      <label htmlFor="quantityPerDesign" className=" col-sm-5 col-form-label">Quantity per Design</label>
                      <div className="col">
                      <Form.Control type="number"  value={inputValue.QuantityPerDesign}  name='QuantityPerDesign' onChange={handleInputChange} className="form-control" id="quantityPerDesign" placeholder="Quantity/Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="itemQuantity" className="col-sm-5 col-form-label">Item Quantity</label>
                      <div className="col ">
                      <Form.Control  type="number"  value={calcItemQuantity}  name='itemQuantity' onChange={handleInputChange} className="form-control cursorDisable" id="itemQuantity" placeholder="Item Quantity" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="unitWT_UL" className="col-sm-5 col-form-label">Unit Weight UL</label>
                      <div className="col">
                      <Form.Control type="number"  value={inputValue.unitWT_UL}  name='unitWT_UL' onChange={handleInputChange} className="form-control" id="unitWT_UL" placeholder="Unit Weight UL" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="unitWT_LL" className=" col-sm-5 col-form-label">Unit Weight LL</label>
                      <div className="col">
                      <Form.Control type="number"  value={inputValue.unitWT_LL}  name='unitWT_LL' onChange={handleInputChange} className="form-control" id="unitWT_LL" placeholder="Unit Weight LL" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="estimatedWeight" className="col-sm-6 col-form-label ">Estimated Weight in Grams</label>
                      <div className="col">
                      <Form.Control type="number"  value={calcEstimatedWeight}  name='estimatedWeight' onChange={handleInputChange} className="form-control cursorDisable" id="estimatedWeight" placeholder="Estimated Weight" />
                      </div>
                    </Form.Group>
                  </div>
                  {/* <div className='col'>
                    <button type="submit"    onClick={''} className="btn btn-primary mr-4">Save</button>
                  </div> */}

                  {/*  custom image and remarks feild */}

                  {/* <Form.Group>
                    <label>Image</label>
                    <div className="custom-file">
                      <Form.Control type="file"  value={inputValue.}  onChange={handleInputChange} className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="Remarks">Remarks</label>
                    <textarea className="form-control" id="Remarks" rows="4"></textarea>
                  </Form.Group>
                  <button type="submit"  value={inputValue.}  onChange={handleInputChange} className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                {/* </form> */}
              </div>
            </div>
          </div>
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Other Attributes</h4>
                {/* <p className="card-description"> Basic form elements </p> */}
                {/* <form className="forms-sample"> */}
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="screwMake" className="col-sm-5 col-form-label">Screw Make </label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.ScrewMake} name='ScrewMake' onChange={handleInputChange} className="form-control" id="screwMake" placeholder="Screw Make" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="screwSize" className=" col-sm-5 col-form-label">Screw Size</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.screwSize} name='screwSize' onChange={handleInputChange} className="form-control" id="screwSize" placeholder="Screw Size" />
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series )</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="cuttingType" className="col-sm-5 col-form-label ">Cutting Type</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.cuttingType} name='cuttingType' onChange={handleInputChange} className="form-control" id="cuttingType" placeholder="Cutting Type" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="cuttingDesign" className="col-sm-5 col-form-label">Cutting Design</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.cuttingDesign} name='cuttingDesign' onChange={handleInputChange} className="form-control" id="cuttingDesign" placeholder="Cutting Design" />
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="stoneBrand" className="col-sm-5 col-form-label">Stone Brand</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.stoneBrand} name='stoneBrand' onChange={handleInputChange}  id="stoneBrand">
                        <option value=""> Select</option>
                        <option value="SHINE">SHINE</option>
                        <option value="EURO-H">EURO-H</option>
                        <option value="NA">NA</option>
                      </select>
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>

                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="polishType" className="col-sm-5 col-form-label">Polish Type</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.polishType} name='polishType' onChange={handleInputChange}  id="polishType">
                        <option  value=""> Select</option>
                        <option value="MP">MP</option>
                        <option value="Single Buff">Single Buff</option>
                        <option value="Double Buff">Double Buff</option>
                      </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="dimmyColType" className="col-sm-5 col-form-label">Dimmy Col Type</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.dimmyColType} name='dimmyColType' onChange={handleInputChange}  id="dimmyColType">
                        <option value=" ">select</option>
                        <option value="RC-GPC">RC-GPC</option>
                        <option value="1st ONLY-CN">1st ONLY-CN</option>
                        <option value="RC-CN">RC-CN</option>
                        <option value="1st-GPC">1st-GPC</option>
                      </select>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="SILSURColoringType" className="col-sm-5 col-form-label">SILSUR color Type</label>
                      <div className="col">
                        <select className="form-control"  value={inputValue.SILSURColouringType} name='SILSURColouringType' onChange={handleInputChange}  id="SILSURColoringType">
                          <option value=" ">select</option>
                          <option value="RC-GPC">RC-GPC</option>
                          <option value="1st ONLY-CN">1st ONLY-CN</option>
                          <option value="RC-CN">RC-CN</option>
                          <option value="1st-GPC">1st-GPC</option>
                        </select>
                      </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="surfaceFinish" className="col-sm-5 col-form-label">Surface Finish</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.surfaceFinish} name='surfaceFinish' onChange={handleInputChange} id="surfaceFinish">
                        <option value=" ">select</option>
                        <option value="Cut">Cut</option>
                        <option value="SB">SB</option>
                      </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col'>
                      <label htmlFor="coat" className="col-sm-5 col-form-label">Coat</label>
                      <div className="col">
                      <select className="form-control"  value={inputValue.Coat} name='Coat' onChange={handleInputChange}  id="coat">
                        <option value=" ">select</option>
                        <option value="CMF">CMF</option>
                        <option value="MBD">MBD</option>
                        <option value="ANC">ANC</option>
                      </select>
                      </div>
                    </Form.Group>
                      <Form.Group className='col'>
                      <label htmlFor="cardType" name='cardType' className="col-sm-5 col-form-label">Card Type</label>
                      <div className="col">
                      <select className="form-control" value={inputValue.cardType} onChange={handleInputChange} name='cardType' id="cardType">
                        <option value=" ">select</option>
                        <option value="20-CB-W">20-CB-W</option>
                        <option value="20-CB-B">20-CB-B</option>
                        <option value="10A-PL-W">10A-PL-W</option>
                        <option value="10A-CB-W">10A-CB-W</option>
                        <option value="6A-PL-B">6A-PL-B</option>
                      </select>
                      <span style={{color:'khaki',fontSize:'14px'}}><i>(dependent on quality series & touch band)</i></span>
                    </div>
                    </Form.Group>
                    <Form.Group className='col'>
                      <label htmlFor="cfPlan" className="col-sm-5 col-form-label">Card Fittin Plan</label>
                      <div className="col">
                      <Form.Control type="text"  value={inputValue.cfPlan} name='cfPlan' onChange={handleInputChange} className="form-control" id="cfPlan" placeholder='Card Fitting Plan' />
                      </div>
                    </Form.Group>
                  
                  </div>
                  <div className='row'>
                    <Form.Group className='col'>
                      <label htmlFor="stoneSettingType" className="col-sm-5 col-form-label">Stone Setting Type</label>
                      <div className="col">
                      <select className="form-control col-sm-4 "  value={inputValue.stoneSettingType} name='stoneSettingType' onChange={handleInputChange}  id="stoneSettingType">
                        <option value=" ">select</option>
                        <option value="GUBBA ST SET">GUBBA ST SET</option>
                        <option value="DSAD ST SET">DSAD ST SET</option>
                        <option value="PR SET (HS)">PR SET (HS)</option>
                        <option value="WAX SET">WAX SET</option>
                        <option value="JAVA ST SET">JAVA ST SET</option>
                        <option value="GUM SET">GUM SET</option>
                        <option value="PR CAST SET">PR CAST SET</option>
                        <option value="BAND SET">BAND SET</option>
                        <option value="PAVE SET">PAVE SET</option>
                      </select>
                      </div>
                    </Form.Group>
                    {/* <Form.Group>
                      <label htmlFor="Remarks"  className="col-sm-5 col-form-label">Remarks</label>
                      <textarea className="form-control " value={inputValue.remarks} name='remarks' onChange={handleInputChange} id="Remarks" rows="" placeholder='Remarks...' ></textarea>
                    </Form.Group> */}
                    
                  </div>
                  <div className='col'>
                    <Form.Group>
                      <label htmlFor="Remarks">Remarks</label>
                      <textarea className="form-control " value={inputValue.remarks} name='remarks' onChange={handleInputChange} id="Remarks" rows="4" placeholder='Remarks...' ></textarea>
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <div style={{marginTop:'2%'}} className='row'>
                      <Form.Group className='col'>
                        <button type="submit"  onClick={newLineItemHandle} className="btn btn-outline-primary">Save and Add New Item</button>
                      </Form.Group>
                      <Form.Group className='col'>
                        <button style={{marginLeft:'82%'}} type="submit"  onClick={pushToDB} className="btn btn-primary">Create Order</button>
                      </Form.Group>
                    </div>
                  </div>
                  {/* <div className='row'>
                    <CustomPOP2
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                  </div> */}
                {/* </form> */}
              </div>
            </div>
            </div>
          </div>
          <Modal
            show={modalShow}
            onHide={handleClosePopUp}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Order created sucessfully..!
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="primary" onClick={handleYesPopUP}>Yes</Button> */}
              <Button variant="primary" onClick={handleClosePopUp}>
               OK!
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    </>
  )
}

export default BasicElements


// export class BasicElements extends Component {
//   state = {
//     startDate: new Date()
//   };
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

//   componentDidMount() {
//     bsCustomFileInput.init()
//   }

//   render() {
//     return (
      
//     )
//   }
// }

// export default BasicElements
