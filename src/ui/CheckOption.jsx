/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledCheckOption = styled.div`
  padding-left: 5px;
  display: flex;
  width: 55px;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  /* Hide the default checkbox */
  display: none;

  &:checked + label {
    color: black; /* Change label color when checked */
  }

  &:checked + label::before {
    background-color: #16d6a8; /* Background color of the checkbox when checked */
    border: none;
  }

  &:checked + label::after {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M2.20842 5.54183L0.125092 3.4585L0.854258 2.72933L2.20842 4.0835L5.64593 0.645996L6.37509 1.37516L2.20842 5.54183Z" fill="white"/></svg>');
  }
`;

const StyledCheckbox = styled.label`
  cursor: pointer;
  color: #8f939b; /* Default color */
  position: relative;
  padding-left: 20px; /* Add padding to make room for custom checkbox */

  &::before {
    border: none;
    content: "";
    position: absolute;
    left: 0;
    width: 13px;
    height: 13px;
    border-radius: 2px;
    border: 1px solid #8f939b; /* Border color of the checkbox */
    background-color: white; /* Background color of the checkbox */
  }

  &::after {
    content: "";
    position: absolute;
    left: 1.7px;
    top: 2px;
    width: 10px;
    height: 9px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: none;
  }
`;

function CheckOption({ option }) {
  return (
    <StyledCheckOption>
      <HiddenCheckbox id={option} />
      <StyledCheckbox htmlFor={option}>{option}</StyledCheckbox>
    </StyledCheckOption>
  );
}

export default CheckOption;
