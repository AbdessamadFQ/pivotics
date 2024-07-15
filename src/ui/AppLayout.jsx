import TopNav from "./TopNav";
import Main from "./Main";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { ModalProvider } from "../context/ModalContext";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 50px auto;
  height: 100vh;
`;

function AppLayout() {
  return (
    <ModalProvider>
      <StyledAppLayout>
        <TopNav />
        <Main />
        <Sidebar />
      </StyledAppLayout>
    </ModalProvider>
  );
}

export default AppLayout;
