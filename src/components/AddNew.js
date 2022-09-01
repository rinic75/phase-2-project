import React from "react";
import { Form, Button } from "react-bootstrap";

function AddNew() {
  return(
  
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Name of Item" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Describe your item briefly"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter your zipcode" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="USD" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  )
}

export default AddNew