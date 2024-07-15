import styled from "styled-components";
import NavItem from "./NavItem";

const StyledNavItems = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    transition: all 0.3s;
  }
`;

function Nav() {
  return (
    <StyledNavItems>
      <NavItem
        icon="./public/Icons/Grid.png"
        to="/dashboard"
        text="Dashboard"
      />
      <NavItem
        icon="./public/Icons/Pricetag.png"
        to="/pricing"
        text="Pricing"
      />
      <NavItem
        icon="./public/Icons/Persones.png"
        to="/segmentation"
        text="Segmentation"
      />
      <NavItem icon="./public/Icons/Up.png" to="/analytics" text="Analytics" />
      <NavItem
        icon="./public/Icons/Vector.png"
        to="/myaccount"
        text="Settings"
      />
    </StyledNavItems>
  );
}

export default Nav;
