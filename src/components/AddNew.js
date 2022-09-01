import React from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function AddNew({ items }) {
  const {id} = useParams();
  const {title, img, description, location, price} = items[id]
  return(
  
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder={title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder={img} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder={description}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder={location} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder={price} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  )
}

export default AddNew