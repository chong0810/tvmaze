import React from "react";
import {Button, Container, Form, Row } from 'react-bootstrap'

class PeopleSearch extends React.Component {
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
                    People Search
                </Button>

                <Button variant="success">
                    People Search
                </Button>

            </Container>
        </div>
    );
  }
}
export default PeopleSearch;
