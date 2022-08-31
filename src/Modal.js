
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemModal({ isOpen, setOpen, item }) {
  const {title, description, location, upload_date, price, contact} = item

  return (
    <>      
      <Modal
        size="lg"
        show={isOpen}
        onHide={() => setOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <p>Location : {location}</p>
          <p>Date : {upload_date}</p>
          <p>Price : {price}</p>
          <p>Contact : {contact}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ItemModal