import styled from "styled-components";
import Stat from "./Stat";

const StyledStats = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 12px;
`;

function Stats() {
  return (
    <StyledStats>
      <Stat color="#34b53a" />
      <Stat color="#34b53a" />
      <Stat color="red" />
    </StyledStats>
  );
}

export default Stats;
