import styled from "styled-components";

const StyledNav = styled.ul`
  all: unset;
  margin-top: 18px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  cursor: default;
`;

const StyledLi = styled.li`
  all: unset;
  border-bottom: 1px solid #e6e0e9;
  padding: 10px 8px;
  height: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  /* Dark Gray */
  color: #8f939b;

  &:hover {
    border-bottom: 2px solid rgba(22, 214, 168, 1);
    color: rgba(22, 214, 168, 1);
  }
`;

function SegmentationNav() {
  return (
    <StyledNav>
      <StyledLi>My Segments</StyledLi>
      <StyledLi>AI Discovery</StyledLi>
    </StyledNav>
  );
}

export default SegmentationNav;
