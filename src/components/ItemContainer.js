import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items, admin, onHandleDelete, onHandleCart }) {

  const renderItems = items.map(item => { 
    return <ItemCard key={item.id} item={item} admin={admin} onHandleDelete={onHandleDelete} onHandleCart={onHandleCart}/>
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