import React, { Component } from "react";
import axios from "axios";

class Movies extends Component {
    constructor() {
        super()
        this.state = { movies: [] };
        // this.handleClick = this.handleClick.bind(this)
    }

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/films").then(res => {
      this.setState({ movies: res.data });
    });
  }

  handleClick =(e) => {
      this.props.history.push("/movies/" + e.target.id)
  }

  render() {
    let { movies } = this.state;
    movies = movies.map(movie => {
      return <li key={movie.id} id={movie.id}>{movie.title}</li>;
    });
    return <ul onClick={this.handleClick}>{movies}</ul>;
  }
}

export default Movies;
