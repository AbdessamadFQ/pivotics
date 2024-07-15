/* eslint-disable react/prop-types */
import Table from "../../../ui/Table";

function TopProductRow({ product }) {
  return (
    <Table.Row>
      <div>{product.Product}</div>
      <div>{product.AvgPrice}</div>
      <div>{product.TotalSold}</div>
      <div>{product.Revenue}</div>
    </Table.Row>
  );
}

export default TopProductRow;
