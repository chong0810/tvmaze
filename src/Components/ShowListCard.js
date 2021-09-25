import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../CSS/imageResize.css";

export class ShowListCard extends React.Component {
  getImageURL(info) {
    var imageArray1 = [];

    for (var i in info) {
      imageArray1.push([info[i]]);
    }

    return imageArray1[0];
  }

  getGenre(info) {
    var genreArray1 = [];

    for (var i in info) {
      genreArray1.push([info[i]]);
    }

    if (genreArray1[1] !== undefined) {
      return genreArray1[0] + ", " + genreArray1[1];
    } else {
      return genreArray1[0];
    }
  }

  getNetwork(info) {
    var networkArray1 = [];

    for (var i in info) {
      networkArray1.push([info[i]]);
    }

    if (networkArray1[1] !== undefined) {
      return networkArray1[1];
    }
  }

  render() {
    return (
      <Card bg="white" text="black">
        <Row>
          <Col md={2}>
            <a href={this.props.details.show.url}>
              <Card.Img
                variant="top"
                style={{ width: "10rem", margin: ".5rem" }}
                src={this.getImageURL(this.props.details.show.image)}
              />
            </a>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                <a href={this.props.details.show.url}>
                  {this.props.details.show.name}
                </a>
              </Card.Title>
              <Card.Text>{this.props.details.show.type}</Card.Text>
              <Card.Text>
                {this.getGenre(this.props.details.show.genres)}
              </Card.Text>
              <Card.Text>
                {this.getNetwork(this.props.details.show.network)}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}
