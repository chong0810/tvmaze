import React from "react";

class Show extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

    this.searchForMovie();

  }

  searchForMovie = () => {
      
    fetch("https://api.tvmaze.com/shows")

  };

  render() {
    return <h1>This is a show page</h1>;
  }
}

export default Show;
