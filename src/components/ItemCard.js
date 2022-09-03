import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ItemModal from "./Modal";

function ItemCard({ item, admin, onHandleDelete }) {
  const { id, img, title, price } = item
  const history= useHistory();
  const [isOpen, setOpen] = useState(false)
  function handleClick() {
    setOpen(!isOpen)
  }
  function handleEditClick(e) {
    e.stopPropagation()
    history.push(`/edit/${id}`)
  }
  function handleDelete(e) {
    e.stopPropagation()
    fetch(`http://localhost:3000/data/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onHandleDelete(id))
  }
  function handleButtonClick(e) {
    e.stopPropagation()
    history.push(`/order/${id}`)
  }
  return (
    <div className="col-md-4" onClick={handleClick}>
      <ItemModal isOpen={isOpen} setOpen={setOpen} item={item}/>
      <h4>{title}</h4>
      <img src={img} />
      <p>{price}</p>
      {admin? <button className="btn btn-danger" onClick={handleEditClick}>Edit</button> : null}
      &nbsp;
      {admin? <button className="btn btn-danger" onClick={handleDelete}>Delete</button> :
      <button className="btn btn-danger" onClick={handleButtonClick}>Order</button> }
    </div>
  )
}

export default ItemCard