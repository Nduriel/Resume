import React, { useState } from "react";
import { Navbar, NavItem, Nav, Collapse, NavLink, Container } from "reactstrap";

function NavbarComponent() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" expand="md"  classticky="top" light>
        <Container fluid>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Work Experience
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
