import styled from "styled-components";
import Stats from "./Stats";
import Segments from "./Segments";
import PriceTable from "./PriceTable";
import MarketDemand from "./MarketDemand";
import PriceIndex from "./PriceIndex";
import Insights from "./Insights";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  row-gap: 15px;
  column-gap: 15px;
`;

// const StyledPricingDiv = styled.div`
//   display: flex;
//   gap: 12px;
// `;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <Insights />
      <MarketDemand />
      <Segments />
      <PriceTable />
      <PriceIndex />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
