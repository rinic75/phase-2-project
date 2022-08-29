import React from "react";

function ItemCard({item}) {
  const {title, content, price} = item
  return (

    <div className="col-md-4">
      <h4>{title}</h4>
      <p>{content}</p>
      <p>{price}</p>
    </div>
  )
}

export default ItemCard