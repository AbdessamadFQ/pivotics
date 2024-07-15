/* eslint-disable react/prop-types */
import Table from "../../ui/Table";
import Button from "../../ui/Button";

function PriceRow({ product }) {
  return (
    <Table.Row>
      <div>{product.Product}</div>
      <div>{product.ID}</div>
      <div>{product.Stock}</div>
      <div>{product.AvgPrice}</div>
      <div>{product.SmartPrice}</div>
      <Button sizes='table' variations='clear'>Apply</Button>
    </Table.Row>
  );
}

export default PriceRow;
