import styled from "styled-components";

const StyledInsights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 105px;
  width: 288px;
  padding: 12px 18px;
  border-radius: 15px;
  background: #dad7fe;
`;

const StyledTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: #212121;
`;

const StyledParagraphe = styled.p`
  width: 270px;
  height: 75px;
  margin: 0px;
  /* P2
Paragraph 2
*/
  font-family: "Open Sans Hebrew";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  /* Black */
  color: #212121;
`;

const StyledPagination = styled.span`
  display: flex;
  align-self: center;
`;

function Insights() {
  return (
    <StyledInsights>
      <StyledTitle>
        AI Insights
        <img src="/Icons/Flash/Color.png" alt="flashIcon" />
      </StyledTitle>
      <StyledParagraphe>
        There’s currently a spike in demand for PRODUCT on the market right now
        - it might be a good idea to adjust prices accordingly!
      </StyledParagraphe>
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
