import styled from "styled-components";
import PageHeader from "./PageHeader";
import Title from "../../ui/Title";
import Horizontaldash from "../../ui/Horizontaldash";
import MarketLineChart from "../dashboard/MarketLineChart";
import Select from "../../ui/Select";
import SegmentsData from "./ProgressRevenue";
import MarketBarChart from "./MarketBarChart";

const AnalyticsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 15px;
`;

const LeftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 420px;
  background-color: white;
  border-radius: 15px;
  padding: 12px 18px;
`;

const RightContainer = styled.div`
  position: relative;
  height: 420px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  padding: 12px 18px;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  font-size: 10px;
  flex-wrap: wrap;
  align-items: center; //ok
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  gap: 8px;
`;

const P1 = styled.p`
  font-family: "Open Sans Hebrew";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #8f939b;
  margin: 0px;
`;

const Line = styled.div`
  border: 0.5px solid #8f939b;
  opacity: 0.5;
  height: 0.2px;
  height: 0px;
  margin-bottom: 4px;
`;

const data = [
  { year: 2014, ProductA: 0, ProductB: 0 },
  { year: 2015, ProductA: 300, ProductB: 139 },
  { year: 2016, ProductA: 200, ProductB: 980 },
  { year: 2017, ProductA: 278, ProductB: 390 },
  { year: 2018, ProductA: 189, ProductB: 480 },
  { year: 2019, ProductA: 239, ProductB: 380 },
  { year: 2020, ProductA: 349, ProductB: 430 },
  { year: 2021, ProductA: 450, ProductB: 290 },
  { year: 2022, ProductA: 300, ProductB: 300 },
  { year: 2023, ProductA: 400, ProductB: 320 },
];

const data2 = [
  { UserStep: "User Step", total: 100 },
  { UserStep: "User Step", total: 82.67 },
  { UserStep: "User Step", total: 50.24 },
  { UserStep: "User Step", total: 48.24 },
  { UserStep: "User Step", total: 27.36 },
];

const data3 = [
  { UserStep: "Pre Price Change", total: 312 },
  { UserStep: "Post Price Change", total: 439 },
];

function AnalyticsLayout() {
  return (
    <>
      <PageHeader />
      <AnalyticsContainer>
        <LeftContainer>
          <Title>Revenue Trends</Title>
          <Horizontaldash />
          <Row style={{ alignSelf: "flex-end" }}>
            <span>Category</span>
            <Select />
            <span>Time</span>
            <Select />
            <span>Chart</span>
            <Select />
            <span>Compare with</span>
            <Select />
          </Row>
          <Line></Line>
          <MarketLineChart data={data} />
        </LeftContainer>
        <RightContainer>
          <Title>Revenue By Industry</Title>
          <Horizontaldash />
          <Row style={{ justifyContent: "space-between" }}>
            <P1>Last 30 Days</P1>
            <Select />
          </Row>
          <SegmentsData />
        </RightContainer>
        <LeftContainer>
          <Title>Customer Behavior</Title>
          <Horizontaldash />
          <Row style={{ justifyContent: "space-between", marginBottom: 12 }}>
            <P1>27.36% Completion Rate</P1>
            <Row>
              <span>Category</span>
              <Select />
              <span>Time</span>
              <Select />
              <span>Product</span>
              <Select />
            </Row>
          </Row>
          <MarketBarChart data={data2} color={["#01213A"]} />
        </LeftContainer>
        <RightContainer>
          <Title>Impact Analysis</Title>
          <Horizontaldash />
          <Row style={{ alignSelf: "flex-end", marginBottom: 12 }}>
            <span>Product</span>
            <Select />
            <span>Category</span>
            <Select />
          </Row>
          <MarketBarChart data={data3} color={["#01213A", "#16D6A8"]} />
        </RightContainer>
      </AnalyticsContainer>
    </>
  );
}

export default AnalyticsLayout;
