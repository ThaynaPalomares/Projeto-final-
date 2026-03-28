import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#0d6efd",
          padding: "10px 0"
        }}
        variant="dark"
      >
        <Container>
<LinkContainer to="/">
  <Navbar.Brand style={{ fontWeight: "bold" }}>
    ESM Forum | Plataforma de Perguntas
  </Navbar.Brand>
</LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link style={{ fontWeight: "500" }}>
                  Perguntas
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/sobre">
                <Nav.Link style={{ fontWeight: "500" }}>
                  Sobre
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Menu;