import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Cart from './Cart.js'
const CartModal = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <div id="center">Cart</div>
      </div>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Cart.totalItems.map((item, key) => {
            return (
              <div id='cartItem'>
                <div>
                <div id='cartNum'>{key + 1}.</div>
                <img id='cartImg' src={item[2]}></img> 
                <div id='cartPrice'>${item[1]}</div>
                <div id='cartName'>{item[0]}-</div>
                
                </div>
              </div>
            )
          })}
          <br></br>
          <div id='totalItem'>Cart: {Cart.totalItems.length}</div>
          <br></br>
          <div id='grandTotal'>Total: ${Cart.grandTotal()} </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Continue Shopping
          </Button>
          <Button onClick={handleClose}>
            Check Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CartModal