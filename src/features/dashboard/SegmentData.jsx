import styled from "styled-components";

const StyledSegment = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  gap: 6px;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledProgress = styled.progress`
  --color: black; /* the progress color */
  --background: rgba(249, 250, 252, 1); /* the background color */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 100%;
  height: 12px;
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

const StyledHeadingTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #212121;
`;

const StyledPercentage = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  color: #8f939b;
`;

function SegmentData() {
  return (
    <StyledSegment>
      <StyledHeading>
        <StyledHeadingTitle>Registered Customer</StyledHeadingTitle>
        <StyledPercentage>84.13%</StyledPercentage>
      </StyledHeading>
      <div>
        <StyledProgress id="file" value="32" max="100" width="100%" />
      </div>
    </StyledSegment>
  );
}

export default SegmentData;
