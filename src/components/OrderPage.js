import React from "react";
import { useHistory } from "react-router-dom";

function OrderPage() {

  // let {id} = useParams()
  let history = useHistory()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{  }</h4>
          <p>{  }</p>
          <p>{  }</p>
          <button className="btn btn-danger">Add Cart</button>|
          <button className="btn btn-danger" onClick={()=>{ history.goBack()}}>BACK</button>
        </div>
      </div>
    </div>
  )
};

export default OrderPage