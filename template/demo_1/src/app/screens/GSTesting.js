import React from 'react'
import {Form} from 'react-bootstrap'

const GSTesting = () => {
  return (
    <>
     <div className="page-header">
          <h1 className="page-title"> Testing </h1>
    </div>
    <div className='row'>
        <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Testing</h4> */}
                <form className="forms-sample">
                  <div className='row'>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="issueDate" className="col-sm-4 col-form-label">Issue Date</label>
                        <div className="col-sm-8">
                        <Form.Control  type="date"   name='issueDate'    className="form-control" id="issueDate" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                        <Form.Group className="row">
                          <label  htmlFor="issueQty" className="col-sm-4 col-form-label">Issue Quantity</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"   name='issueQty'    className="form-control" id="issueQty" placeholder="Issue Quantity" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="row">
                          <label  htmlFor="issueWeight" className="col-sm-4 col-form-label">Issue Weight</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"   name='issueWeight'    className="form-control" id="issueWeight" placeholder="Issue Weight" />
                          </div>
                        </Form.Group>
                      </div>
                  </div>

                  <div className='row'>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label  htmlFor="issueDate" className="col-sm-4 col-form-label">Issue Date</label>
                        <div className="col-sm-8">
                        <Form.Control  type="date"   name='issueDate'    className="form-control" id="issueDate" />
                        </div>
                      </Form.Group>
                    </div>
                      <div className="col-md-4">
                        <Form.Group className="row">
                          <label  htmlFor="testWeight" className="col-sm-4 col-form-label">Test Wt</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"   name='testWeight'    className="form-control" id="testWeight" placeholder="Test Weight" />
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="row">
                          <label  htmlFor="testWeight" className="col-sm-4 col-form-label">Test Wt</label>
                          <div className="col-sm-8">
                          <Form.Control  type="text"   name='testWeight'    className="form-control" id="testWeight" placeholder="Test Weight" />
                          </div>
                        </Form.Group>
                      </div>
                  </div>
                  <div className='row'>
                     <div className="col-md-4">
                       <Form.Group className="row">
                        <label  htmlFor="testWeight" className="col-sm-4 col-form-label">Test Wt</label>
                        <div className="col-sm-8">

                          <div className='row'>
                            <div style={{marginRight:"15px"}} className="form-check">
                              <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input"/>
                                <i className="input-helper"></i>
                                Cmpany A/C 
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input"/>
                                <i className="input-helper"></i>
                                GS A/C 
                              </label>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-12">
                          <button type="submit"   className="btn btn-primary mr-2">Save</button>
                        </div>
                      </Form.Group>
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

export default GSTesting
