import React from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
const MovieList = ({ Movies, setMovies }) => {
  return (
    <Row>
      {/* Movies Component */}
      {Movies.map((element) => (
        <MovieCard Movies={element} key={element.id} />
      ))}
    </Row>
  );
};

export default MovieList;
