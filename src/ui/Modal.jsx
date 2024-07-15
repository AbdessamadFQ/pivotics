/* eslint-disable react/prop-types */
import React, { cloneElement } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useModal } from "../context/ModalContext";

const StyledModal = styled.div`
  background-color: white;
  border-radius: 15px;
  height: calc(100% - 130px);
  box-sizing: border-box;
  padding: 3.2rem 4rem;
  margin: 72px 52px;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

function Modal({ children }) {
  return { children };
}

function Open({ children, opens }) {
  const { open } = useModal();
  return React.cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { openName, close } = useModal();
  const ref = useOutsideClick(close, true);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>X</Button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.getElementById("topnav") // Render modal within the topnav section
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
