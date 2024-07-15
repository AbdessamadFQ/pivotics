import styled from "styled-components";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 15px 18px;
  border-radius: 15px;
  background-color: white;

  & > Button {
    width: fit-content;
    align-self: flex-end;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: auto;
  gap: 42px;
`;

const InputSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 4px;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > Button {
    align-self: flex-end;
  }
`;

const Img = styled.img`
  width: 81px;
  height: 81px;
  border-radius: 20rem;
`;

const Avatar = styled.div`
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const btnStyle = {
  all: "unset",
  fontFamily: "Open Sans Hebrew",
  fontSize: "10px",
  fontWeight: 400,
  color: "#8F939B",
};

const btnStyle2 = {
  all: "unset",
  fontFamily: "Open Sans Hebrew",
  fontSize: "10px",
  fontWeight: 400,
  color: "red",
  alignSelf:"flex-end"
};

function MyAccount() {
  return (
    <Form>
      <StyledGrid>
        <Title>Pesonal information</Title>
        <InputSection>
          <StyledSection>
            <Input name="Name" />
            <Input name="Username" />
            <Input name="Password" />
          </StyledSection>
          <StyledSection>
            <Input name="Email" />
            <Input name="PhoneNumber" />
            <button style={btnStyle2}>Reset Password</button>
          </StyledSection>
        </InputSection>
        <Title>Avatar</Title>
        <Avatar>
          <Img src="\Icons\Settings\Avatar.png" href="profileImage" />
          <Column>
            <Button sizes="small" variations="secondary">
              Upload Photo
            </Button>
            <button style={btnStyle}>Delete Photo</button>
          </Column>
        </Avatar>
      </StyledGrid>
      <Button onClick={() => prompt("hello")}>Save Changes</Button>
    </Form>
  );
}

export default MyAccount;
