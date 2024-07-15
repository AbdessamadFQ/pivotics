import styled, { css } from "styled-components";

const Heading = styled.h1`
  margin: 0px;
  font-family: "Raleway";
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 40px;
      font-weight: 700;
    `};

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 28px;
      font-weight: 700;
    `};

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 18px;
      font-weight: 400;
    `};

  ${(props) =>
    props.as === "h3-b" &&
    css`
      font-size: 18px;
      font-weight: 700;
    `};

  ${(props) =>
    props.as === "p1" &&
    css`
      font-family: "Open Sans Hebrew";
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    `};

  ${(props) =>
    props.as === "p1-b" &&
    css`
      font-family: "Open Sans Hebrew";
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
    `};

  ${(props) =>
    props.as === "p2" &&
    css`
      font-family: "Open Sans Hebrew";
      font-size: 10px;
      font-weight: 400;
      line-height: 15px;
    `};

  ${(props) =>
    props.as === "p2-b" &&
    css`
      font-family: "Open Sans Hebrew";
      font-size: 10px;
      font-weight: 700;
      line-height: 15px;
    `};
`;

export default Heading;
