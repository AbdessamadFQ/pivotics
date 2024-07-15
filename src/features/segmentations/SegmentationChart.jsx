import styled from "styled-components";
import Button from "../../ui/Button";
import Chart from "./Chart";
import TopProductable from "./ceatesegment/TopProductTable";
import Insights from "./Insights";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;
  border-radius: 15px;
  padding: 12px 18px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 21px;
  align-items: center;
  width: 100%;
`;

const H3 = styled.span`
  //styleName: H3 Bold;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

const P1 = styled.span`
  font-family: "Open Sans Hebrew";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #34b53a;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CopyIcon = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  background-color: none;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 850px;
  height: 57px;
`;

const DataContainer = styled.div`
  border-top: 2px solid #afb3bb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 22px;
`;

const Title = styled.span`
  //styleName: P1;
  font-family: Open Sans Hebrew;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  color: #8f939b;
`;
const Value = styled.span`
  //styleName: H3 Bold;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.13px;
  text-align: left;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TableTitle = styled.span`
  //styleName: P1 Bold;
  font-family: Open Sans Hebrew;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;

function SegmentationChart() {
  return (
    <Container>
      <Header>
        <div>
          <H3 style={{ paddingRight: 25 }}>Loyal Customers</H3>
          <P1>+ 5.06%</P1>
        </div>
        <ButtonsContainer>
          <CopyIcon>
            <img src="/Icons/Copy.png" alt="ShareIcon" />
          </CopyIcon>
          <Button sizes="smallx" variations="primary">
            Edit Segment
          </Button>
        </ButtonsContainer>
      </Header>
      <Row>
        <Column>
          <Title>Loyal Customers</Title>
          <Value>64,268</Value>
        </Column>

        <Column>
          <Title>Total Revenue</Title>
          <Value>$ 10,268</Value>
        </Column>

        <Column>
          <Title>Project Revenue (30 days)</Title>
          <Value>64,268</Value>
        </Column>

        <Column>
          <Title>Avg. Purchase</Title>
          <Value>64,268</Value>
        </Column>

        <Column>
          <Title>Avg. Loyalty</Title>
          <Value>64,268</Value>
        </Column>
      </Row>
      <DataContainer>
        <RightContainer>
          <TableTitle>Customer Sales (12 Months)</TableTitle>
          <Chart />
        </RightContainer>
        <LeftContainer>
          <TableTitle style={{ marginBottom: 12 }}>Top Products</TableTitle>
          <TopProductable />
          <Insights />
        </LeftContainer>
      </DataContainer>
    </Container>
  );
}

export default SegmentationChart;
