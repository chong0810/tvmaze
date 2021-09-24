import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {PeopleCard} from "../Components/PeopleCard";

class PeopleSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [
      ],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    this.searchPeople();
  }

  searchPeople = () => {
    fetch("https://api.tvmaze.com/search/people?q=lauren")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            people: result,
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

  getPeople = (people) => {
    return <PeopleCard details = {people}></PeopleCard>
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
              placeholder="Enter the search term"
            ></input>
            <Row className="justify-content-center">
          {this.state.people.slice(0,5).map(this.getPeople)}
          </Row>
          </Container>

          
        
      );
    }
  }
}

export default PeopleSearch;
