import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export class PeopleCard extends React.Component {
  getImageURL(info) {
    var imageArray1 = [];

    for (var i in info) {
      imageArray1.push([info[i]]);
    }
    return imageArray1[0];
  }

  getCountry(info) {
    var countryArray1 = [];

    for (var i in info) {
      countryArray1.push([info[i]]);
    }
    return countryArray1[0];
  }

  getAge(info) {
    if (info != null) {
      let year = parseInt(info.substring(0, 4));

      let date = new Date().getFullYear();

      return date - year;
    }
  }

  render() {
    return (
      <Card bg="white" text="black">
        <Row>
          <Col md={2}>
            <a href={this.props.details.person.url}>
              <Card.Img
                variant="top"
                style={{ width: "10rem", margin: ".5rem" }}
                src={this.getImageURL(this.props.details.person.image)}
              />
            </a>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                <a href={this.props.details.person.url}>
                  {" "}
                  {this.props.details.person.name}
                </a>{" "}
              </Card.Title>
              <Card.Text>
                {this.getAge(this.props.details.person.birthday)}
              </Card.Text>
              <Card.Text>{this.props.details.person.birthday}</Card.Text>
              <Card.Text>{this.props.details.person.gender}</Card.Text>
              <Card.Text>
                {this.getCountry(this.props.details.person.country)}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}
