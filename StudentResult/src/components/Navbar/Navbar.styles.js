import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  background: #0f172a;
  padding: 15px 0;
`;

export const NavItem = styled(NavLink)`
  color: #e5e7eb;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;

  &.active {
    color: #60a5fa;
    border-bottom: 2px solid #60a5fa;
    padding-bottom: 4px;
  }

  &:hover {
    color: #93c5fd;
  }
`;
