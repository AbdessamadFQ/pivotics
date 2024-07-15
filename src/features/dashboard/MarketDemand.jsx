import styled from "styled-components";
import MarketChart from "./MarketChart";
import NavList from "../../ui/NavList";
import { useState } from "react";
import Horizontaldash from "../../ui/Horizontaldash";
import Li from "../../ui/Li";
import Heading from "../../ui/Heading";

const StyledMarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  border-radius: 15px;
  padding: 12px 18px;
`;

function MarketDemand() {
  const [chartType, setChartType] = useState("Line");
  return (
    <StyledMarketContainer>
      <Heading as="p1-b">Market Demand</Heading>
      <Horizontaldash />
      <NavList>
        <Li name="Line" onClick={() => setChartType("Line")} border="white" />
        <Li name="Bar" onClick={() => setChartType("Bar")} border="white" />
        <Li
          name="Geographic"
          onClick={() => setChartType("Geographic")}
          border="white"
        />
      </NavList>
      <MarketChart chartType={chartType} />
    </StyledMarketContainer>
  );
}

export default MarketDemand;
