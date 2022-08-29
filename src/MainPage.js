import React from "react";
import ItemContainer from "./ItemContainer";

function MainPage({items}) {
  return (
    <>
      <div className='MainPage'>
        <div className="container-fluid text-light p-5">
          <div className="container p-5">
            <h1 className="display-3">Welcome to Chang's Shop</h1>
            <p>Local Market</p>
          </div>
        </div>
      </div>
      <div>
        <ItemContainer items={items} />
      </div>
    </>
  )
}

export default MainPage