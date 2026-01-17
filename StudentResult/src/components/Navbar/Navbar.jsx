import { Nav, NavItem } from "./Navbar.styles";

export default function Navbar() {
  return (
    <Nav>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/about">
        About
      </NavItem>
      <NavItem to="/contact">
        Contact
      </NavItem>
    </Nav>
  );
}
