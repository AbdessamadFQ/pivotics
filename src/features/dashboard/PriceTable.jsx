import PriceRow from "./PriceRow";
import Table from "../../ui/Table";
import Horizontaldash from "../../ui/Horizontaldash";

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
];

function PriceTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr 1fr">
      <Horizontaldash/>
      <Table.TableTitle title="Price Change Alerts" />
      <Table.Header>
        <div>Product</div>
        <div>ID</div>
        <div>Stock</div>
        <div>Avg Price</div>
        <div>
          <span>Smart Price </span>
          <img src="/Icons/Flash/Color.png" alt="flashIcon" />
        </div>
        <div>Action</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={(product) => <PriceRow product={product} key={product.ID} />}
      />
    </Table>
  );
}

export default PriceTable;
