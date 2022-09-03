import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditItem({ items, onHandleUpdate }) {
  const {id} = useParams();
  const {title, img, description, price} = items[id]
  
   
  const [form, setForm] = useState({
    title: "",
    img: "",
    description: "",
    price: ""
  })
  function handleChange(e) {
    const {id, value} = e.target
    setForm({...form, [id]: value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/data/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(r=>r.json())
    .then(updatedItem => onHandleUpdate(updatedItem))
    
  }

  return(
  
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder={title} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder={img} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder={description} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder={price} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Edit
      </Button>
    </Form>
    
  )
}

export default EditItem