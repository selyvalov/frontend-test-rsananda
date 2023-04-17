import React from "react";
import { Table } from "reactstrap";

const MasterIcd = () => {
  return (
  <div className="container">
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Inggris</th>
          <th>Nama Bahasa</th>
          <th>Kode</th>
          <th>Tipe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  </div>
  );
};

export default MasterIcd;
