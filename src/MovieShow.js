import React, { Component } from "react";
import axios from "axios";

function MovieShow(props) {
    // debugger
    let movie = props.movie.title ? props.movie :  props.movies.find(
              el => el.id === props.match.params.id
            );
        if(!movie) return null;
    return(
      <>
        <h1>{movie["title"]}</h1>
        <p>{movie.description}</p>
        <div>{movie.release_date}</div>
      </>    )
//   state = { movie: {} };
//   componentDidMount() {
//     axios
//       .get(
//         "https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id
//       )
//       .then(res => {
//         this.setState({ movie: res.data });
//       });
//   }
//   render() {
//       debugger
//     const { movie } = this.state;
//     return (
//       <>
//         <h1>{movie["title"]}</h1>
//         <p>{movie.description}</p>
//         <div>{movie.release_date}</div>
//       </>
//     );
//   }
}

export default MovieShow;
