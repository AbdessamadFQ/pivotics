import styled from "styled-components";
import Stat from "./Stat";

const StyledStats = styled.div`
  display: flex;
  gap: 12px;
`;

const Scroll = styled.div`
  overflow-x: scroll;
  height: 132px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Stats() {
  return (
    <Scroll>
      <StyledStats>
        <Stat title="Loyal Customers" />
        <Stat title="Registred Customers" />
        <Stat title="Elapsed Customers" />
        <Stat title="New Customers" />
        <Stat title="Online Customers" />
        <Stat title="Multi-city Customers" />
      </StyledStats>
    </Scroll>
  );
}

export default Stats;
