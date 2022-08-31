
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemModal({ isOpen, setOpen, item }) {
  const {description} = item

  return (
    <>      
      <Modal
        size="sm"
        show={isOpen}
        onHide={() => setOpen(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Description
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ItemModal