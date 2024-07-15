import styled from "styled-components";
import Button from "../../ui/Button";
import Rule from "./Rule";
import MarketLineChart from "../dashboard/MarketLineChart";
import PriceSimulationTable from "./PriceSimulationTable";
import Horizontaldash from "../../ui/Horizontaldash";
import Title from "../../ui/Title";

const StyledPricingSimContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: white;
  position: relative;
  border-radius: 15px;
  padding: 12px 18px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 28px;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin: 10px 0px 0px 15px;
`;
const data = [
  { year: 2014, ProductA: 0, ProductB: 0, ProductC: 0, ProductD: 0 },
  { year: 2015, ProductA: 300, ProductB: 139, ProductC: 221, ProductD: 150 },
  { year: 2016, ProductA: 200, ProductB: 980, ProductC: 229, ProductD: 190 },
  { year: 2017, ProductA: 278, ProductB: 390, ProductC: 200, ProductD: 180 },
  { year: 2018, ProductA: 189, ProductB: 480, ProductC: 218, ProductD: 170 },
  { year: 2019, ProductA: 239, ProductB: 380, ProductC: 250, ProductD: 160 },
  { year: 2020, ProductA: 349, ProductB: 430, ProductC: 210, ProductD: 150 },
  { year: 2021, ProductA: 450, ProductB: 290, ProductC: 230, ProductD: 140 },
  { year: 2022, ProductA: 300, ProductB: 300, ProductC: 240, ProductD: 130 },
  { year: 2023, ProductA: 400, ProductB: 320, ProductC: 260, ProductD: 120 },
];

function PricingSimulation() {
  return (
    <StyledPricingSimContainer>
      <Horizontaldash />
      <StyledHeader>
        <Title>Pricing Simulation</Title>
        <div style={{ display: "flex", gap: 10 }}>
          <Button sizes="smallx" variations="secondary">
            Add new Rule
          </Button>
          <Button sizes="smallx">Apply</Button>
        </div>
      </StyledHeader>
      <Rule />
      <StyledContent>
        <MarketLineChart data={data} />
        <PriceSimulationTable />
      </StyledContent>
    </StyledPricingSimContainer>
  );
}

export default PricingSimulation;
