import React, { Component } from "react";
import axios from "axios";

class MovieShow extends Component {
  state = { movie: {} };
  componentDidMount() {
    axios
      .get(
        "https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id
      )
      .then(res => {
        this.setState({ movie: res.data });
      });
  }
  render() {
    const { movie } = this.state;
    return (
      <>
        <h1>{movie["title"]}</h1>
        <p>{movie.description}</p>
        <div>{movie.release_date}</div>
      </>
    );
  }
}

export default MovieShow;
