import styled from "styled-components";
import PriceTable from "./PriceTable";
import SmartPrice from "./SmartPrice";
import PricingSimulation from "./PricingSimulation";

const StyledPricingLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

function PricingLayout() {
  return (
    <StyledPricingLayout>
      <StyledTopContainer>
        <PriceTable />
        <SmartPrice />
      </StyledTopContainer>
      <PricingSimulation/>
    </StyledPricingLayout>
  );
}

export default PricingLayout;
