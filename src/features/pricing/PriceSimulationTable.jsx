import Table from "../../ui/Table";
import PriceSimulationRow from "./PriceSimulationRow";

//Temporary Data
const data = [
  {
    Product: "Widget A",
    ID: "001",
    Stock: 100,
    AvgPrice: 25.99,
    SmartPrice: 22.99,
  },
  {
    Product: "Widget B",
    ID: "002",
    Stock: 75,
    AvgPrice: 19.99,
    SmartPrice: 17.99,
  },
  {
    Product: "Widget C",
    ID: "003",
    Stock: 50,
    AvgPrice: 15.99,
    SmartPrice: 13.99,
  },
  {
    Product: "Widget D",
    ID: "004",
    Stock: 25,
    AvgPrice: 29.99,
    SmartPrice: 27.99,
  },
  {
    Product: "Widget E",
    ID: "005",
    Stock: 200,
    AvgPrice: 10.99,
    SmartPrice: 8.99,
  },
  {
    Product: "Widget F",
    ID: "006",
    Stock: 150,
    AvgPrice: 35.99,
    SmartPrice: 32.99,
  },
  {
    Product: "Widget D",
    ID: "007",
    Stock: 25,
    AvgPrice: 29.99,
    SmartPrice: 27.99,
  },
  {
    Product: "Widget E",
    ID: "008",
    Stock: 200,
    AvgPrice: 10.99,
    SmartPrice: 8.99,
  },
  {
    Product: "Widget F",
    ID: "009",
    Stock: 150,
    AvgPrice: 35.99,
    SmartPrice: 32.99,
  },
];

function PriceSimulationTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr" padding="0px">
      <Table.Header>
        <div>Product</div>
        <div>Current Price</div>
        <div>Price After Change</div>
        <div>Margin</div>
        <div>Profit</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={(product) => (
          <PriceSimulationRow product={product} key={product.ID} />
        )}
      />
    </Table>
  );
}

export default PriceSimulationTable;
