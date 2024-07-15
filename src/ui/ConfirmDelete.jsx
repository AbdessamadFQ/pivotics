/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button2 from "./Button2";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, onClose }) {
  return (
    <StyledConfirmDelete>
      <h3>Delete {resourceName}</h3>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button2 variations="danger" onClick={onClose}>Cancel</Button2>
        <Button2 variations="danger" onClick={onConfirm}>
          Delete
        </Button2>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
