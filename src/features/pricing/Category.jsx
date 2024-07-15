/* eslint-disable react/prop-types */
import styled from "styled-components";
import CheckOption from "../../ui/CheckOption";
import Heading from "../../ui/Heading";

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

function Category({ title, options }) {
  return (
    <StyledCategory>
      <Heading as="p2">{title}</Heading>
      <StyledForm>
        {options.map((option, index) => (
          <CheckOption option={option} key={index} />
        ))}
      </StyledForm>
    </StyledCategory>
  );
}

export default Category;
