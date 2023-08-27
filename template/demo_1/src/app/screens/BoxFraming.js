import React from 'react'
import { Form } from 'react-bootstrap';


const BoxFraming = () => {
  return (
    <>
        <div className="page-header">
            <h3 className="page-title"> Shop Box Framing</h3>
        </div>
        <div className='row'>
            <div className="col-md-12 grid-margin stretch-card ">
                <div className="card">
                    <div className="card-body">
                        <form className="forms-sample">
                            <div className='row'>
                                <div className="col-md-4">
                                    <Form.Group className="row">
                                        <label  htmlFor="BoxNo" className="col-sm-4 col-form-label">Box Number</label>
                                        <div className="col-sm-8">
                                        <select    name='BoxNo'  className="form-control" id="BoxNo"  >
                                            <option  value=""> Select</option>
                                            <option  value="Box_1">Box_1 </option>
                                            <option  value="Box_2">Box_2 </option>
                                            <option  value="Box_3">Box_3 </option>
                                            <option  value="Box_4">Box_4 </option>
                                            <option  value="Box_5">Box_5 </option>
                                        </select>
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-4">
                                    <Form.Group className="row">
                                        <label  htmlFor="PKTNo" className="col-sm-4 col-form-label">Packet Number</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text" className="form-control" id="PKTNo" placeholder="Packet Number" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-4">
                                    <Form.Group className="row">
                                        <label  htmlFor="cardNo" className="col-sm-4 col-form-label">Card Number</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"    className="form-control" id="cardNo" placeholder="Category" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className="col-md-7 grid-margin stretch-card ">
                <div className="card">
                    <div className="card-body">
                        <form className="forms-sample">
                            <div className='row'>
                                <div className="col-md-12">
                                    <Form.Group className="row">
                                        <label  htmlFor="Item" className="col-sm-2 col-form-label">Item</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"  name='qualitySerires'   className="form-control" id="Item" placeholder="Item" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="UnitWT" className="col-sm-4 col-form-label">Unit Weight</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"  name='qualitySerires'   className="form-control" id="UnitWT" placeholder="Unit Weight" />
                                        </div>
                                    </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="CardNo" className="col-sm-4 col-form-label">Card Number</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"    className="form-control" id="CardNo" placeholder="Card Number" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="seal" className="col-sm-4 col-form-label">Seal</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"  name='seal'   className="form-control" id="seal" placeholder="Seal" />
                                        </div>
                                    </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="BOXNo" className="col-sm-4 col-form-label">Box Number</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"    className="form-control" id="BOXNo" placeholder="Box Number" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="touch" className="col-sm-4 col-form-label">Touch</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text" className="form-control" id="touch" placeholder="Touch" />
                                        </div>
                                    </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="PKTNO" className="col-sm-4 col-form-label">Packet No</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"    className="form-control" id="PKTNO" placeholder="Packet Number" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="balQty" className="col-sm-4 col-form-label">BAL QTY</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text" className="form-control" id="balQty" placeholder="Balance quantity" />
                                        </div>
                                    </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="balWt" className="col-sm-4 col-form-label">BAL Wt</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"    className="form-control" id="balWt" placeholder="Balance weight" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="GSName" className="col-sm-4 col-form-label">GS Name</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text" className="form-control" id="GSName" placeholder="Gols Smith Name" />
                                        </div>
                                    </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="ReceivedDate" className="col-sm-4 col-form-label">Receive Date</label>
                                        <div className="col-sm-8">
                                            <Form.Control  type="text"    className="form-control" id="ReceivedDate" placeholder="Receive Date" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-5 grid-margin stretch-card ">
                <div className="card">
                    <div className="card-body">
                        <form className="forms-sample">
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="Damage" className="col-sm-5 col-form-label">Damage</label>
                                        <div className="col-sm-7">
                                            <Form.Control  type="text" className="form-control" id="Damage" placeholder="0" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="row-md-5">
                                    <div className="col-sm-10">
                                    <Form.Control  type="text" className="form-control" id="Damage" placeholder="0.000" />
                                    </div>
                                </div>
                            </div>
                      
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="missing" className="col-sm-5 col-form-label">Missing</label>
                                        <div className="col-sm-7">
                                            <Form.Control  type="text" className="form-control" id="missing" placeholder="0" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="row-md-5">
                                    <div className="col-sm-10">
                                    <Form.Control  type="text" className="form-control" id="missing" placeholder="0.000" />
                                    </div>
                                </div>
                            </div>
                      
                            <div className='row'>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label  htmlFor="Qty_card" className="col-sm-5 col-form-label">Qty/Card</label>
                                        <div className="col-sm-7">
                                            <Form.Control  type="text" className="form-control" id="Qty_card" placeholder="Qty/Card" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-primary mr-4">Save</button>
                                </div>
                            </div>
                      
                        </form>
                    </div>
                </div>
            </div>
        
       </div>

    </>
  )
}

export default BoxFraming
