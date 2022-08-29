import React from "react";
import ItemDetail from "./ItemDetail";

function ItemContainer({ items }) {

  const renderItems = items.map(item => { 
    return <ItemDetail key={item.id} item={item} />
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