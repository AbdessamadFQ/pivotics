/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h1 {
    //styleName: H2;
    margin: 0px;
    font-family: "Raleway";
    font-size: 28px;
    font-weight: 700;
    line-height: 32.87px;
  }

  & > p {
    //styleName: P1;
    margin: 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #8f939b;
  }
`;


function Header() {
  return (
    <StyledHeader>
      <StyledTitle>
        <h1>Create New Segment</h1>
        <p>Use the segment builder to  refine your segment criteria</p>
      </StyledTitle>
    </StyledHeader>
  );
}

export default Header;
