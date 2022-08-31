import React from "react";
import { useHistory, useParams } from "react-router-dom";

function OrderPage({items}) {
  
  const {id} = useParams()
  const history = useHistory()
  const {title, img, location, upload_date, price} = items[id]

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{title}</h4>
          <p>Location : {location}</p>
          <p>Posted at {upload_date}</p>
          <p>${price}</p>
          <button className="btn btn-danger">Add Cart</button>|
          <button className="btn btn-danger" onClick={()=>{ history.goBack()}}>BACK</button>
        </div>
      </div>
    </div>
  )
};

export default OrderPage