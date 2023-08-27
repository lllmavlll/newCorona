import React, { useState } from 'react'
import  { Form } from 'react-bootstrap'
// import { useLocation } from "react-router-dom";
import './CustomCssFile.css'



const GSIssuance = () => {

  const [compList, setCompList]= useState([])
  const [compTable, setCompTable]= useState(false)
  const [inputValue, setInputValue]=useState({
    pureGoldValueQnty:'',
    pureGoldValueAmt:'',
    compType:'',
    compName:'',
    compQnty:'',
    compAmt:'',
  })

//   const location = useLocation()
// const data =location.state.state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };

  const addComp = (e)=>{
    e.preventDefault()
    setCompTable(true)
    const arrayOfComponents={
      compType:inputValue.compType,
      compName:inputValue.compName,
      compQnty:inputValue.compQnty,
      compAmt:inputValue.compAmt,
    }
    setCompList([...compList, arrayOfComponents])
  }

  const pushToDB = async(e)=>{
    e.preventDefault()

    //========= || Push the Data to DB || ===========//

    const {pureGoldValueQnty, pureGoldValueAmt} =inputValue

    const res =await fetch('http://localhost:4000/GSI/createGSI',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        pureGoldValueQnty,
        pureGoldValueAmt,
        components:compList
      })
    })
    const data = await res.json();
    console.log(data)
  }


    return(
        <>
        <div className="page-header">
          {/* <h3 className="page-title"> Gold Smith Issuance for GSO NO: {data.OrderNo}</h3> */}
          <h3 className="page-title"> Gold Smith Issuance </h3>
        </div>
        <div className="row">                       
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">GSO Number</h4>
                <form className="forms-sample">
                  <div className="row">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row showStoneProperties">                       
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">pure gold</h4>
                 <form className="forms-sample">
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldQuantity" className="col-sm-4 col-form-label">Gold Quantity </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='pureGoldValueQnty' value={inputValue.pureGoldValueQnty} onChange={handleInputChange}  className="form-control" id="goldQuantity" placeholder="Gold Quantity" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="goldAmount" className="col-sm-4 col-form-label">Gold Amount </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='pureGoldValueAmt' value={inputValue.pureGoldValueAmt} onChange={handleInputChange} className="form-control" id="goldAmount" placeholder="Gold Amount" />
                        </div>
                    </Form.Group>
                  </div>
                </form>
              </div>
            </div>
          </div>
            <div className="col-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Components</h4>
                  <form className="forms-sample">
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compType" className="col-sm-4 col-form-label">Component Type </label>
                        <div className="col-sm-8">
                            <select  type="text" name='compType' value={inputValue.compType} onChange={handleInputChange}   className="form-control" id="compType" placeholder="Component Type">
                              <option value=''>Select</option>
                              <option value='Metal'>Metal</option>
                              <option value='Non metal'>Non Metal</option>
                              <option value='Stones'>Stones</option>
                            </select>
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compName" className="col-sm-4 col-form-label">Component Name </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='compName' value={inputValue.compName} onChange={handleInputChange} className="form-control" id="compName" placeholder="Component Name" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compQuantity" className="col-sm-4 col-form-label">Componemt Quantity </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='compQnty' value={inputValue.compQnty} onChange={handleInputChange}  className="form-control" id="compQuantity" placeholder="Componemt Quantity" />
                        </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="row">
                        <label  htmlFor="compamount" className="col-sm-4 col-form-label">Componemt Amount </label>
                        <div className="col-sm-8">
                            <Form.Control  type="text"   name='compAmt' value={inputValue.compAmt} onChange={handleInputChange}  className="form-control" id="compamount" placeholder="Componemt Amount" />
                        </div>
                    </Form.Group>
                  </div>
                  <button type="submit" onClick={addComp}  className="btn btn-primary mr-4">Add  another component</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {
            compTable?
            <div className="row">                       
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Components List</h4>
                  <div className="table-responsive OFtable-res ">
                    <table className="table table-bordered OFtable ">
                      <thead>
                        <th>SL.No</th>
                        <th>component Type</th>
                        <th>component Name</th>
                        <th>component Quantity</th>
                      </thead>
                      <tbody>
                        {
                          compList.map((comp, index)=>{
                            return<>
                            <tr>
                              <td>{index+1}</td>
                              <td>{comp.compType}</td>
                              <td>{comp.compName}</td>
                              <td>{comp.compQnty}</td>
                            </tr>
                            </>
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                  <div style={{margin:"2%  0 0 95%"}}>
                    <button type="submit" onClick={pushToDB}  className="btn btn-primary mr-4">Issue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :''
          }
      </>  
    )
//   return (
//     <>
//         <h1>GSI</h1>
//         <div className='row'>
//         <div className="col-md-12 grid-margin stretch-card">
//              <div className="card">
//               <div className="card-body">
//                     <form className="forms-sample">
//                       <div className='row'>
//                         <div className="col-md-4">
//                              <h4  className='card-title'>Material  <button style={{marginLeft:"25px"}} type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">add +</button></h4>
//                         </div>
                       
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="goldQuantity" className="col-sm-4 col-form-label">GSO Number </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="GSO NUMBER">GSO NUMBER</option>
//                                     <option value="GSO NUMBER">GSO NUMBER</option>
//                                     <option value="GSO NUMBER">GSO NUMBER</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>

//                      </div> 
//                       <div className='row'>
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="materialName" className="col-sm-4 col-form-label">Name</label>
//                                 <div className="col-sm-8">
//                                 <Form.Control  type="text"   name='materialName'  className="form-control" id="materialName" placeholder="Material Name" />
//                                 </div>
//                             </Form.Group>
//                         </div>
//                         {/* <div className="col-md-4">
//                         <Form.Group className="row">
//                             <label  htmlFor="materialType" className="col-sm-4 col-form-label"> Type</label>
//                             <div className="col-sm-8">
//                             <Form.Control  type="text"  name='materialType'  className="form-control" id="materialType" placeholder="Material Type" />
//                             </div>
//                         </Form.Group>
//                         </div> */}
//                         <div className="col-md-4">
//                         <Form.Group className="row">
//                             <label  htmlFor="materialQty" className="col-sm-4 col-form-label">Quantity </label>
//                             <div className="col-sm-8">
//                             <Form.Control  type="text"  name='materialQty'  className="form-control" id="materialQty" placeholder="Material Quantity" />
//                             </div>
//                         </Form.Group>
//                         </div>

//                      </div> 

//                      {/* <span className="menu-icon">  <h4 className="card-title">Components <i className="mdi mdi-plus"></i></h4></span> */}
                               
//                      <h4 style={{marginTop:"45px"}}  className='card-title'>components  <button style={{marginLeft:"15px"}}  type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">add +</button></h4>

//                       <div className='row'>
                        
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="Component_1">Component_1</option>
//                                     <option value="Component_2">Component_2</option>
//                                     <option value="Component_3">Component_3</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>
                        
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="Component_1">Component_1</option>
//                                     <option value="Component_2">Component_2</option>
//                                     <option value="Component_3">Component_3</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>
                        
//                         <div className="col-md-4">
//                             <Form.Group className="row">
//                                 <label  htmlFor="productQuantity" className="col-sm-4 col-form-label"> </label>
//                                 <div className="col-sm-8">
//                                 <select className="form-control"    id="stoneBrand">
//                                     <option  value=""> Select</option>
//                                     <option value="Component_1">Component_1</option>
//                                     <option value="Component_2">Component_2</option>
//                                     <option value="Component_3">Component_3</option>
//                                 </select>
//                                 </div>
//                             </Form.Group>
//                         </div>
//                         <div className="col-md-6">
//                             {/* <div className='col'>
//                                 <button type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">Save</button>
//                             </div> */}
//                         </div>
//                       </div> 
//                    </form>
//                 </div>
//                 </div>
//             </div>  

//         </div>
//     </>
//   )
}

export default GSIssuance
