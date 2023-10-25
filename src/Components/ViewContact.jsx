import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewContact({item}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className='fa fa-eye'></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><img style={{width:'150px', height:'150px',borderRadius:'50%'}} src={item.photo} ></img></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-action'>
              Name : <span className='fw-bold'>{item.name}</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              mobile : <span className='fw-bold'>{item.mobile}</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              email : <span className='fw-bold'>{item.email}</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Company : <span className='fw-bold'>{item.company}</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Title : <span className='fw-bold'>{item.title}</span>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewContact;