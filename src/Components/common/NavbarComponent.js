import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  Nav,
  Collapse,
  NavLink,
  Container,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div>
      <Navbar id="navBar" light collapseOnSelect expand="md" classticky="top">
        <Container fluid>
          <NavbarToggler
            onClick={toggle}
            aria-controls="responsive-navbar-nav"
          />
          <Collapse isOpen={isOpen} navbar id="responsive-navbar-nav">
            <Nav navbar>
              <NavItem>
                <NavLink
                  exact
                  style={navStyle}
                  activeStyle={activeStyle}
                  href="/home"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={navStyle}
                  className="nav-link"
                  activeStyle={activeStyle}
                  href="/WorkExperience"
                >
                  Work Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={navStyle}
                  activeStyle={activeStyle}
                  href="/PersonalInfo"
                  className="nav-link"
                >
                  Personal Info
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand style={navStyle.brand}>
            Jean-Eric Pierre-Louis
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}
const navStyle = {
  color: "white",
  textShadow: "1px 1px black",
  brand: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 1px black",
  },
};

const activeStyle = {
  color: "goldenrod",
};

export default NavbarComponent;
