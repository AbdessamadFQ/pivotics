/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledIntegration = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  padding: 12px 18px;
  gap: 12px;
  border-radius: 4px;
  background-color: #ffffff;
`;

const Button = styled.button`
  position: absolute;
  right: 18px;
  top: 12px;
  background-color: ${(props) => (props.connected ? "#e2fbd7" : "#F9FAFC")};
  color: ${(props) => (props.connected ? "#34b53a" : "#8F939B")};
  box-shadow: 0px 4px 10px 0px #00000014;
  /* width: 67px; */
  /* height: 24px; */
  padding: 4px 8px;
  gap: 10px;
  border-radius: 4px;
  border: none;

  //styleName: P2;
  font-family: Open Sans Hebrew;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ImgBox = styled.div`
  width: 39px;
  height: 39px;
  background-color: #d9d9d9;
`;

const P2 = styled.p`
  //styleName: P2;
  font-family: Open Sans Hebrew;
  font-size: 10px;
  font-weight: 400;
  text-align: left;
  margin: 0px;
  line-height: 15px;
  color: #8f939b;
`;

const P1 = styled.p`
  //styleName: P1;
  margin: 0px;
  font-family: Open Sans Hebrew;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
`;

const Line = styled.span`
  width: 100%;
  height: 0.5px;
  background-color: #8f939b;
`;

const Button2 = styled.button`
  position: absolute;
  right: 18px;
  bottom: 12px;
  color: ${(props) => (props.connected ? "#ff3a29" : "#34b53a")};
  padding: 4px 8px;
  gap: 10px;
  border: none;
  background: none;

  //styleName: P2;
  font-family: Open Sans Hebrew;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;

function Integration({ connected }) {
  return (
    <StyledIntegration>
      <Button connected={connected}>
        {connected ? "Connected" : "Unconnected"}
      </Button>
      <Container>
        <ImgBox></ImgBox>
        <div>
          <P1>Platform Name</P1>
          <P2>Description of platform and integrations available</P2>
        </div>
        <Line></Line>
      </Container>
      <Button2 connected={connected}>
        {connected ? "Remove" : "Connect"}
      </Button2>
    </StyledIntegration>
  );
}

export default Integration;
