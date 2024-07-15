/* eslint-disable react/prop-types */
import Table from "../../ui/Table";

function PriceSimulationRow({ product }) {
  return (
    <Table.Row>
      <div>{product.Product}</div>
      <div>{product.ID}</div>
      <div>{product.Stock}</div>
      <div>{product.AvgPrice}</div>
      <div>{product.SmartPrice}</div>
    </Table.Row>
  );
}

export default PriceSimulationRow;
