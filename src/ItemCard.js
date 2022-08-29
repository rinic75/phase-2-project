import React, { useState } from "react";
import ItemModal from "./Modal";

function ItemCard({ item }) {
  const { title, content, price } = item
  const [isOpen, setOpen] = useState(false)
  function handleClick() {
    setOpen(!isOpen)
  }
  return (
    <div className="col-md-4" onClick={handleClick}>
      <ItemModal isOpen={isOpen} setOpen={setOpen}/>
      <h4>{title}</h4>
      <p>{content}</p>
      <p>{price}</p>
    </div>
  )
}

export default ItemCard