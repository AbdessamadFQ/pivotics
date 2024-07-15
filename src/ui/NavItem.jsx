/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-left: 12px;
  align-items: center;
  height: 45px;
  border-radius: 4px;
  background: ${(props) =>
    props.pathname === props.path
      ? `linear-gradient(
      90deg,
      rgba(22, 214, 168, 0.5) 0%,
      rgba(143, 148, 153, 0) 100%
    )`
      : ``};

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(22, 214, 168, 0.5) 0%,
      rgba(143, 148, 153, 0) 100%
    );
  }
`;

function NavItem({ to, icon, text }) {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <StyledNavItem path={to} pathname={pathname}>
        <img src={icon} alt="test" className="Navicons" />
        <span className="navText">{text}</span>
        {pathname === to && <span className="badge"></span>}
      </StyledNavItem>
    </Link>
  );
}

export default NavItem;
