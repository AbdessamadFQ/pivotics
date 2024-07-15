import styled from "styled-components";
import Select from "../../ui/Select";
import Title from "../../ui/Title";

const StyledTopContainder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding:0px 12px 12px 12px;
  border-bottom : 1px solid grey;
`;

const StyledLeftContainder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledRightContainder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  gap:4px;
`

const Row = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;

function Rule() {
  return (
    <StyledTopContainder>
      <StyledLeftContainder>
        <Title>Apply to:</Title>
        <Select />
      </StyledLeftContainder>
      <StyledRightContainder>
        <Title>Rule:</Title>
        <StyledForm>
          <Row>
            <input name="r1" id="priceR1" type="radio" />
            <span>&nbsp;My Price should be &nbsp;</span>
            <Select />
            <span>&nbsp; &nbsp;</span>
            <Select />
            <span>&nbsp;than the&nbsp;</span>
            <Select />
            <span>&nbsp;of&nbsp;</span>
            <Select />
            <span>&nbsp;but not lower than&nbsp;</span>
            <Select />
          </Row>
          <Row>
            <input name="r1" id="priceR2" type="radio" />
            <span>&nbsp;My Price should be equal to the &nbsp;</span>
            <Select />
            <span>&nbsp;of&nbsp;</span>
            <Select />
          </Row>
        </StyledForm>
      </StyledRightContainder>
    </StyledTopContainder>
  );
}

export default Rule;
