import styled, { css } from "styled-components";

const sizes = {
  table: css`
    font-family: "Open Sans Hebrew";
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    width: 70px;
    height: 18px;
    border-radius: 2px;
  `,
  smallx: css`
    font-family: "Open Sans Hebrew";
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    padding: 6px 19.5px;
    border-radius: 2px;
  `,

  small: css`
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    padding: 12px 24px;
    border-radius: 4px;
  `,
  medium: css`
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 16px 28px;
    border-radius: 4px;
  `,
  large: css`
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 20px 42px;
    border-radius: 4px;
  `,
};

const variations = {
  primary: css`
    color: white;
    background-color: #16d6a8;

    &:hover {
      background-color: #54e4c3;
    }
  `,

  clear: css`
    color: #8f939b;
    background-color: #f9fafc;

    &:hover {
      color: white;
      background-color: #16d6a8;
    }
  `,

  secondary: css`
    color: white;
    background: #8f939b;

    &:hover {
      background-color: #aaafb9;
    }
  `,

  danger: css`
    color: white;
    background-color: red;

    &:hover {
      background-color: #f56161;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 4px;
  margin:0px;
  /* box-shadow: var(--shadow-sm); */

  ${(props) => sizes[props.sizes]}
  ${(props) => variations[props.variations]}
`;
Button.defaultProps = {
  variations: "primary",
  sizes: "small",
};

export default Button;
