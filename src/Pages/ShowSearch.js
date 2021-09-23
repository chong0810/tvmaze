import React from "react";
import {Button, Container, Form, Row } from 'react-bootstrap'

class ShowSearch extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return (
        <div >

            <Container>
            {console.log(this.props.details)}

            </Container>
        </div>
    );
  }
}
export default ShowSearch;
