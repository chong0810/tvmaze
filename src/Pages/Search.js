import React from "react";
import {Button, Container, Form, Row } from 'react-bootstrap'

class Search extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return (
        <div >

            <Container>
                <Row className = "justify-content-center">
                    <h1>Search for shows or people</h1>
                </Row>
                <Form>
                <Form.Control type="text" placeholder="Search for shows or people" />
                </Form>
                <Button variant="success">
                    Show Search
                </Button>

                <Button variant="primary">
                    People Search
                </Button>

            </Container>
        </div>
    );
  }
}
export default Search;
