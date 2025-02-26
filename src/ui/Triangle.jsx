import styled from "styled-components";

const StyledTriangle = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  bottom: -15px;
`;

function Triangle() {
  return (
    <StyledTriangle>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7321 17C10.9623 18.3333 9.03775 18.3333 8.26795 17L0.473719 3.5C-0.296082 2.16667 0.66617 0.5 2.20577 0.5L17.7942 0.5C19.3338 0.5 20.2961 2.16667 19.5263 3.5L11.7321 17Z"
          fill="white"
        />
      </svg>
    </StyledTriangle>
  );
}

export default Triangle;