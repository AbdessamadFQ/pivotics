import styled from "styled-components";
import ProgressBar from "../../ui/ProgressBar";

const StyledSegments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function SegmentsData() {
  return (
    <StyledSegments>
      <ProgressBar title="Registred Customers" percentage={84.13}/>
      <ProgressBar title="Elapsed Customers" percentage={52.83}/>
      <ProgressBar title="Loyal Customers" percentage={23.22}/>
      <ProgressBar title="Multi-city Customers" percentage={39.45}/>
      <ProgressBar title="New Customers" percentage={24.45}/>
    </StyledSegments>
  );
}

export default SegmentsData;
