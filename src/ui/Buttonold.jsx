/* eslint-disable react/prop-types */
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButtonTable = styled.button`
  all: unset;
  width: fit-content;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 400;
  line-height: 7px;
  display: flex;
  justify-content: center;
  color: #8f939b;
  padding: 6px 10px;
  background: #f9fafc;
  &:hover {
    color: white;
    background: #16d6a8;
  }
`;

const StyledButton = styled.button`
  all: unset;
  border-radius: 4px;
  width: fit-content;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 11px;
  padding: ${(props) => props.padding};
  color: white;
  background: ${(props) => props.background};

  &:hover {
    color: white;
    background: #16d6a8;
    opacity: ${(props) => (props.background === "#16D6A8" ? 0.8 : 1)};
  }
`;

function Button({ children, background, btnType, padding, onClick }) {
  if (btnType === "SmallBtn") {
    return (
      <StyledButton background={background} padding={padding} onClick={onClick} style={{alignSelf:"flex-end"}}>
        {children}
      </StyledButton>
    );
  }
  return <StyledButtonTable onClick={onClick}>{children}</StyledButtonTable>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  btnType: PropTypes.string,
};

Button.defaultProps = {
  background: "#f9fafc",
  padding: "6px 20px",
  btnType: null,
};

export default Button;
