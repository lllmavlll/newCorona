import React from 'react'
import {Form} from 'react-bootstrap'

const subOrderForm = () => {
  return (
    <>
      <div style={{height:'80vh'}}>
        <div className="page-header">
          <h1 className="page-title"> Sub Order Form </h1>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Customer Details</h4> */}
                <form className="forms-sample">

                    <div className='row'>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="orderNumber" className="col-sm-3 col-form-label">Order Number</label>
                            <div className="col-sm-7">
                            <Form.Control  type="text"  name='orderNumber'  className="form-control" id="orderNumber" placeholder="Order Number" />
                            </div>
                        </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="subOrderName" className="col-sm-3 col-form-label">Sub Order Number</label>
                            <div className="col-sm-7">
                            <Form.Control  type="text"   name='subOrderName'  className="form-control" id="subOrderName" placeholder="Sub Order Number" />
                            </div>
                        </Form.Group>
                        </div>
                    </div> 

                    <div className='row'>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="goldSmithName" className="col-sm-3 col-form-label">Gold Smith Name</label>
                            <div className="col-sm-7">
                            <Form.Control  type="text"  name='goldSmithName'  className="form-control" id="goldSmithName" placeholder="Gold Smith Name" />
                            </div>
                        </Form.Group>
                        </div>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="productName" className="col-sm-3 col-form-label">Product Name</label>
                            <div className="col-sm-7">
                            <Form.Control  type="text"   name='productName'  className="form-control" id="productName" placeholder="Product Name" />
                            </div>
                        </Form.Group>
                        </div>
                    </div> 

                    <div className='row'>
                        <div className="col-md-6">
                        <Form.Group className="row">
                            <label  htmlFor="productQuantity" className="col-sm-3 col-form-label">Product Quantity</label>
                            <div className="col-sm-7">
                            <Form.Control  type="text"  name='productQuantity'  className="form-control" id="productQuantity" placeholder="Product Quantity" />
                            </div>
                        </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <div className='col'>
                                <button type="submit" onClick={e=>e.preventDefault()} className="btn btn-primary mr-4">Save</button>
                            </div>
                        </div>
                    </div> 
                </form>
             </div>
            </div>
          </div>

          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Customer Order List</h4>
                {/* <p className="card-description"> Add className <code>.table-dark</code>
                </p> */}
                <div className="table-responsive">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th> Order No </th>
                        <th> Item Name</th>
                        <th> Item Quantity</th>
                        <th> Item Weight </th>
                        <th> Gold Smith Name </th>
                        <th> Status </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                      </tr>
                      <tr>
                        <td>3  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                      </tr>
                      <tr>
                        <td>4  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                      </tr>
                      <tr>
                        <td>5 </td>
                        <td>  </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> 6 </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                      </tr>
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
     </div>
    </>
  )
}

export default subOrderForm
