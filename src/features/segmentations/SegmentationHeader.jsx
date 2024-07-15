/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h1 {
    //styleName: H2;
    margin: 0px;
    font-family: "Raleway";
    font-size: 28px;
    font-weight: 700;
    line-height: 32.87px;
  }

  & > p {
    //styleName: P1;
    margin: 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #8f939b;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
  align-items: center;
  & > button {
    all: unset;
    width: 55px;
    height: 30px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: none;
    border-bottom: 2px solid #f9fafc;

    & > span {
      ///styleName: P2;
      font-size: 10px;
      font-weight: 400;
      line-height: 15px;
      color: #8f939b;
    }
  }

  & > button:hover {
    border-bottom: 2px solid #8f939b;
    opacity: 0.8;
  }
`;

function SegmentationHeader({ title, children }) {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledTitle>
        <h1>{title}</h1>
        <p>{children}</p>
      </StyledTitle>
      <Icons>
        <button>
          <img src="/Icons/Share.png" alt="ShareIcon" />
          <span>Share</span>
        </button>
        <button>
          <img src="/Icons/Save.png" alt="SaveIcon" />
          <span>Share</span>
        </button>
        <span>
          <Button onClick={() => navigate("/segmentation/createSegment")}>
            Create Segment
          </Button>
        </span>
      </Icons>
    </StyledHeader>
  );
}

export default SegmentationHeader;
