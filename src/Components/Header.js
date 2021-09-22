import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
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
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for Shows"
              className="mr-2"
              aria-label="Search"
            />
            <Button href="/search" variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}
