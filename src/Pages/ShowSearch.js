import React from "react";
import { Container, Row } from "react-bootstrap";
import { ShowListCard } from "../Components/ShowListCard";

class ShowSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      show: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    this.searchShow("");
  }

  searchShow(searchTerm) {
    fetch("https://api.tvmaze.com/search/shows?q=" + searchTerm)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            show: result,
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
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.searchShow(searchTerm);
  }

  getShow = (show) => {
    console.log(show);
    console.log("Its working");
    return <ShowListCard details={show}></ShowListCard>;
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
          <input
            style={{
              fonrtsize: 24,
              display: "block",
              width: "99%",
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 16,
            }}
            onChange={this.searchChangeHandler.bind(this)}
            placeholder="Enter the search term"
          ></input>
          <Row className="justify-content-center">
            {this.state.show.slice(0, 10).map(this.getShow)}
          </Row>
        </Container>
      );
    }
  }
}

export default ShowSearch;
