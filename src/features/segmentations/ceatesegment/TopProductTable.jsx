import Table from "../../../ui/Table";
import TopProductRow from "./TopProductRow";

//Temporary Data
const data = [
  {
    Product: "Widget F",
    AvgPrice: 35.99,
    TotalSold: 100,
    Revenue: 32.99,
  },
  {
    Product: "Widget F",
    AvgPrice: 35.99,
    TotalSold: 100,
    Revenue: 32.99,
  },
  {
    Product: "Widget F",
    AvgPrice: 35.99,
    TotalSold: 100,
    Revenue: 32.99,
  },
  {
    Product: "Widget F",
    AvgPrice: 35.99,
    TotalSold: 100,
    Revenue: 32.99,
  },
  {
    Product: "Widget F",
    AvgPrice: 35.99,
    TotalSold: 100,
    Revenue: 32.99,
  },
];

function TopProductable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr" padding="0px">
      <Table.Header>
        <div>Product</div>
        <div>Avg Price</div>
        <div>Total Sold</div>
        <div>Revenue</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={(product, index) => (
          <TopProductRow product={product} key={index} />
        )}
      />
    </Table>
  );
}

export default TopProductable;
