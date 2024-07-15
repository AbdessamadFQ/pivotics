import styled from "styled-components";
import Title from "../../ui/Title";
import Integration from "./Integration";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 50px;
  column-gap: 50px;
  row-gap: 24px;
  flex-wrap: wrap;
`;

function Integrations() {
  return (
    <>
      <Container>
        <Title>My Integrations</Title>
        <FlexContainer>
          <Integration connected={true} />
          <Integration connected={true} />
          <Integration connected={true} />
          <Integration connected={true} />
        </FlexContainer>
      </Container>

      <Container>
        <Title>Discover</Title>
        <FlexContainer>
          <Integration />
          <Integration />
          <Integration />
          <Integration />
          <Integration />
          <Integration />
        </FlexContainer>
      </Container>
    </>
  );
}

export default Integrations;
