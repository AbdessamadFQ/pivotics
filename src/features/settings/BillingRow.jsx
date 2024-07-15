/* eslint-disable react/prop-types */
import Table from "../../ui/Table";

function BillingRow({ invoice }) {
  return (
    <Table.Row>
      <div>{invoice.Invoice}</div>
      <div>{invoice.ID}</div>
      <div>{invoice.Date}</div>
      <div>{invoice.Payed}</div>
      <div style={{color:"#34B53A"}}>{invoice.Status}</div>
    </Table.Row>
  );
}

export default BillingRow;
