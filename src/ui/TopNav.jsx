import styled from "styled-components";

const TopNavContainer = styled.div`
  position: relative;
  padding: 10px 56px;
  background: #01213a;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  gap: 20px; /* min space between searchBar and the profile*/
  height: 30px;
`;

function TopNav() {
  return (
    <TopNavContainer id="topnav">
      <Frame>
        <div className="searchBar">
          <span>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.12497 7.37506C3.12497 5.30694 4.80684 3.62506 6.87497 3.62506C8.94309 3.62506 10.625 5.30694 10.625 7.37506C10.625 9.44319 8.94309 11.1251 6.87497 11.1251C4.80684 11.1251 3.12497 9.44319 3.12497 7.37506ZM12.9419 12.5581L10.82 10.4356C11.4781 9.58938 11.875 8.52875 11.875 7.375C11.875 4.61813 9.63188 2.375 6.875 2.375C4.11813 2.375 1.875 4.61813 1.875 7.375C1.875 10.1319 4.11813 12.375 6.875 12.375C8.02875 12.375 9.08938 11.9781 9.93563 11.32L12.0581 13.4419C12.18 13.5638 12.34 13.625 12.5 13.625C12.66 13.625 12.82 13.5638 12.9419 13.4419C13.1863 13.1975 13.1863 12.8025 12.9419 12.5581Z"
                fill="white"
              />
            </svg>
          </span>
          <input placeholder="Search for anything..."></input>
        </div>
        <div className="notification-profile">
          <span className="notification">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.82525 14.5L5.85775 13.4657C6.1885 13.135 6.3705 12.6957 6.3705 12.2285V8.1361C6.3705 6.94873 6.88675 5.81385 7.788 5.0246C8.69625 4.22835 9.853 3.87835 11.0579 4.03673C13.094 4.3071 14.6296 6.1481 14.6296 8.31985V12.2285C14.6296 12.6957 14.8116 13.135 15.1415 13.4649L16.1749 14.5H4.82525ZM12.2496 16.5484C12.2496 17.335 11.4481 18 10.4996 18C9.55112 18 8.74962 17.335 8.74962 16.5484V16.25H12.2496V16.5484ZM17.9555 13.807L16.3796 12.2285V8.31985C16.3796 5.27398 14.1904 2.6866 11.2871 2.30248C9.60537 2.07848 7.90787 2.5921 6.63475 3.7086C5.35375 4.83035 4.6205 6.44385 4.6205 8.1361L4.61962 12.2285L3.04375 13.807C2.63337 14.2182 2.51175 14.8299 2.734 15.3662C2.95712 15.9035 3.476 16.25 4.057 16.25H6.99962V16.5484C6.99962 18.3141 8.56937 19.75 10.4996 19.75C12.4299 19.75 13.9996 18.3141 13.9996 16.5484V16.25H16.9422C17.5232 16.25 18.0412 15.9035 18.2635 15.3671C18.4866 14.8299 18.3659 14.2174 17.9555 13.807Z"
                fill="white"
              />
            </svg>
            <span className="notifIndex">3</span>
          </span>
          <div className="profile">
            <img src="./public/profile.jpg" alt="ProfileImage" />
            <span>A.EL FAQRI</span>
            <span className="dropIcone">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.30608 3.94617C2.1404 4.11658 2.1404 4.39287 2.30608 4.56328L5.70002 8.05419C5.77958 8.13602 5.88749 8.182 6.00001 8.182C6.11252 8.182 6.22043 8.13602 6.29999 8.05419L9.69393 4.56328C9.85961 4.39287 9.85961 4.11658 9.69393 3.94617C9.52825 3.77576 9.25964 3.77576 9.09396 3.94617L6.00001 7.12852L2.90605 3.94617C2.74037 3.77576 2.47176 3.77576 2.30608 3.94617Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </Frame>
    </TopNavContainer>
  );
}

export default TopNav;
