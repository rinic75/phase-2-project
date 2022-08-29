import React from "react";
import ItemContainer from "./ItemContainer";

function MainPage({items}) {
  return (
    <>
      <div className='MainPage'>
        <div class="container-fluid text-light p-5">
          <div class="container p-5">
            <h1 class="display-3" fw->Welcome to Chang's Shop</h1>
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