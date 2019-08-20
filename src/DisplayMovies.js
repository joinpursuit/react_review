import React, { Component } from "react";
import axios from 'axios'
import Movies from './Movies'
import MovieShow from "./MovieShow";
import { Route } from 'react-router-dom';

class MoviesDisplay extends Component {
  state = { movies: [], activeMovie: {} };

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/films").then(res => {
      this.setState({ movies: res.data });
    });
  }

    handleClick =(e) => {
        let movie = this.state.movies.find(el => el.id === e.target.id);
        this.setState({activeMovie: movie});
        this.props.history.push("/movies/" + e.target.id)
    }

  render() {
    return (
        <>
        <Route exact path="/" render={(props) => <Movies movies={this.state.movies} handleClick={this.handleClick} /> }/>
        <Route path="/movies/:id" render={(props) => <MovieShow movie={this.state.activeMovie} movies={this.state.movies} {...props} /> }/>
        </>
    );
  }
}

export default MoviesDisplay;
