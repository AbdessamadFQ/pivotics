import { Outlet, useNavigate } from "react-router-dom";
import PageHeader from "../ui/PageHeader";
import NavList from "../ui/NavList";
import Li from "../ui/Li";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export default function Settings() {
  const navigate = useNavigate();
  return (
    <Container>
      <PageHeader title="Settings">
        manage your account and personalize your settings
      </PageHeader>
      <NavList>
        <Li
          name="My Account"
          border="#E6E0E9"
          onClick={() => navigate("/myaccount")}
        />
        <Li
          name="Subscription"
          border="#E6E0E9"
          onClick={() => navigate("/subscription")}
        />
        <Li
          name="Integration"
          border="#E6E0E9"
          onClick={() => navigate("/integrations")}
        />
      </NavList>
      <Outlet />
    </Container>
  );
}
