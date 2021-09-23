import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {value: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <h1>Search for shows or people</h1>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Search for Shows
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Search;
