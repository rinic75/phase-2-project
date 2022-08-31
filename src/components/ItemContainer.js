import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items }) {

  const renderItems = items.map(item => { 
    return <ItemCard key={item.id} item={item} />
  })

  return (
    <div className="container">
      <div className="row">
        {renderItems}
      </div>
    </div>
  )
}

export default ItemContainer