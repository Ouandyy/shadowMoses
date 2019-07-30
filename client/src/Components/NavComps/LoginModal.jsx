import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Facebook from './FacebookAuth.jsx';
import Google from './GoogleAuth.jsx'
const LoginModal = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <div id="center">Login</div>
      </div>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Facebook/>
           <br></br>
          <Google/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Sign Up
          </Button>
          <Button onClick={handleClose}>
            Login with email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default LoginModal