import styled from "styled-components";
import PricePieChart from "./PricePieChart";
import Horizontaldash from "../../ui/Horizontaldash";
import Heading from "../../ui/Heading";

const StyledPriceIndex = styled.div`
  position:relative;
  padding: 12px 18px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
`;

function PriceIndex() {
  return (
    <StyledPriceIndex>
      <Heading as="p1-b">Price Index</Heading>
      <Horizontaldash/>
      <PricePieChart/>
    </StyledPriceIndex>
  );
}

export default PriceIndex;