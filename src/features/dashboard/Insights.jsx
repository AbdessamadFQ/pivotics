import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledInsights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 288px;
  padding: 12px 18px;
  border-radius: 15px;
  background: #dad7fe;
`;

const StyledPagination = styled.span`
  display: flex;
  align-self: center;
`;

function Insights() {
  return (
    <StyledInsights>
      <Heading as="p1-b">
        AI Insights
        <img src="/Icons/Flash/Color.png" alt="flashIcon" />
      </Heading>
      <Heading as="p2">
        There’s currently a spike in demand for <span style={{fontWeight:"bold"}}>PRODUCT</span> on the market right now
        - it might be a good idea to adjust prices accordingly!
      </Heading>
      <StyledPagination>
        <svg
          width="18"
          height="4"
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="#4339F2" />
          <circle cx="9" cy="2" r="2" fill="white" />
          <circle cx="16" cy="2" r="2" fill="white" />
        </svg>
      </StyledPagination>
    </StyledInsights>
  );
}

export default Insights;
