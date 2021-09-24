import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown
} from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">TVMAZE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/show">Shows</Nav.Link>
            <NavDropdown title="Search" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/search/people">
                People
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/search/shows">
                Shows
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
