import BillingRow from "./BillingRow";
import Table from "../../ui/Table";

//Temporary Data
const data = [
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
  {
    Invoice: "Widget A",
    ID: "001",
    Date: "03/02/2024",
    Payed: 25.99,
    Status: "Paid",
  },
];

function BillingTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr 20px" padding={"12px 30px 0px 0px"}>
      <Table.Header>
        <div>Invoice</div>
        <div>ID</div>
        <div>Date</div>
        <div>Charged</div>
        <div>Status</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={(invoice) => <BillingRow invoice={invoice} key={invoice.ID} />}
      />
    </Table>
  );
}

export default BillingTable;
