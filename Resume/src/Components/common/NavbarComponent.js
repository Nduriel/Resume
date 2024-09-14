import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "goldenrod",
};

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
                  to="/"
                  onClick={toggle}
                  style={navStyle}
                  activeStyle={activeStyle}
                  className="nav-link"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={toggle}
                  style={navStyle}
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/WorkExperience"
                >
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={toggle}
                  style={navStyle}
                  activeStyle={activeStyle}
                  to="/PersonalInfo"
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

export default NavbarComponent;
