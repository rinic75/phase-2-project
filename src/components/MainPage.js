import React from "react";
import ItemContainer from "./ItemContainer";

function MainPage({items, admin, onHandleDelete, onHandleCart}) {
  return (
    <>
      <div className='MainPage'>
        <div className="container-fluid text-light p-5">
          <div className="container p-5">
            <h1 className="display-3">Golf Pro Shop</h1>
            <p>Golf Club</p>
          </div>
        </div>
      </div>
      <div>
        <ItemContainer items={items} admin={admin} onHandleDelete={onHandleDelete} onHandleCart={onHandleCart}/>
      </div>
    </>
  )
}

export default MainPage