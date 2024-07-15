import styled from "styled-components";
import ProgressBar from "../../ui/ProgressBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function ProgressRevenue() {
  return (
    <Container>
      <ProgressBar title="Ecomerce" percentage={84.13}/>
      <ProgressBar title="Healthcare" percentage={52.83}/>
      <ProgressBar title="Social Media" percentage={23.22}/>
      <ProgressBar title="Entertainment & Toys" percentage={39.45}/>
      <ProgressBar title="Travel" percentage={24.45}/>
    </Container>
  );
}

export default ProgressRevenue;
