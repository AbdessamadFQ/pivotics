/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledMain = styled.div`
  padding: 20px 40px;
  overflow: scroll;
`;

function Main() {
  return (
    <StyledMain id="main">
      <Outlet />
    </StyledMain>
  );
}

export default Main;
