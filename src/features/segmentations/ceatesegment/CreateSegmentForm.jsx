/* eslint-disable react/prop-types */
import styled from "styled-components";
import Header from "./Header";
import Select from "../../../ui/Select";
import Button from "../../../ui/Button";
import TopProductable from "./TopProductTable";
import BaseChart from "./BaseChart";

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 0px 12px;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 80vh; // this value impact the scrolling need more analyses
`;

const LeftContainer = styled.div`
  border-right: 1px solid grey;
  display: flex;
  /* overflow-y: scroll; */
  flex-direction: column;
  gap: 32px;
  width: 100%;
  /* height: 100%; */
`;

const SectionColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  font-size: 10px;
  flex-wrap: wrap;
  align-items: center; //ok
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  gap: 8px;
`;

const H1Title = styled.h1`
  //styleName: P1 Bold;
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  width: 200px;
  height: 20px;
`;

const PTitle = styled.p`
  //styleName: P1 Bold;
  align-content: center;
  margin: 0px;
  padding: 0px;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  color: #8f939b;
  width: 200px;
  height: 20px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 12px;
  min-width: 300px;
  height: 100%;
`;

const StyledSegmentSize = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  gap: 12px;
`;

const StyledSegmentNumber = styled.div`
  //styleName: H2;
  font-family: Raleway;
  font-size: 28px;
  font-weight: 700;
  line-height: 32.87px;
  text-align: left;
`;

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 15px;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-end;
`;

function CreateSegmentForm({ onConfirm, onClose }) {
  return (
    <StyledFormContainer>
      <Header />
      <Container>
        <LeftContainer>
          <SectionColumn>
            <H1Title>All Customers who</H1Title>
            <FormContent>
              <Row>
                <span>have the property</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <span>and</span>
                <Select />
                <Select />
                <Select />
                <span>and</span>
                <Select />
              </Row>
              <Row>
                <span>and</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <span>and uses</span>
                <Select />
                <Select />
              </Row>
              <Row>
                <PTitle>+ New Rule</PTitle>
              </Row>
            </FormContent>
          </SectionColumn>

          <H1Title>Filter by</H1Title>

          <SectionColumn style={{ marginTop: -20 }}>
            <PTitle>Orders</PTitle>
            <FormContent>
              <Row>
                <span>with</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <span>and</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <span>and</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <span>and</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <PTitle>+ New Rule</PTitle>
              </Row>
            </FormContent>
          </SectionColumn>

          <SectionColumn style={{ marginTop: -10 }}>
            <PTitle>Orders</PTitle>
            <FormContent>
              <Row>
                <span>members with</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <span>and members of</span>
                <Select />
                <Select />
                <Select />
              </Row>
              <Row>
                <PTitle>+ New Rule</PTitle>
              </Row>
            </FormContent>
          </SectionColumn>
        </LeftContainer>

        <RightContainer style={{ gap: 36 }}>
          <SectionRow>
            <StyledSegmentSize>
              <H1Title style={{ width: "auto" }}>Segment Size</H1Title>
              <StyledSegmentNumber>12, 345</StyledSegmentNumber>
            </StyledSegmentSize>
            <StyledSegmentSize>
              <H1Title
                style={{ width: "auto", paddingBottom: "15px", height: 0 }}
              >
                Customer Base
              </H1Title>
              <div style={{height:"60px"}}>
                <BaseChart />
              </div>
            </StyledSegmentSize>
          </SectionRow>

          <SectionRow>
            <StyledTableContainer>
              <H1Title>Top Product</H1Title>
              <TopProductable />
            </StyledTableContainer>
          </SectionRow>
        </RightContainer>
      </Container>

      <ButtonContainer>
        <Button variations="danger" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Create Segment</Button>
      </ButtonContainer>
    </StyledFormContainer>
  );
}

export default CreateSegmentForm;
