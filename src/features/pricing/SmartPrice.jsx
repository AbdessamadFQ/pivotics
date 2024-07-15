import styled from "styled-components";
import Horizontaldash from "../../ui/Horizontaldash";
import Title from "../../ui/Title";
import Category from "./Category";
import Heading from "../../ui/Heading";

const StyledSmartPrice = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;
  background: white;
  padding: 12px 18px;
  border-radius: 15px;
  width: 288px;
`;

const Header = styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`

function SmartPrice() {
  return (
    <StyledSmartPrice>
      <Horizontaldash />
      <Header>
        <Title>Smart Price</Title>
        <Heading as="p2" style={{ color: "#8F939B" }}>
          Edit what smart price factors into generating pricing..
        </Heading>
      </Header>
      <Category
        title="Category Title"
        options={[
          "option",
          "option1",
          "option2",
          "option3",
          "option4",
          "option5",
          "option6",
        ]}
      />
      <Category
        title="Category Title"
        options={[
          "option21",
          "option22",
          "option23",
          "option24",
          "option25",
          "option26",
        ]}
      />
      <Category
        title="Category Title"
        options={["option31", "option32", "option33", "option34"]}
      />
    </StyledSmartPrice>
  );
}

export default SmartPrice;
