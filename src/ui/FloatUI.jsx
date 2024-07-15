/* eslint-disable react/prop-types */
import { cloneElement } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 210px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  transition: all 0.5s;
  /* z-index: 1000; */
`;

const StyledModal = styled.div`
  position: relative;
  background-color: white;
  border-radius: 15px;
  height: calc(100% - 130px);
  box-sizing: border-box;
  padding: 2rem 4rem;
  margin: 82px 52px 0px 72px;
  transition: all 0.5s;
`;

const Button = styled.button`
  position: absolute;
  background: none;
  border: 1px solid white;
  padding: 0.6rem;
  border-radius: 5px;
  transition: all 0.2s;
  top: 31.5px;
  right: 31.5px;

  &:hover {
    border: 1px solid #e5e2e2;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

function FloatUI({ children }) {
  const navigate = useNavigate();

  function handleClose() {
    navigate(-1);
  }

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={handleClose}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.76757 7.99982L15.1338 2.63357C15.6226 2.14482 15.6226 1.35482 15.1338 0.866074C14.6451 0.377324 13.8551 0.377324 13.3663 0.866074L8.00007 6.23232L2.63382 0.866074C2.14507 0.377324 1.35507 0.377324 0.866318 0.866074C0.377568 1.35482 0.377568 2.14482 0.866318 2.63357L6.23257 7.99982L0.866318 13.3661C0.377568 13.8548 0.377568 14.6448 0.866318 15.1336C1.11007 15.3773 1.43007 15.4998 1.75007 15.4998C2.07007 15.4998 2.39007 15.3773 2.63382 15.1336L8.00007 9.76732L13.3663 15.1336C13.6101 15.3773 13.9301 15.4998 14.2501 15.4998C14.5701 15.4998 14.8901 15.3773 15.1338 15.1336C15.6226 14.6448 15.6226 13.8548 15.1338 13.3661L9.76757 7.99982Z"
              fill="#8F939B"
            />
          </svg>
        </Button>
        <div>{cloneElement(children, { onClose: handleClose })}</div>
      </StyledModal>
    </Overlay>,
    document.getElementById("root") // Render modal within the topnav section
  );
}

export default FloatUI;
