/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledLi = styled.li`
  border-bottom: 2px solid ${(props) => props.border};
  padding: 3px 15px;
  list-style: none;
  height: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  /* Dark Gray */
  color: #8f939b;

  &:hover {
    border-bottom: 2px solid rgba(22, 214, 168, 1);
    color: rgba(22, 214, 168, 1);
  }
`;

function Li({ name, onClick, border }) {
  return (
    <StyledLi onClick={onClick} border={border}>
      {name}
    </StyledLi>
  );
}

export default Li;
