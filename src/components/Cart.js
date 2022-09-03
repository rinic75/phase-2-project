import React from "react";
import { Table } from "react-bootstrap";

function Cart() {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>item</th>
          <th>amount</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>example</td>
          <td>example</td>
          <td>example</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Cart