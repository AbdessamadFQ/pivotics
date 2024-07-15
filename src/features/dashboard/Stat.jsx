/* eslint-disable react/prop-types */
import styled from "styled-components";
import GraphicStat from "../../ui/GraphicStat";
import Heading from "../../ui/Heading";
import Horizontaldash from "../../ui/Horizontaldash";

const StyledState = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 166px;
  padding: 12px 18px;
  margin: 0px;
  gap: 12px;
  /* White */
  background: white;
  border-radius: 15px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

function Stat({ color }) {
  return (
    <StyledState>
      <Heading as="p1" style={{ color: "#8F939B" }}>
        Total Revenue
      </Heading>
      <Horizontaldash />
      <StyledContent>
        <Heading as="h2">$ 67,234</Heading>
        <Heading as="p1" style={{ color }}>
          + 5.06%
        </Heading>
      </StyledContent>
      <GraphicStat color={color} />
    </StyledState>
  );
}

export default Stat;
