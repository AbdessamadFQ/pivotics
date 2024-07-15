/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";

const StyledSegment = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  gap: 11px;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Progress = styled.progress`
  /* margin:0px;
  padding:0px; */
  --color: black; /* the progress color */
  --background: rgba(249, 250, 252, 1); /* the background color */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 100%;
  height: 8px;
  border-radius: 20em;
  background: var(--background);

  &::-webkit-progress-bar {
    border-radius: 20em;
    background: var(--background);
  }

  &::-webkit-progress-value {
    border-radius: 20em;
    background: var(--color);
  }

  &::-moz-progress-bar {
    border-radius: 20em;
    background: var(--color);
  }
`;


function ProgressBar({title,percentage}) {
  return (
    <StyledSegment>
      <StyledHeading>
        <Heading as="p2">{title}</Heading>
        <Heading as="p2" style={{color:"#8f939b"}}>{percentage}%</Heading>
      </StyledHeading>
        <Progress id="file" value={percentage} max="100" width="100%" />
    </StyledSegment>
  );
}

export default ProgressBar;
