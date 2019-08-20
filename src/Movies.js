import React, { Component } from "react";
import axios from "axios";

function Movies({ movies, handleClick }) {
  // constructor() {
  //     super()
  //     // this.state = { movies: [] };
  //     // this.handleClick = this.handleClick.bind(this)
  // }

  //   componentDidMount() {
  //     axios.get("https://ghibliapi.herokuapp.com/films").then(res => {
  //       this.setState({ movies: res.data });
  //     });
  //   }

  //   handleClick =(e) => {
  //       this.props.history.push("/movies/" + e.target.id)
  //   }

  movies = movies.map(movie => {
    return (
      <li key={movie.id} id={movie.id}>
        {movie.title}
      </li>
    );
  });
  return <ul onClick={handleClick}>{movies} </ul>;
}
// }

export default Movies;
