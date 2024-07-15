import styled from "styled-components";
import SegmentsData from "./SegmentsData";
import Horizontaldash from "../../ui/Horizontaldash";
import Heading from "../../ui/Heading";

const StyledSegments = styled.div`
  width: 288px;
  /* the height is defined by the content I want it to be flexible */
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  background-color: white;
  border-radius: 15px;
  padding: 12px 18px;
`;

function Segments() {
  return (
    <StyledSegments>
      <Heading as="p1-b">
        AI Segments Discovery
        <img src="/Icons/Flash/Color.png" alt="flashIcon" />
      </Heading>
      <Horizontaldash />
      <Heading as="p2" style={{color:"#8f939b"}}>
        Recently discovered customer segmentation based off AI aggregation of
        recent sales data.
      </Heading>
      <SegmentsData />
    </StyledSegments>
  );
}

export default Segments;
