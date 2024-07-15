/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  border: 1px solid #8f939b;
  width: 210px;
  height: 30px;
  gap: 10px;
  border-radius: 4px;
  padding: 4px 0px 4px 16px;
`;

const StyledInput = styled.input`
  width: 194px;
  height: 22px;
  padding: 4px 0px 4px 4px;
  border: none;
  //styleName: P2;
  font-family: Open Sans Hebrew;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -9px;
  height: 15px;
  font-family: "Open Sans Hebrew";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  color: #8f939b;
  background-color: white;
  padding: 0px 4px;
`;

function Input({ name }) {
  return (
    <InputContainer>
      <Label>{name}</Label>
      {name === "Name" && <StyledInput type="text" id={name} placeholder="John Doe"/>}
      {name === "Username" && <StyledInput type="text" id={name} placeholder="John_99"/>}
      {name === "Password" && <StyledInput type="password" id={name} placeholder="*********"/>}
      {name === "Email" && <StyledInput type="text" id={name} placeholder="JohnDoe@gmail.com"/>}
      {name === "PhoneNumber" && <StyledInput type="phone" id={name} placeholder="(+212) 6 01 84 99 28"/>}
    </InputContainer>
  );
}

export default Input;
