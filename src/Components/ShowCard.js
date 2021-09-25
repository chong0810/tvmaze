import React from "react";
import { Card } from "react-bootstrap";

export class ShowCard extends React.Component {
  render() {
    return (
      <Card bg='dark' text='white' style={{ width: "18rem", margin:".5rem"  }}>
        <a href= {this.props.details.url}><Card.Img variant="top" src={this.props.details.image.medium} /></a>
        <Card.Body>
          <Card.Title><a href= {this.props.details.url} > {this.props.details.name}</a> </Card.Title>
          <Card.Text>
            {this.props.details.language}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
