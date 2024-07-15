import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import NavBottom from "./NavBottom";

const SideBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 42px;
  padding: 20px;
  border-radius: 0px 0px 15px 0px;
  background: #01213a;
  color: white;
  grid-row: 1/-1;
`;
const NavContainer = styled.div`
  display: grid;
  width: 190px;
  gap: 50px;
`;
function Sidebar() {
  return (
    <SideBarContainer id="sidebar">
      <NavContainer>
        <Logo />
        <Nav />
      </NavContainer>
      <NavBottom />
    </SideBarContainer>
  );
}

export default Sidebar;
