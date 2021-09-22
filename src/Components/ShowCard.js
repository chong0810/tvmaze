import React from "react";
import { Card } from "react-bootstrap";

export class ShowCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.details.image.medium} />
        <Card.Body>
          <Card.Title><a href= {this.props.details.officialSite} > {this.props.details.name}</a> </Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
