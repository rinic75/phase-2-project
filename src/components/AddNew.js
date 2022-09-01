import React from "react";
import { Form, Button } from "react-bootstrap";

function AddNew() {
  return(
    <div>
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
    <form className="form" autoComplete="off">
      <h3>Edit Project</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value="{}"
      />

      <label htmlFor="about">About</label>
      <textarea id="about" name="about" value="{} "/>

      <label htmlFor="phase">Phase</label>
      <select name="phase" id="phase" value="{}" >
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
        <option value="4">Phase 4</option>
        <option value="5">Phase 5</option>
      </select>

      <label htmlFor="link">Project Homepage</label>
      <input
        type="text"
        id="link"
        name="link"
        value="{link}"
      />

      <label htmlFor="image">Screenshot</label>
      <input
        type="text"
        id="image"
        name="image"
        value=""
      />

      <button type="submit">Update Project</button>
    </form>
    </div>
  )
}

export default AddNew