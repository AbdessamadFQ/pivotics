import styled from "styled-components";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import Input from "../../ui/Input";
import BillingTable from "./BillingTable";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 18px;
  gap: 48px;
  border-radius: 15px;
  width: 100%;
  background-color: white;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 237px;
  /* height: 244px; */
  padding: 24px 18px;
  gap: 24px;
  border-radius: 15px;
  background-color: #16d6a8;
  color: #ffffff;
`;

const P1 = styled.span`
  //styleName: P1;
  margin: 0px;
  font-family: "Open Sans Hebrew";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

const H3 = styled.h3`
  //styleName: H3 Bold
  margin: 4px 0px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.13px;
  text-align: left;
`;

const P2 = styled.p`
  //styleName: P2;
  margin: 0px;
  font-family: Open Sans Hebrew;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;

const StyledUl = styled.ul`
  margin-top: 12px;
  font-family: Open Sans Hebrew;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const NewCardBtn = styled.button`
  //styleName: P2;
  all: unset;
  font-family: Open Sans Hebrew;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: right;
  color: #8f939b;
`;

function Subscription() {
  return (
    <Container>
      <LeftContainer>
        <Section>
          <Title>Payment Method</Title>
          <Row>
            <InputSection>
              <Input name="Name" />
              <Input name="Expiry Date" />
            </InputSection>
            <InputSection>
              <Input name="Name" />
              <Input name="Expiry Date" />
              <NewCardBtn>+ New Card</NewCardBtn>
            </InputSection>
          </Row>
        </Section>

        <Section>
          <Title>Payment Method</Title>
          <Row>
            <InputSection>
              <Input name="Full Name" />
              <Input name="Adress 1" />
            </InputSection>
            <InputSection style={{ alignSelf: "flex-end" }}>
              <Input name="Adress 2" />
            </InputSection>
          </Row>
        </Section>

        <div>
          <Title>Payment Method</Title>
          <BillingTable />
        </div>
        
      </LeftContainer>
      <RightContainer>
        <P1>Your Plan</P1>
        <div>
          <H3>Pro Annual</H3>
          <P2>Renews on March 16th, 2025</P2>
          <StyledUl>
            <li>Benefit description</li>
            <li>Benefit description</li>
            <li>Benefit description</li>
          </StyledUl>
        </div>
        <Button>Edit Subscription</Button>
      </RightContainer>
    </Container>
  );
}

export default Subscription;
