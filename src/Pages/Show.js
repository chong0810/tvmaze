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
    return (
      <Container>
        <Row xs ={1} md = {2} className="g-4">
            <Col md={2}>
          <ShowCard details={show}></ShowCard>
          </Col>
        </Row>
      </Container>
    );
  };

  render() {
    const { error, isLoaded, shows } = this.state;

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
      return <Container>{this.state.shows.map(this.getShow)}</Container>;
    }

    return <h1>This is a show page</h1>;
  }
}

export default Show;
