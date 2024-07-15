/* eslint-disable react/prop-types */
import styled from "styled-components";
import Triangle from "../../ui/Triangle";
import Heading from "../../ui/Heading";
import Horizontaldash from "../../ui/Horizontaldash";

const StatContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 166px;
  padding: 12px 18px;
  gap: 12px;
  /* White */
  background: white;
  border-radius: 15px;

  box-shadow: 0px 4px 10px 0px #00000014;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;


const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  & > :nth-child(2) {
    align-self: flex-end;
    //styleName: P2;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #8f939b;
  }
`;

function Stat({ price,color,title }) {
  return (
    <StatContainer>
      <Heading as="p1" style={{ color: "#8F939B" }}>
        {title}
      </Heading>
      <Horizontaldash />
      <StyledContent>
        <Row>
          <Heading as="h2">$ {price}</Heading>
          <span>Spent</span>
        </Row>
        <Heading as="p1" style={{ color }}>+ 5.06%</Heading>
      </StyledContent>
      <Triangle />
    </StatContainer>
  );
}

export default Stat;
