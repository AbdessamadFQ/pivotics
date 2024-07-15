/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledGraphic = styled.span`
  position: absolute;
  right: 0%;
  top: ${(props) => props.color === "red" ? "40%": "30%"};
  z-index: 10;
`;

function GraphicStat({ color }) {
  return color === "red" ? (
    <StyledGraphic color={color}>
      <svg
        width="86"
        height="52"
        viewBox="0 0 86 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.46472 19.8568C10.3851 19.666 11.1493 13.649 16.7687 11.8483C22.3881 10.0477 25.1937 31.9836 31.6582 32.6001C38.1227 33.2167 39.812 4.33148 45.5828 5.73502C51.3537 7.13856 52.0484 20.1544 59.6609 22.1432C67.2734 24.1319 66.1944 2.77089 72.9993 2.05179C79.8042 1.33268 80.6746 49.9203 87.7124 49.797C94.7501 49.6736 94.7925 16.6376 102.241 17.0602C109.69 17.4828 110.211 35.8671 118.197 35.7272C126.182 35.5873 128.361 19.2159 135.351 17.5799C142.341 15.944 140.228 -1.2723 147.553 3.94796C154.878 9.16821 154.337 29.52 161.11 30.3314C167.883 31.1429 169.852 18.082 175.628 15.7741C181.404 13.4661 183.986 3.24461 189.715 3.14422"
          stroke="url(#paint0_linear_2139_1978)"
          strokeWidth="3.32143"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2139_1978"
            x1="2.61522"
            y1="27.284"
            x2="190.127"
            y2="23.4845"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B53434" stopOpacity="0" />
            <stop offset="1" stopColor="#FF1C1C" />
          </linearGradient>
        </defs>
      </svg>
    </StyledGraphic>
  ) : (
    <StyledGraphic color={color}>
      <svg
        width="98"
        height="52"
        viewBox="0 0 98 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.30103 33.6772C9.75028 33.7292 10.5833 39.7347 15.9001 41.4374C21.217 43.1401 23.4366 21.148 29.5018 20.4179C35.5671 19.6879 37.7054 48.5527 43.1035 47.0476C48.5017 45.5424 48.9068 32.5102 56.0252 30.3874C63.1435 28.2646 62.5361 49.6513 68.9468 50.2514C75.3575 50.8514 75.2502 2.23291 81.8684 2.23291C88.4866 2.23291 89.1557 35.2788 96.1502 34.7255C103.145 34.1722 103.284 15.7728 110.793 15.7728C118.303 15.7728 120.663 32.1112 127.265 33.6252C133.867 35.1391 132.209 52.3979 138.996 47.0476C145.782 41.6972 144.886 21.3484 151.237 20.4179C157.589 19.4875 159.688 32.5181 165.162 34.7255C170.636 36.9329 173.258 47.1124 178.645 47.1124"
          stroke="url(#paint0_linear_2139_1942)"
          strokeWidth="3.32143"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2139_1942"
            x1="2.30103"
            y1="26.2449"
            x2="178.645"
            y2="26.2449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34B53A" stopOpacity="0" />
            <stop offset="1" stopColor="#1CFF26" />
          </linearGradient>
        </defs>
      </svg>
    </StyledGraphic>
  );
}

export default GraphicStat;
