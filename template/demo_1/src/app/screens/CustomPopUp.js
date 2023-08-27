import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomPopUp = (props) => {
  return (
    <><div className='row'>
        <div className="col-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Order created sucessfully
                </Modal.Title>  
              </Modal.Header>
              <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                proceed to Split the order?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomPopUp
