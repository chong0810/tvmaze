import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ShowCard } from "../Components/ShowCard";

class Show extends React.Component {
  constructor() {
    super();

    this.state = {
      shows: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    this.searchForMovie();
  }

  searchForMovie = () => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            shows: result,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  };

  getShow = (show, index) => {
    return <ShowCard details={show}></ShowCard>;
  };

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return (
        <Container>
          <div>Error: {error.message}</div>
        </Container>
      );
    } else if (!isLoaded) {
      return (
        <Container>
          <div>Loading....</div>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row className="justify-content-center">
           <Col xs lg="3"> <h1> Shows You Might Like </h1>
           </Col>
          </Row>

          <Row className="justify-content-center">
            <Col sm={1}></Col>
            <Col sm={10}>
              <Row className="justify-content-center">
                {this.state.shows.slice(0, 25).map(this.getShow)}
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Show;
