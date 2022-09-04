import React from "react";
import { Table } from "react-bootstrap";

function Cart({ cartItem }) {

  const totalPrice = cartItem.reduce((acc, item) => acc + parseInt(item.price), 0)

  const renderCartItem = cartItem.map((item, i) => {
    return (
      <tr>
        <td>{i+1}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
      </tr>
    )
  }
  )

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {renderCartItem}
        <tr>
        <td>Total</td>
        <td></td>
        <td>{totalPrice}</td>
      </tr>
      </tbody>
    </Table>
  )
}

export default Cart