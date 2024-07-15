import styled from "styled-components";

const StyledSelect = styled.select`
  border: none;
  border-bottom: 1px solid grey;
  height: 21.95px;

  & {
    //text stiling
    font-family: "Open Sans Hebrew";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #16d6a8;
  }
`;

function Select() {
  return (
    <StyledSelect>
      <option>All Products</option>
      <option>All Products</option>
      <option>All Products</option>
    </StyledSelect>
  );
}

export default Select;
