import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ItemModal from "./Modal";

function ItemCard({ item, admin }) {
  const { id, img, title, price } = item
  const history= useHistory();
  const [isOpen, setOpen] = useState(false)
  function handleClick() {
    setOpen(!isOpen)
  }
  function handleButtonClick(e) {
    e.stopPropagation()
    history.push(`/order/${id}`)
  }
  function handleEditClick(e) {
    e.stopPropagation()
    history.push(`/new/${id}`)
  }
  return (
    <div className="col-md-4" onClick={handleClick}>
      <ItemModal isOpen={isOpen} setOpen={setOpen} item={item}/>
      <h4>{title}</h4>
      <img src={img} />
      <p>{price}</p>
      {admin? <button className="btn btn-danger" onClick={handleEditClick}>Edit</button> : null}
      &nbsp;
      <button className="btn btn-danger" onClick={handleButtonClick}>Order</button>
    </div>
  )
}

export default ItemCard