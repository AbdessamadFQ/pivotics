import styled from "styled-components";

const StyledNav = styled.ul`
  padding: 0px;
  margin-top: 5px;
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: default;
`;

// eslint-disable-next-line react/prop-types
function NavList({ children }) {
  return <StyledNav>{children}</StyledNav>;
}

export default NavList;
