import React, { useState } from 'react'
import { Form } from 'react-bootstrap';




const GSreceive = () => {

  const [inputValue,setInputValue] = useState({
  })
  
  const handleInputChange = (event) => {}
  setInputValue('')
  return (
    <>
        <div className="page-header">
          <h1 className="page-title"> Gold Smith Receive </h1>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Customer Details</h4> */}
                <form className="forms-sample">
                <Form.Group className='row'>
                    <label htmlFor="GSName" className="col-sm-5 col-form-label" >Goldsmith Name</label>
                    <div className="col-sm-7">
                    <select className="form-control"  value={inputValue.GSName}   onChange={handleInputChange} name='GSName' id="GSName">
                      <option  value=""> </option>
                      <option  value="Otion1">Otion1 </option>
                      <option  value="Otion2">Otion2 </option>
                      <option  value="Otion3">Otion3 </option>
                    </select>
                    {/* <Form.Control type="text"  value={inputValue.GSName} name='GSName' onChange={handleInputChange} className="form-control" id="GSName" placeholder='Goldsmith Name' /> */}
                    </div>
                  </Form.Group>
                  <Form.Group className='row'>
                    <label htmlFor="receivedDate" className="col-sm-5 col-form-label" >Receive Date</label>
                    <div className="col-sm-7">
                    <Form.Control type="date"  value={inputValue.receivedDate} name='customerName' onChange={handleInputChange} className="form-control" id="receivedDate" placeholder="Customer Name" />
                    </div>
                  </Form.Group>
                
                  <Form.Group className='row'>
                    <label htmlFor="RecNo" className="col-sm-5 col-form-label" >Receipt Number</label>
                    <div className="col-sm-7">
                    <select className="form-control"  value={inputValue.RecNo}   onChange={handleInputChange} name='RecNo' id="RecNo">
                      <option  value="NEW"> NEW</option>
                      <option  value="Otion1">Otion1 </option>
                      <option  value="Otion2">Otion2 </option>
                      <option  value="Otion3">Otion3 </option>
                    </select>
                    {/* <Form.Control type="text"  value={inputValue.RecNo} name='RecNo' onChange={handleInputChange} className="form-control" id="RecNo" placeholder='Rec Number' /> */}
                    </div>
                  </Form.Group>
                  <Form.Group className='row'>
                    <label htmlFor="GSONo" className="col-sm-5 col-form-label" > GSO</label>
                    <div className="col-sm-7">
                    <Form.Control type="text"  value={inputValue.GSONo} name='GSONo' onChange={handleInputChange} className="form-control" id="GSONo" placeholder=" GSO" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="PKTNo" className="col-sm-5 col-form-label">PKT Number</label>
                    <div className="col-sm-7">
                    <select className="form-control"  value={inputValue.PKTNo}   onChange={handleInputChange} name='PKTNo' id="PKTNo">
                      <option  value=""> Select</option>
                      <option  value="Otion1">Otion1 </option>
                      <option  value="Otion2">Otion2 </option>
                      <option  value="Otion3">Otion3 </option>
                    </select>
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label  htmlFor="pktQty" className="col-sm-5 col-form-label">PKT Quantity</label>
                    <div className="col-sm-7">
                      <Form.Control  type="text"  value={inputValue.pktQty} name='pktQty' onChange={handleInputChange}  className="form-control" id="pktQty" placeholder="0.0" />
                      </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label  htmlFor="pktWt" className="col-sm-5 col-form-label">PKT Weight</label>
                    <div className="col-sm-7">
                      <Form.Control  type="text"  value={inputValue.pktWt} name='pktWt' onChange={handleInputChange}  className="form-control" id="pktWt" placeholder="0.000" />
                        </div>
                  </Form.Group>
                  
                  <div className='col'>
                    <div className='row'>
                      {/* <div className="col-md-6 form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input"/>
                          <i className="input-helper"></i>
                          Regular
                        </label>
                      </div>
                      <div className="col-md-6 form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input"/>
                          <i className="input-helper"></i>
                          spare
                        </label>
                      </div> */}
                    </div>
                  </div>
                 
                  {/* <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Product Details</h4> */}
                <form className="forms-sample">

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="product" className="col-sm-4 col-form-label">Product</label>
                        <div className="col-sm-8">
                        <select className="form-control"  value={inputValue.product}   onChange={handleInputChange} name='product' id="product">
                          <option  value=""> </option>
                          <option  value="Otion1">Otion1 </option>
                          <option  value="Otion2">Otion2 </option>
                          <option  value="Otion3">Otion3 </option>
                        </select>
                        {/* <Form.Control  type="text"  value={inputValue.product} name='product'  onChange={handleInputChange}  className="form-control" id="product" placeholder="Product" /> */}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="Pcs_card" className="col-sm-4 col-form-label">Pcs/Card</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.Pcs_card} name='Pcs_card'  onChange={handleInputChange}  className="form-control" id="Pcs_card" placeholder="Pcs/Card" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="Llimit" className="col-sm-4 col-form-label">L.Limit</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.Llimit} name='Llimit' onChange={handleInputChange}  className="form-control" id="Llimit" placeholder="L.Limit" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="Ulimit" className="col-sm-4 col-form-label">U.Limit</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.Ulimit} name='Ulimit' onChange={handleInputChange}  className="form-control" id="Ulimit" placeholder="U.Limit" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="stoneQty" className="col-sm-4 col-form-label">Stone Quantity</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.stoneQty} name='stoneQty' onChange={handleInputChange}  className="form-control" id="stoneQty" placeholder="Stone Quantity" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="OldNos" className="col-sm-4 col-form-label">Old Nos</label>
                        <div className="col-sm-8">
                        <select className="form-control"  value={inputValue.OldNos}   onChange={handleInputChange} name='OldNos' id="OldNos">
                          <option  value=""> </option>
                          <option  value="Otion1">Otion1 </option>
                          <option  value="Otion2">Otion2 </option>
                          <option  value="Otion3">Otion3 </option>
                        </select>
                        {/* <Form.Control  type="text"  value={inputValue.OldNos} name='OldNos' onChange={handleInputChange}  className="form-control" id="OldNos" placeholder="Old Nos" /> */}
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className='row'>
                        <label htmlFor="seal" className="col-sm-4 col-form-label" >Seal</label>
                        <div className="col-sm-8">
                          <Form.Control type="text"  value={inputValue.seal} name='seal' onChange={handleInputChange} className="form-control" id="seal" placeholder="Seal" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className='row'>
                        <label htmlFor="touch" className="col-sm-4 col-form-label" >Touch</label>
                        <div className="col-sm-8">
                          <Form.Control type="text"  value={inputValue.touch} name='touch' onChange={handleInputChange} className="form-control" id="touch" placeholder="Touch" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="sprQty" className="col-sm-4 col-form-label">Spare Quantity</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.sprQty} name='sprQty' onChange={handleInputChange}  className="form-control" id="sprQty" placeholder="0.0" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="spareWeight" className="col-sm-4 col-form-label">Spare Weight </label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.spareWeight} name='spareWeight' onChange={handleInputChange}  className="form-control" id="spareWeight" placeholder="0.000 " />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="unitWeight" className="col-sm-4 col-form-label">Unit Weight</label>
                        <div className="col-sm-8">
                        <Form.Control  type="text"  value={inputValue.unitWeight} name='unitWeight' onChange={handleInputChange}  className="form-control" id="unitWeight" placeholder="0.000" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label  htmlFor="meruguType" className="col-sm-4 col-form-label">Merugu type</label>
                        <div className="col-sm-8">
                        <select className="form-control"  value={inputValue.meruguType}   onChange={handleInputChange} name='meruguType' id="meruguType">
                          <option  value=""> </option>
                          <option  value="Otion1">Otion1 </option>
                          <option  value="Otion2">Otion2 </option>
                          <option  value="Otion3">Otion3 </option>
                        </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-12">
                    <Form.Group>
                      <label htmlFor="Remarks">Remarks</label>
                      <textarea className="form-control " value={inputValue.remarks} name='remarks' onChange={handleInputChange} id="Remarks" rows="3" placeholder='Remarks...' ></textarea>
                    </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <button type="submit"  onChange={handleInputChange} className="btn btn-primary mr-2">Update</button>
                    </div>
                  </div>

                  {/* <button type="submit"  value={inputValue.}  onChange={handleInputChange} className="btn btn-primary mr-2">Save</button> */}
                  {/* <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                    <div className='row'>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="Pcs_card" className="col-sm-4 col-form-label">M. Touch</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.Pcs_card} name='Pcs_card'  onChange={handleInputChange}  className="form-control" id="Pcs_card" placeholder="Pcs/Card" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="balQty" className="col-sm-4 col-form-label">Bal Qty</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.balQty} name='balQty'  onChange={handleInputChange}  className="form-control" id="balQty" placeholder="Balance Quantity" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="balWeight" className="col-sm-4 col-form-label">Bal Wt</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.balWeight} name='balWeight'  onChange={handleInputChange}  className="form-control" id="balWeight" placeholder="Balance Weight" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="retQty" className="col-sm-4 col-form-label">Ret Qty</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.retQty} name='retQty'  onChange={handleInputChange}  className="form-control" id="retQty" placeholder="Return Quantity" />
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    {/* row2 */}
                    <div className='row'>
                      <div className="col-md-3">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            Fully Slipped
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="damQty" className="col-sm-4 col-form-label">Dam Qty</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.damQty} name='damQty'  onChange={handleInputChange}  className="form-control" id="damQty" placeholder="Damage Quantity" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="damWt" className="col-sm-4 col-form-label">Dam Wt</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.damWt} name='damWt'  onChange={handleInputChange}  className="form-control" id="damWt" placeholder="Damage Weight" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="retWt" className="col-sm-4 col-form-label">Ret Wt</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.retWt} name='retWt'  onChange={handleInputChange}  className="form-control" id="retWt" placeholder="Return Weight" />
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    {/* row3 */}
                    <div className='row'>
                      <div className="col-md-3">
                       <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            A/C Closed
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="testQty" className="col-sm-4 col-form-label">Test Qty</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.testQty} name='testQty'  onChange={handleInputChange}  className="form-control" id="testQty" placeholder="Test Quantity" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-3">
                        <Form.Group className="row">
                          <label  htmlFor="testWeight" className="col-sm-4 col-form-label">Test Wt</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"  value={inputValue.testWeight} name='testWeight'  onChange={handleInputChange}  className="form-control" id="testWeight" placeholder="Test Weight" />
                          </div>
                        </Form.Group>
                      </div>
                      
                    </div>

                    
                </form>
              </div>
            </div>
          </div>

          {/* div row 3 */} 
          
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive OFtable-res ">
                  <table className="table table-bordered OFtable ">
                    <thead>
                      <tr>

                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default GSreceive
