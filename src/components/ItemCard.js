import React, { useState } from "react";
import ItemModal from "./Modal";

function ItemCard({ item }) {
  const { img, title, price } = item
  const [isOpen, setOpen] = useState(false)
  function handleClick() {
    setOpen(!isOpen)
  }
  function handleButtonClick(e) {
    e.stopPropagation()
    
  }
  return (
    <div className="col-md-4" onClick={handleClick}>
      <ItemModal isOpen={isOpen} setOpen={setOpen} item={item}/>
      <h4>{title}</h4>
      <img src={img} />
      <p>{price}</p>
      <button className="btn btn-danger" onClick={handleButtonClick}>Order</button>
    </div>
  )
}

export default ItemCard