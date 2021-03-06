import React from "react";
import Movies from "./Movies";
import MovieShow from "./MovieShow";
import NavBar from './NavBar';
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route component={NavBar} />
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:id" component={MovieShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
