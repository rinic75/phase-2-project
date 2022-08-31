import React, { useState } from "react";
import ItemModal from "./Modal";

function ItemCard({ item }) {
  const { img, title, price } = item
  const [isOpen, setOpen] = useState(false)
  function handleClick() {
    setOpen(!isOpen)
  }
  return (
    <div className="col-md-4" onClick={handleClick}>
      <ItemModal isOpen={isOpen} setOpen={setOpen} item={item}/>
      <h4>{title}</h4>
      <img src={img} />
      <p>{price}</p>
    </div>
  )
}

export default ItemCard