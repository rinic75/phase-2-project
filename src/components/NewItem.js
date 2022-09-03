import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

function NewItem({ onAddItem }) {
  const [form, setForm] = useState({
    title: "",
    img: "",
    description: "",
    location: "",
    price: ""
  })
  function handleChange(e) {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(r => r.json())
      .then(newItem => onAddItem(newItem))

  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default NewItem