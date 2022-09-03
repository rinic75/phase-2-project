import React from "react";
import { Table } from "react-bootstrap";

function Cart({ cartItem }) {
  const { title, price } = cartItem
  const renderCartItem = cartItem.map(item => {
    return (
      <tr>
        <td>1</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>example</td>
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
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        {renderCartItem}
      </tbody>
    </Table>
  )
}

export default Cart